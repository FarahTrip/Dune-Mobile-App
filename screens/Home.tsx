import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import OptionSwitcher from "../components/OptionSwitcher";
import HomeFillters from "../components/HomeFillters";
import { eventCardType } from "../types/event.types";
import EventCard from "../components/EventCard";
import MenuDrawer from "../components/MenuDrawer";
import { client } from "../global/client";
import { colors } from "react-native-elements";

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

  const [events, setevents] = useState();
  const [refreshing, setrefreshing] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getInitialEvents();
      setevents(events);
      console.log(events);
    };

    fetchEvents();
  }, []);

  const getInitialEvents = async () => {
    try {
      const response = await client.get("/events");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const refresh = async () => {
    try {
      const response = await client.get("/events");
      setevents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LinearGradient
      colors={["#272323", "#000000"]}
      className="p-6 w-full h-full flex"
    >
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
      <FlatList
        className=""
        // keyExtractor={(event) => }
        refreshing={refreshing}
        onRefresh={refresh}
        data={events}
        renderItem={({ item }) => <EventCard event={item}></EventCard>}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refresh}
            tintColor={"#fff"}
          />
        }
      ></FlatList>

      <MenuDrawer></MenuDrawer>
    </LinearGradient>
  );
};

export default Home;
