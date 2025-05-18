import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import axios from "axios";

const Users = () => {
  const { width, height } = useWindowDimensions();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
      } catch (error) {
        console.log("Error fetching users data: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    getUsers();
  }, []);

  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Users</Text>
      {!isLoading ? (
        <FlatList
          data={data}
          renderItem={({ item }) => <User user={item} />}
          keyExtractor={(user) => user.id}
          contentContainerStyle={{
            marginTop: 20,
            flex: 1,
            width,
          }}
        />
      ) : (
        <ActivityIndicator size={"large"} color={"blue"} />
      )}
    </View>
  );
};

const User = ({ user }) => (
  <Link href={`/users/${user.id}`} style={{ width: "100%" }}>
    <View
      style={{
        borderWidth: 1,
        backgroundColor: "#d6d6",
        padding: 20,
        marginBottom: 20,
        width: "100%",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "semibold", marginBottom: 8 }}>
        {user?.name}
      </Text>
      <Text>{`${user?.address?.city}, ${user?.address?.street}, ${user?.address?.zipcode}`}</Text>
    </View>
  </Link>
);

export default Users;

const styles = StyleSheet.create({});
