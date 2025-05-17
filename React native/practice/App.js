import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar as RNStatusBar } from "react-native";
import Counter from "./components/Counter";
import PracticeComponents from "./components/PracticeComponents";
import Users from "./components/Users";
import Sections from "./components/sections";
import FlexLayout from "./components/FlexLayout";
import Layout from "./components/Layout";
import ComStates from "./components/ComStates";

const App = () => {
  let welcome = "Welcome again!";

  return (
    <View style={styles.container}>
      {/* <Counter /> */}
      {/* <PracticeComponents /> */}
      {/* <Users //> */}
      {/* <Sections /> */}
      {/* <FlexLayout /> */}
      {/* <Layout /> */}
      <ComStates />
      <StatusBar style="light" backgroundColor="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: RNStatusBar.currentHeight,
  },
});

export default App;
