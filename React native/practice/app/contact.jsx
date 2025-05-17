import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const ContactPage = () => {
  const router = useRouter();
  return (
    <View>
      <Text>ContactPage</Text>
      <Link href={"/dashboard/profile"}>
        <Text>Go to profile page</Text>
      </Link>
      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
};

export default ContactPage;

const styles = StyleSheet.create({});
