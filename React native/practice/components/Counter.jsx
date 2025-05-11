import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount(count > 0 ? count - 1 : count);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}>
        Counter
      </Text>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          gap: 15,
          alignItems: "center",
        }}
      >
        <Decrement decrement={decrementCount} />
        <Text style={{ fontSize: 18 }}>{count}</Text>
        <Increment incrment={incrementCount} />
      </View>
    </View>
  );
};

const Increment = ({ incrment }) => <Button title="+" onPress={incrment} />;
const Decrement = ({ decrement }) => <Button title="-" onPress={decrement} />;

export default Counter;

const styles = StyleSheet.create({});
