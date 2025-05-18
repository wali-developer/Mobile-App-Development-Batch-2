import React, { useMemo, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);

  const result = useMemo(() => 10 + 30 * 2, [count]);

  console.log(result);

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
      <ChildComponent count={count} />
    </View>
  );
};

const Increment = ({ incrment }) => <Button title="+" onPress={incrment} />;
const Decrement = ({ decrement }) => <Button title="-" onPress={decrement} />;

const ChildComponent = React.memo(({ count }) => {
  return (
    <View style={{ marginTop: 100 }}>
      <Text>Child component...</Text>
      <Text>{count}</Text>
    </View>
  );
});

export default Counter;

const styles = StyleSheet.create({});
