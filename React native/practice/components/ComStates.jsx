import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

// There are three states of the component
// 1. Component mount
// 2. Component Update
// 3. Component Unmount

const ComStates = () => {
  const [countDown, setCountDown] = useState(10);

  useEffect(() => {
    if (!countDown) return;

    const intervalId = setInterval(() => {
      setCountDown((prev) => (prev > 0 ? prev - 1 : prev));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 50 }}>{countDown}</Text>
    </View>
  );
};

export default ComStates;
