import "@expo/metro-runtime";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    PoppinsRegular: require("../assets/Poppins/Poppins-Regular.ttf"),
    PoppinsMedium: require("../assets/Poppins/Poppins-Medium.ttf"),
    PoppinsSemibold: require("../assets/Poppins/Poppins-SemiBold.ttf"),
    PoppinsBold: require("../assets/Poppins/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="green" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="signup" />
        {/* <Stack.Screen name="contact" />
        <Stack.Screen
          name="(tabs)"
          options={{
            contentStyle: {
              paddingBottom: 15,
              backgroundColor: "white",
            },
          }}
        /> */}
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
