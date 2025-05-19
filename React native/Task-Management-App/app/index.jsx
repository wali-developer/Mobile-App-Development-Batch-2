import {
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
import { axiosInstanace } from "../base/utils/axios";
import { storeData } from "../storage";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!email || !password) {
      setError("Both Email and Password fields are requried to login!");
      return;
    }

    setError(null);
    try {
      setIsLoading(true);
      const { data } = await axiosInstanace.post("/api/auth/sign-in", {
        email,
        password,
      });

      if (data?.Success) {
        await storeData("user", data?.body);
        setEmail("");
        setPassword("");
      }

      router.push("/tasks");
    } catch (error) {
      console.log("Login Error: ", error);
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
      <Text style={styles.heading}>Sign In</Text>
      <View style={{ gap: 20 }}>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <TextField
          label={"E-mail"}
          placeholder={"Enter your email"}
          value={email}
          onChangeText={(value) => {
            setError(null);
            setEmail(value);
          }}
        />
        <PasswordField
          label={"Password"}
          placeholder={"Enter your password"}
          value={password}
          onChangeText={(value) => {
            setError(null);
            setPassword(value);
          }}
        />
        <View style={styles.textsWrapper}>
          <Checkbox label="Remember Password" />
          <Text style={styles.forgot}>Forgot password?</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>
            {isLoading ? "Signing in..." : "Sign In Now"}
          </Text>
        </TouchableOpacity>
        <Text style={styles.noAccountText}>
          I don’t Have an account?{" "}
          <Link href={"/signup"}>
            <Text style={{ color: colors.primary, fontWeight: "bold" }}>
              Signup
            </Text>
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    justifyContent: "space-between",
    paddingBottom: 60,
    // alignItems: "center",
  },
  heading: {
    fontSize: 16,
    fontFamily: fonts.PoppinsSemibold,
    textAlign: "center",
    paddingVertical: 20,
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
