import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { fonts } from "../../base/constants";
import { colors } from "../../base/colors";
import { Feather } from "@expo/vector-icons";

const PasswordField = ({ label, placeholder, ...rest }) => {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={{ position: "relative" }}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor={"#969696"}
          secureTextEntry={!show}
          {...rest}
        />
        <TouchableOpacity style={styles.eye} onPress={() => setShow(!show)}>
          {show ? (
            <Feather name="eye" size={20} color={colors.primary} />
          ) : (
            <Feather name="eye-off" size={20} color="black" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordField;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: fonts.PoppinsMedium,
    color: colors.black,
  },
  input: {
    height: 44,
    backgroundColor: colors.placeholderBackground,
    paddingHorizontal: 17,
    borderRadius: 5,
    marginTop: 8,
    fontSize: 14,
    fontFamily: fonts.PoppinsMedium,
    color: colors.black,
  },
  eye: {
    position: "absolute",
    right: 15,
    top: 18,
  },
});
