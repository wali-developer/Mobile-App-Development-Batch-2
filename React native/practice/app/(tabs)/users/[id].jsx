import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const UserDetailsPage = () => {
  const user = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={{ padding: 15 }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back-circle-outline" size={30} color="black" />
      </TouchableOpacity>
      <View
        style={{
          borderWidth: 1,
          backgroundColor: "#d6d6",
          padding: 20,
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "semibold", marginBottom: 8 }}>
          {user?.name}
        </Text>
        <Text>{user?.address}</Text>
      </View>
    </View>
  );
};

export default UserDetailsPage;
