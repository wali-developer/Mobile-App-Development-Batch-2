import {
  SectionList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

const Sections = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ padding: 15 }}>
      {/* <Text>Sections</Text> */}
      <SectionList
        sections={DATA}
        keyExtractor={(index) => index}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#f9c2ff",
              padding: 10,
              marginBottom: 10,
            }}
          >
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            {title}
          </Text>
        )}
        contentContainerStyle={{ width }}
      />
    </View>
  );
};

export default Sections;

const styles = StyleSheet.create({});
