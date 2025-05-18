import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const UserDetailsPage = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [user, setUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(data);
      } catch (error) {
        console.log("Error getting user data: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    getUserDetails();
  }, []);

  return (
    <View style={{ padding: 15 }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back-circle-outline" size={30} color="black" />
      </TouchableOpacity>
      {!isLoading ? (
        <>
          <Text style={{ fontSize: 30, marginTop: 20, fontWeight: "bold" }}>
            {user?.name}
          </Text>
          <View
            style={{
              borderWidth: 1,
              backgroundColor: "#d6d6",
              padding: 20,
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "semibold", marginBottom: 8 }}
            >
              Name: {user?.name}
            </Text>
            <View style={{ gap: 8 }}>
              <Text>Email: {`${user?.email}`}</Text>
              <Text>Phone: {`${user?.phone}`}</Text>
              <Text>Website URL: {`${user?.website}`}</Text>
              <Text>
                Address:{" "}
                {`${user?.address?.city}, ${user?.address?.street}, ${user?.address?.zipcode}`}
              </Text>
            </View>
          </View>
        </>
      ) : (
        <ActivityIndicator size={"large"} color={"blue"} />
      )}
    </View>
  );
};

export default UserDetailsPage;
