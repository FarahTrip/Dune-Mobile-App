import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

const filters = [
  {
    filter: "All",
  },
  {
    filter: "Concert",
  },
  {
    filter: "Party",
  },
  {
    filter: "Techno",
  },
];

const HomeFilters = () => {
  const [selectedFilters, setSelectedFilters] = useState(["All"]);

  const handleFilterPress = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <View>
      <ScrollView horizontal>
        {filters.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleFilterPress(item.filter)}
            style={{
              backgroundColor: selectedFilters.includes(item.filter)
                ? "orange"
                : "transparent",
              padding: 10,
              paddingHorizontal: 20,
              margin: 5,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "orange",
            }}
          >
            <Text
              style={{
                color: selectedFilters.includes(item.filter)
                  ? "black"
                  : "orange",
              }}
            >
              {item.filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeFilters;
