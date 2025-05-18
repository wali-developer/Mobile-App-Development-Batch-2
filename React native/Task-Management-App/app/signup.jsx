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
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const SignUpPage = () => {
  const router = useRouter();
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
        <TextField label={"E-mail"} placeholder={"Enter your email"} />
        <PasswordField label={"Password"} placeholder={"Enter your password"} />
        <PasswordField
          label={"Re-type Password"}
          placeholder={"Enter your password again"}
        />
        <View style={styles.textsWrapper}>
          <Checkbox label="I Agree terms and Conditions" />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up Now</Text>
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
});
