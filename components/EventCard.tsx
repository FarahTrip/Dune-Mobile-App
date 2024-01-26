import React from "react";
import { ImageBackground, TouchableWithoutFeedback, View } from "react-native";
import { eventCardType } from "../types/event.types";
import { Image, Text } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import TextPop from "./TextPop";

interface props {
  event: eventCardType;
}

const EventCard = ({ event }: props) => {
  return (
    <View className="w-full h-64 my-2 bg-white  relative rounded-[30px] overflow-hidden">
      <ImageBackground
        className="w-full h-full rounded-[30px]"
        imageStyle={{ borderRadius: 24 }}
        width={300}
        height={300}
        source={{ uri: `${event.imagePath}` }}
      >
        <View className="w-full h-1/3  px-4 py-2 flex justify-between flex-row">
          <View className="flex flex-row items-center">
            <View className="rounded-full w-12 h-12 bg-black"></View>
            <Text className="text-xl ml-2 text-white ">{event.user}</Text>
          </View>
          <FontAwesome
            style={{
              marginTop: 20,
            }}
            name="share-alt"
            size={30}
            color="white"
          />
        </View>
        <View className="w-full px-8 h-24  absolute bottom-0 flex">
          <TextPop numberOfLines={1} className="text-white text-2xl font-bold ">
            {event.name}
          </TextPop>

          <View>
            <Text className="text-white ">{event.latitude}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default EventCard;
