import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { fonts } from "../base/constants";
import TextField from "../components/common/TextField";
import PasswordField from "../components/common/PasswordField";
import { colors } from "../base/colors";
import Checkbox from "../components/common/Checkbox";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { axiosInstanace } from "../base/utils/axios";

const SignUpPage = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field, value) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleSubmit = async () => {
    if (!userData.fullName || !userData.email || !userData.password) {
      setError("All fields must be provided to create account!");
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      setError("Password mismatched!");
      return;
    }

    setError(null);
    try {
      setIsLoading(true);
      const { data } = await axiosInstanace.post("/api/auth/sign-up", userData);

      if (data?.Success) {
        alert(
          "Your account has successfull created, now you can login to app."
        );
        setUserData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        router.push("/");
      }
    } catch (error) {
      console.log("Signup Error: ", error);
      if (error?.response?.data?.error) {
        setError(error?.response?.data?.error);
      } else if (error?.message) {
        setError("Request failed, please try again");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.heading}>Sign Up</Text>
      </View>
      <View style={{ gap: 20 }}>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <TextField
          label={"Full name"}
          placeholder={"Enter your full name"}
          value={userData.fullName}
          onChangeText={(value) => handleChange("fullName", value)}
        />
        <TextField
          label={"E-mail"}
          placeholder={"Enter your email"}
          value={userData.email}
          onChangeText={(value) => handleChange("email", value)}
        />
        <PasswordField
          label={"Password"}
          placeholder={"Enter your password"}
          value={userData.password}
          onChangeText={(value) => handleChange("password", value)}
        />
        <PasswordField
          label={"Re-type Password"}
          placeholder={"Enter your password again"}
          value={userData.confirmPassword}
          onChangeText={(value) => handleChange("confirmPassword", value)}
        />
        <View style={styles.textsWrapper}>
          <Checkbox label="I Agree terms and Conditions" />
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size={"small"} color={colors.white} />
          ) : (
            <Text style={styles.buttonText}>Sign Up Now</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.noAccountText}>
          Already Have an account?{" "}
          <Link href={"/"}>
            <Text style={{ color: colors.primary, fontWeight: "bold" }}>
              SignIn
            </Text>
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingBottom: 60,
    // alignItems: "center",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  backButton: {
    width: 39,
    height: 39,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 16,
    fontFamily: fonts.PoppinsSemibold,
    textAlign: "center",
    paddingVertical: 20,
    flexGrow: 1,
    paddingRight: 60,
  },
  textsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgot: {
    fontSize: 12,
    fontFamily: fonts.PoppinsRegular,
    color: colors.primary,
  },
  button: {
    height: 44,
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: fonts.PoppinsMedium,
    color: "white",
  },
  noAccountText: {
    fontSize: 13,
    fontFamily: fonts.PoppinsMedium,
    color: colors.black,
    textAlign: "center",
    marginTop: 40,
  },
  errorText: {
    fontSize: 14,
    color: "red",
    textAlign: "center",
  },
});
