import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlexLayout = () => {
  return (
    <>
      <View style={styles.container1}>
        <View
          style={[
            styles.innerContainer,
            { flexBasis: 300, alignSelf: "center" },
          ]}
        />
        <View style={[styles.innerContainer, { flexShrink: 1 }]} />
        <View style={styles.innerContainer} />
        {/* <View style={styles.innerContainer} /> */}
        {/* <View style={styles.innerContainer} />
        <View style={styles.innerContainer} />
        <View style={styles.innerContainer} />
        <View style={styles.innerContainer} /> */}
      </View>
      <View style={styles.contianer}></View>
      <View style={styles.contianer2}></View>
    </>
  );
};

export default FlexLayout;

const styles = StyleSheet.create({
  container1: {
    width: "100%",
    flex: 3,
    borderWidth: 2,
    borderColor: "red",
    gap: 10,
    flexDirection: "row",
    //     flexWrap: "wrap",
    //     justifyContent: "center",
    //     alignItems: "center",
  },
  contianer: {
    width: "100%",
    flex: 1,
    borderWidth: 2,
    borderColor: "red",
  },
  contianer2: {
    width: "100%",
    flex: 2,
    borderWidth: 2,
    borderColor: "red",
  },
  innerContainer: {
    width: 100,
    height: 100,
    backgroundColor: "dodgerblue",
  },
});

// Screen size calculation = 3 + 1 + 2 = 5
