import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import TextPop from "../components/TextPop";

const LoginPage = () => {
  const [isOn, setisOn] = useState(false);

  const handlePress = () => {
    setisOn(!isOn);
  };

  return (
    <View className="flex-1 items-center bg-dune-primary justify-between content-center  relative  w-full h-full">
      <TextPop className="text-white text-5xl font-bold absolute top-20 ">
        DUNE
      </TextPop>
      <View className="w-full h-2/3 bg-dune-secondary absolute flex items-center justify-center">
        <View className="absolute h-full bg-slate-300 w-6"></View>
        <View className="absolute h-2/3  w-1/2 flex items-center justify-center right-0 top-0">
          <Text
            style={{ fontFamily: "Audiowide_400Regular" }}
            className="flex text-white text-4xl"
          >
            DUNE
          </Text>
          <Text
            style={{ fontFamily: "Audiowide_400Regular" }}
            className="flex text-white text-4xl"
          >
            DUNE
          </Text>
          <Text
            style={{ fontFamily: "Audiowide_400Regular" }}
            className="flex text-white text-4xl"
          >
            DUNE
          </Text>
          <Text
            style={{ fontFamily: "Audiowide_400Regular" }}
            className="flex  text-[#f58842] text-4xl"
          >
            DUNE
          </Text>
          <Text
            style={{ fontFamily: "Audiowide_400Regular" }}
            className="flex text-white text-4xl"
          >
            DUNE
          </Text>
          <Text
            style={{ fontFamily: "Audiowide_400Regular" }}
            className="flex text-white text-4xl"
          >
            DUNE
          </Text>
          <Text
            style={{ fontFamily: "Audiowide_400Regular" }}
            className="flex text-white text-4xl"
          >
            DUNE
          </Text>
          <Text
            style={{ fontFamily: "Audiowide_400Regular" }}
            className="flex text-white text-4xl"
          >
            DUNE
          </Text>
          <Text
            style={{ fontFamily: "Audiowide_400Regular" }}
            className="flex text-white text-4xl"
          >
            DUNE
          </Text>
          <Text
            style={{ fontFamily: "Audiowide_400Regular" }}
            className="flex text-white text-4xl"
          >
            DUNE
          </Text>
        </View>
        <Image
          className="h-[70%] w-[70%] absolute left-[-10%] top-[-6%]"
          source={require("../assets/Clay_Orange0001.png")}
        ></Image>
      </View>
      <View className="w-full flex justify-center items-center absolute h-2/3 bottom-0  ">
        <Image
          blurRadius={50}
          className="w-full h-full absolute blur-2xl rounded-3xl "
          source={require("../assets/login-bg.jpg")}
        ></Image>
        <View className="flex w-11/12  items-center relative py-10rounded-2xl  ">
          <View className="w-full flex ">
            <View className="flex flex-row ">
              <AntDesign name="user" size={24} color="white" />
              <Text className="text-lg text-white"> Username</Text>
            </View>
            <TextInput
              textContentType="username"
              className="text-white mb-4 border-b-[1px]  border-[#4c564e] bg-transparent  rounded-md px-2 py-1 relative flex"
            ></TextInput>
          </View>
          <View className="w-full flex">
            <View className="flex flex-row">
              <Entypo name="key" size={24} color="white" />
              <Text className="text-lg ml-2 text-white">Password</Text>
            </View>
            <TextInput
              textContentType="password"
              secureTextEntry={true}
              className="text-white mb-4 border-b-[1px] border-[#4c564e]  bg-transparent  rounded-md px-2 py-1 relative flex"
            ></TextInput>
          </View>

          {/* <TextPop className="text-white text-2xl">or</TextPop>
                        <TouchableOpacity
              onPress={handlePress}
              className="flex p-3  bg-dune-accent rounded-xl mt-2"
                        >
              <TextPop className="text-white text-lg">Register</TextPop>
                        </TouchableOpacity> */}
        </View>
        <TouchableOpacity
          onPress={handlePress}
          className="flex p-3  bg-[#f58842] shadow-xl w-11/12 items-center shadow-black  rounded-xl mt-4 px-10"
        >
          <TextPop className="text-white text-lg">Login</TextPop>
        </TouchableOpacity>
        <Text className="text-white my-6">Don't have an account yet?</Text>
        <TouchableWithoutFeedback>
          <Text className="text-dune-accent">Register now</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default LoginPage;
