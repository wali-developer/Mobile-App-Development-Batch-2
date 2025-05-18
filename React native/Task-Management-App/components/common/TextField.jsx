import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { fonts } from "../../base/constants";
import { colors } from "../../base/colors";

const TextField = ({ label, placeholder, ...rest }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={"#969696"}
        {...rest}
      />
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: fonts.PoppinsMedium,
    color: colors.black,
  },
  input: {
    height: 44,
    backgroundColor: colors.placeholderBackground,
    padding: 17,
    borderRadius: 5,
    marginTop: 8,
    fontSize: 14,
    fontFamily: fonts.PoppinsMedium,
    color: colors.black,
  },
});
