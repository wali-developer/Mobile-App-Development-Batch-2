import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={19} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="users/index"
        options={{
          title: "Users",
          tabBarIcon: ({ color }) => (
            <Ionicons name="list-circle" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircleo" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="layoutExample"
        options={{
          title: "Layout",
          tabBarIcon: ({ color }) => (
            <Feather name="layout" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="users/[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
