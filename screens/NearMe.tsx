import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import MenuDrawer from "../components/MenuDrawer";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { mapStyle } from "../styles/mapStyle";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const NearMe = () => {
  const [mapLat, setMapLat] = useState(6.841776681);
  const [mapLong, setMapLong] = useState(79.869319);
  const [location, setLocation] = useState<any>();
  const [errorMsg, setErrorMsg] = useState("");
  const [response, setresponse] = useState<any>();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getLastKnownPositionAsync({});
      if (!location) {
        location = await Location.getCurrentPositionAsync({});
      }
      setLocation(location);
      setMapLat(location.coords.latitude);
      setMapLong(location.coords.longitude);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const handleTestApi = async () => {
    try {
      const response = await axios.get(process.env.EXPO_PUBLIC_BACKENDURL);
      setresponse(response);
    } catch (error) {
      setresponse("eroare");
    }
  };

  useEffect(() => {
    handleTestApi();
  }, []);

  return (
    <View className="w-full h-full">
      {location && (
        <>
          <MapView
            provider="google"
            className="w-full h-full"
            initialRegion={{
              latitude: location?.coords.latitude || mapLat,
              longitude: location?.coords.longitude || mapLong,
              latitudeDelta: 0.00002,
              longitudeDelta: 0.00221,
            }}
            showsUserLocation={true}
            followsUserLocation={true}
            loadingEnabled={true}
            customMapStyle={mapStyle}
          ></MapView>
          <View className="flex absolute flex-row w-72 h-14 px-6 z-50 self-center top-14 items-center justify-between bg-black rounded-[50px]">
            <View className="flex flex-row">
              <FontAwesome
                className="flex "
                name="search"
                size={24}
                color="white"
              />
              <TextInput
                className="
                    text-start text-white px-2 w-10/12"
              >
                {`${response?.data.salut}`}
              </TextInput>
            </View>
            <Ionicons
              className=" flex "
              name="menu-outline"
              size={24}
              color="white"
            />
          </View>
        </>
      )}

      <MenuDrawer></MenuDrawer>
    </View>
  );
};

export default NearMe;
