import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../../base/colors";
import { Feather } from "@expo/vector-icons";
import { fonts } from "../../base/constants";

const Search = ({ search, setSearch }) => {
  return (
    <View style={styles.searchContainer}>
      <Feather name="search" size={18} color="#7B7B7B" />
      <TextInput
        placeholder="Search..."
        placeholderTextColor={"#7B7B7B"}
        style={styles.input}
        value={search}
        onChangeText={(value) => setSearch(value)}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    height: 44,
    backgroundColor: colors.placeholderBackground,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    gap: 5,
  },
  input: {
    flexGrow: 1,
    fontSize: 12,
    fontFamily: fonts.PoppinsRegular,
    marginTop: 3,
    color: colors.text,
  },
});
