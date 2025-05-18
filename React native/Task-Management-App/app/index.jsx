import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { fonts } from "../base/constants";
import TextField from "../components/common/TextField";
import PasswordField from "../components/common/PasswordField";
import { colors } from "../base/colors";
import Checkbox from "../components/common/Checkbox";
import { Link } from "expo-router";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>
      <View style={{ gap: 20 }}>
        <TextField label={"E-mail"} placeholder={"Enter your email"} />
        <PasswordField label={"Password"} placeholder={"Enter your password"} />
        <View style={styles.textsWrapper}>
          <Checkbox label="Remember Password" />
          <Text style={styles.forgot}>Forgot password?</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In Now</Text>
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
    backgroundColor: "white",
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
});
