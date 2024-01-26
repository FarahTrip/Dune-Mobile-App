import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import React from "react";
import WelcomeScreen from "./screens/LoginPage";
import { setCustomText } from "react-native-global-props";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Audiowide_400Regular } from "@expo-google-fonts/audiowide";
import Home from "./screens/Home";
import NearMe from "./screens/NearMe";
import LoginPage from "./screens/LoginPage";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Audiowide_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    const customTextProps = {
      style: {
        fontFamily: "Audiowide_400Regular",
      },
    };

    setCustomText(customTextProps);
  }

  return <NearMe></NearMe>;
}
