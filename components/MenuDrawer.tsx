import React, { useRef, useState } from "react";
import { PanResponder, Animated, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Image } from "react-native-elements";

const MenuDrawer = () => {
  const height = useRef(new Animated.Value(80)).current; // initial height
  const [isExpanded, setisExpanded] = useState(false);
  const threshold = 50;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      if (!isExpanded) {
        // If not expanded, swipe up to expand
        if (gestureState.dy < 0) {
          height.setValue(80 - gestureState.dy);
        }
      } else {
        // If expanded, swipe down to minimize
        if (gestureState.dy > 0) {
          height.setValue(600 - gestureState.dy);
        }
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dy < -threshold && !isExpanded) {
        // Swipe up
        setisExpanded(true);
        Animated.timing(height, {
          toValue: 600,
          duration: 150,
          useNativeDriver: false,
        }).start();
      } else if (gestureState.dy > threshold && isExpanded) {
        // Swipe down
        setisExpanded(false);
        Animated.timing(height, {
          toValue: 80,
          duration: 150,
          useNativeDriver: false,
        }).start();
      } else {
        // Swipe didn't pass the threshold, return to current state
        Animated.timing(height, {
          toValue: isExpanded ? 600 : 80,
          duration: 150,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return (
    <Animated.View
      style={{ height }}
      {...panResponder.panHandlers}
      className={`w-11/12 absolute flex bottom-10  flex-row justify-between  z-50 self-center rounded-[50px] border-[1px] border-white overflow-hidden`}
    >
      <LinearGradient
        colors={["rgba(18, 18, 18, 1)", "rgba(18, 18, 18, 0.9)"]}
        className={
          "w-full h-full flex px-6 flex-row justify-between items-center rounded-[50px]"
        }
        start={{ x: 0.25, y: 0.25 }}
      >
        {!isExpanded && (
          <>
            <FontAwesome name="search" size={30} color="white" />
            <View className="flex justify-center items-center ">
              <View className="absolute top-[-17] left-[30%]">
                <FontAwesome5 name="grip-lines" size={20} color="white" />
              </View>
              <View className="w-12 h-12 bg-dune-accent rounded-full flex items-center justify-center">
                <FontAwesome
                  className="shadow-lg"
                  name="map-marker"
                  size={40}
                  color="white"
                />
              </View>
            </View>
            <AntDesign name="heart" size={30} color="white" />
          </>
        )}
        {isExpanded && (
          <View className="flex w-full h-full">
            <View className="w-full mt-8 h-24 justify-center items-center ">
              <FontAwesome5 name="grip-lines" size={24} color="white" />
              <Image
                source={{
                  uri: "https://i.pinimg.com/564x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
                }}
                className="flex  rounded-full h-24 w-24"
              ></Image>
              <Text
                className="text-2xl text-white
              "
              >
                John Doe
              </Text>
            </View>
          </View>
        )}
      </LinearGradient>
    </Animated.View>
  );
};

export default MenuDrawer;
