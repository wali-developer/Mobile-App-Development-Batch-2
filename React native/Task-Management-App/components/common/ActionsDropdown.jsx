import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { colors } from "../../base/colors";
import { fonts } from "../../base/constants";
import { Link } from "expo-router";

const ActionsDropdown = ({ onDelete, task }) => {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Pressable
        style={styles.dotsButton}
        onPress={() => setShow((prev) => !prev)}
      >
        <Entypo name="dots-three-horizontal" size={15} color="black" />
      </Pressable>
      {show && (
        <View style={styles.dropdown}>
          <TouchableOpacity style={styles.actionRow} onPress={onDelete}>
            <MaterialCommunityIcons
              name="delete-outline"
              size={18}
              color="red"
            />
            <Text style={styles.actionText}>Delete</Text>
          </TouchableOpacity>
          <Link
            style={styles.actionRow}
            href={{ pathname: "/addTask", params: task }}
          >
            <MaterialIcons name="edit-note" size={18} color="green" />
            <Text style={[styles.actionText, { color: "green" }]}>Edit</Text>
          </Link>
        </View>
      )}
    </View>
  );
};

export default ActionsDropdown;

const styles = StyleSheet.create({
  dotsButton: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: 5,
    borderRadius: 20,
  },
  dropdown: {
    paddingHorizontal: 12,
    paddingVertical: 15,
    width: 90,
    position: "absolute",
    top: 35,
    right: 0,
    backgroundColor: colors.white,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 7,
    zIndex: 1,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    paddingVertical: 5,
  },
  actionText: {
    fontSize: 12,
    color: "red",
    fontFamily: fonts.PoppinsMedium,
    marginTop: 2,
  },
});
