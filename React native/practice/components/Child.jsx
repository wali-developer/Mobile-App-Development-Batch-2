import { useState } from "react";
import { Button, Text, View } from "react-native";

// Whenever the state changes, react re-render / render again this component

const Child = (props) => {
  const { subTitle } = props;
  const [state, setState] = useState(50);

  return (
    <View>
      <Text>{subTitle}</Text>
      <Text>{state}</Text>
      <Button title="Change" onPress={() => setState(300)} />
    </View>
  );
};

export default Child;
