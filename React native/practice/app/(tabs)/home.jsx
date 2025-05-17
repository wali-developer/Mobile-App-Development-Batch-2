import React, { useContext } from "react";
import Sections from "../../components/sections";
import { View } from "react-native-web";
import { Button } from "react-native";
import { ThemeContext } from "../../context/themeContext";

const HomeTab = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <View>
      <Button title="Change theme" onPress={changeTheme} />
      <Sections />
    </View>
  );
};

export default HomeTab;
