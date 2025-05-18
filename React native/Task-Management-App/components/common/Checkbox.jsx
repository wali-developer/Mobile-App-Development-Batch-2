import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { fonts } from "../../base/constants";
import { colors } from "../../base/colors";

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={styles.checkboxWrapper}
      onPress={() => setChecked((prev) => !prev)}
    >
      {checked ? (
        <MaterialCommunityIcons
          name="checkbox-outline"
          size={21}
          color={colors.primary}
        />
      ) : (
        <MaterialCommunityIcons
          name="checkbox-blank-outline"
          size={21}
          color={colors.primary}
        />
      )}

      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.PoppinsRegular,
    color: colors.text,
  },
});
