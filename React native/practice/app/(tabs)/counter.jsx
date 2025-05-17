import React, { useContext } from "react";
import Counter from "../../components/Counter";
import { View } from "react-native";
import { ThemeContext } from "../../context/themeContext";

const CounterPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Counter />
    </View>
  );
};

export default CounterPage;
