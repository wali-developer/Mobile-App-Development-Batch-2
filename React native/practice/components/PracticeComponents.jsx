import {
  ActivityIndicator,
  Button,
  Image,
  Platform,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AppModal from "./Modal";
import * as ImagePicker from "expo-image-picker";

const PracticeComponents = () => {
  const [name, setName] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [pickedImage, setPickedImage] = useState(null);
  const [focused, setFocused] = useState(false);
  let loading = false;

  const handleRefresh = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("Results: ", result);

    if (!result.canceled) {
      setPickedImage(result.assets[0].uri);
    }
  };

  console.log(Platform);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
      }
      style={styles.container}
    >
      {loading && <ActivityIndicator size={"large"} color={"blue"} />}
      <Text style={styles.heading}>React native practice</Text>
      <TouchableHighlight onPress={() => alert("Image clicked!")}>
        <Image
          src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
          alt="Computers & disks"
          width={"100%"}
          height={150}
          style={styles.headerImage}
        />
      </TouchableHighlight>
      <TextInput
        placeholder="Enter your name"
        style={{ ...styles.input, borderColor: focused ? "blue" : "gray" }}
        keyboardType="default"
        value={name}
        onChangeText={(text) => setName(text)}
        onFocus={() => setFocused(true)}
      />

      <View style={{ marginTop: 10 }}>
        <View style={styles.buttonsRow}>
          <AppModal />
          <TouchableOpacity onPress={handlePickImage} style={styles.button}>
            <Text style={{ margin: "auto", color: "white" }}>Pick image</Text>
          </TouchableOpacity>
        </View>

        {pickedImage && (
          <Image
            src={pickedImage}
            alt=""
            width={"100%"}
            height={200}
            style={styles.imagePreview}
          />
        )}

        <View style={styles.box}>
          <View style={styles.innerBox}></View>
        </View>

        <View style={styles.relativeContainer}>
          <View style={styles.innerContainer}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    gap: 15,
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    // textDecorationLine: "underline",
    textShadowRadius: 8,
    textShadowColor: "blue",
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    fontStyle: "italic",
  },
  headerImage: { width: "100%", height: 150, borderRadius: 10 },
  input: {
    borderWidth: 1.5,
    height: 48,
    marginVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  button: {
    height: 44,
    backgroundColor: "green",
    borderRadius: 10,
    flex: 1,
  },
  buttonsRow: {
    flexDirection: "row",
    gap: 10,
  },
  imagePreview: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    borderRadius: 10,
    marginTop: 20,
  },
  box: {
    width: "100%",
    height: 300,
    backgroundColor: Platform.OS !== "android" ? "lightblue" : "dodgerblue",
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
    // justifyContent: "center",
    // alignItems: "center",
  },
  innerBox: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 10,
    transform: [{ scale: 1.2 }, { rotate: "45deg" }, { translateX: 50 }],
  },
  relativeContainer: {
    width: "100%",
    height: 300,
    backgroundColor: "dodgerblue",
    marginTop: 50,
    padding: 10,
    position: "relative",
  },
  innerContainer: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 10,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
  },
});

export default PracticeComponents;
