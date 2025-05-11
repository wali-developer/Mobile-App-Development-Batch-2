import {
  Button,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function AppModal() {
  const [modalVisible, setModalVisibility] = useState(false);

  const openModal = () => {
    setModalVisibility(true);
  };

  return (
    <View>
      <TouchableOpacity onPress={openModal} style={styles.button}>
        <Text style={{ margin: "auto" }}>Open modal</Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            setModalVisibility(false);
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              borderWidth: 4,
            }}
          >
            <Text style={{ fontSize: 20 }}>
              This is modal example!!!!!!!!!!1
            </Text>
            <Button title="Close" onPress={() => setModalVisibility(false)} />
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 44,
    backgroundColor: "#dada",
    borderRadius: 10,
    width: 150,
  },
});
