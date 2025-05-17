import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Welcome</Text>
      <Link href={"/home"}>
        <Text>Get start</Text>
      </Link>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
