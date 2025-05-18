import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { getData, storeData } from "../../storage";

const ProfilePage = () => {
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const handleChange = (field, value) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleSubmit = async () => {
    if (!userData.name || !userData.email) {
      setError("Name and Email both are required!");
      return;
    }

    await storeData("user", userData);
    const data = await getData();
    console.log({ data });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile settings</Text>
      <View style={{ marginTop: 20, gap: 20 }}>
        {error !== null && (
          <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
        )}
        <View>
          <Text style={styles.label}>Full name</Text>
          <TextInput
            placeholder="Name"
            style={styles.input}
            keyboardType="default"
            value={userData.name}
            onChangeText={(text) => handleChange("name", text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
            value={userData.email}
            onChangeText={(email) => handleChange("email", email)}
          />
        </View>
        <View>
          <Text style={styles.label}>Contact</Text>
          <TextInput
            placeholder="Conact number"
            style={styles.input}
            keyboardType="decimal-pad"
            value={userData.contact}
            onChangeText={(value) => handleChange("contact", value)}
          />
        </View>
        <View>
          <Text style={styles.label}>Address</Text>
          <TextInput
            placeholder="Address"
            style={styles.input}
            value={userData.address}
            onChangeText={(value) => handleChange("address", value)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 12,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    height: 44,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  button: {
    height: 50,
    borderRadius: 8,
    backgroundColor: "dodgerblue",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
});
