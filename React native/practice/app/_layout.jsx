import "@expo/metro-runtime";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import App from "../App";
import { Stack } from "expo-router";
import { ThemeProvider } from "../context/themeContext";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Home page",
            headerTintColor: "blue",
            headerTitleStyle: {
              fontSize: 22,
              fontWeight: "bold",
            },
            headerShown: false,
          }}
        />
        <Stack.Screen name="contact" />
        <Stack.Screen
          name="(tabs)"
          options={{
            contentStyle: {
              paddingBottom: 15,
              backgroundColor: "white",
            },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
