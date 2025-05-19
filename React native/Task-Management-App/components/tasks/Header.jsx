import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { fonts } from "../../base/constants";
import { getUser } from "../../base/utils/getUser";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then((response) => setUser(JSON.parse(response)));
  }, []);

  return (
    <View style={styles.headerRow}>
      <View style={styles.profileRow}>
        <Image
          src="https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg"
          width={46}
          height={46}
          style={styles.profile}
        />
        <View>
          <Text style={styles.hello}>Hello</Text>
          <Text style={styles.nameText}>{user?.fullName}</Text>
        </View>
      </View>
      <FontAwesome name="bars" size={20} color="#252525" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  profile: {
    borderRadius: 23,
  },
  hello: {
    fontSize: 12,
    fontFamily: fonts.PoppinsRegular,
  },
  nameText: {
    fontSize: 16,
    fontFamily: fonts.PoppinsSemibold,
    lineHeight: 16,
  },
});
