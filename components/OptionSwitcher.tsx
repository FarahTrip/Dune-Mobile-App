import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const OptionSwitcher = () => {
  const [selectedOption, setSelectedOption] = useState("Events");

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "black",
        borderRadius: 30,
        padding: 6,
      }}
    >
      <TouchableOpacity
        onPress={() => setSelectedOption("Events")}
        style={{
          backgroundColor:
            selectedOption === "Events" ? "orange" : "transparent",
          paddingVertical: 15,
          paddingHorizontal: 30,
          borderRadius: 30,
          shadowColor: selectedOption === "Events" ? "orange" : "transparent",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 1,
        }}
      >
        <Text
          style={{
            color: selectedOption === "Events" ? "black" : "white",
            fontSize: 18,
          }}
        >
          Events
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setSelectedOption("Discover")}
        style={{
          backgroundColor:
            selectedOption === "Discover" ? "orange" : "transparent",
          paddingVertical: 15,
          paddingHorizontal: 30,
          borderRadius: 30,
          shadowColor: selectedOption === "Discover" ? "orange" : "transparent",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 1,
        }}
      >
        <Text
          style={{
            color: selectedOption === "Discover" ? "black" : "white",
            fontSize: 18,
          }}
        >
          Discover
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OptionSwitcher;
