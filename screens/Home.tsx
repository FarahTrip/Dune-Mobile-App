import React from "react";
import { ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import OptionSwitcher from "../components/OptionSwitcher";
import HomeFillters from "../components/HomeFillters";
import { eventCardType } from "../types/event.types";
import EventCard from "../components/EventCard";
import MenuDrawer from "../components/MenuDrawer";

const Home = () => {
  const stories = [
    {
      name: "Valentin",
    },
    {
      name: "Lyods",
    },
    {
      name: "Sarmanu",
    },
    {
      name: "Chilli",
    },
    {
      name: "Chilli",
    },
    {
      name: "Chilli",
    },
    {
      name: "Chilli",
    },
    {
      name: "Chilli",
    },
    {
      name: "Chilli",
    },
  ];

  const events: eventCardType[] = [
    {
      name: "Concert nebunia lui Salam",
      location: {
        longitude: "",
        latitude: "",
        name: "Lyods pub",
      },
      imagePath:
        "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      user: "AndreiCC",
    },
    {
      name: "Concert nebunia lui Salam",
      location: {
        longitude: "",
        latitude: "",
        name: "Lyods pub",
      },
      imagePath:
        "https://as1.ftcdn.net/v2/jpg/05/03/58/28/1000_F_503582859_7SJMOrd2Xf5ujdBjrBCam7ngr9wc84vH.jpg",
      user: "Paladinu",
    },
    {
      name: "Concert nebunia lui Salam",
      location: {
        longitude: "",
        latitude: "",
        name: "Lyods pub",
      },
      imagePath: "../assets/placeholders/plch1.jpg",
      user: "SmecherituUrsitu",
    },
    {
      name: "Concert nebunia lui Salam",
      location: {
        longitude: "",
        latitude: "",
        name: "Lyods pub",
      },
      imagePath: "../assets/placeholders/plch2.jpg",
      user: "POelerima",
    },
  ];

  return (
    <LinearGradient
      colors={["#272323", "#000000"]}
      className="p-6 w-full h-full flex"
    >
      <MenuDrawer></MenuDrawer>
      <ScrollView>
        <View>
          <ScrollView
            pagingEnabled={true}
            horizontal={true}
            className="flex flex-row w-full "
            decelerationRate={"fast"}
            snapToInterval={362}
            snapToAlignment={"end"}
            contentContainerStyle={{
              paddingTop: 35,
              gap: 12,
            }}
          >
            {stories.map((story) => (
              <View className="gap-2 flex items-center">
                <View className="w-20 h-20 rounded-full bg-white "></View>
                <Text className="text-white">{story.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View className="w-full flex items-center justify-center mt-4 mb-4">
          <View className="w-64">
            <OptionSwitcher></OptionSwitcher>
          </View>
        </View>
        <HomeFillters></HomeFillters>

        <ScrollView
          contentContainerStyle={{
            gap: 25,
            marginTop: 25,
          }}
        >
          {events.map((event) => (
            <EventCard event={event}></EventCard>
          ))}
        </ScrollView>
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;
