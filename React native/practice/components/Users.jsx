import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

const data = [
  {
    id: 1,
    name: "John Doe",
    address: "New york",
  },
  {
    id: 2,
    name: "Smith",
    address: "London",
  },
  {
    id: 3,
    name: "Ralph",
    address: "South America",
  },
  {
    id: 4,
    name: "John Doe",
    address: "New york",
  },
  {
    id: 5,
    name: "Smith",
    address: "London",
  },
  {
    id: 6,
    name: "Ralph",
    address: "South America",
  },
  {
    id: 7,
    name: "John Doe",
    address: "New york",
  },
  {
    id: 8,
    name: "Smith",
    address: "London",
  },
  {
    id: 9,
    name: "Ralph",
    address: "South America",
  },
];

const Users = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Users</Text>
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
    </View>
  );
};

const User = ({ user }) => (
  <View
    style={{
      borderWidth: 1,
      backgroundColor: "#d6d6",
      padding: 20,
      marginBottom: 20,
    }}
  >
    <Text style={{ fontSize: 18, fontWeight: "semibold", marginBottom: 8 }}>
      {user?.name}
    </Text>
    <Text>{user?.address}</Text>
  </View>
);

export default Users;

const styles = StyleSheet.create({});
