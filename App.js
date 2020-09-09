import { useDeviceOrientation } from "@react-native-community/hooks";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar as StatusBarReact,
  TextInput,
} from "react-native";

import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/Screen";

export default function App() {
  const handlePress = () => console.log("On btn press");
  const [firstName, setFirstName] = useState("");
  console.log(firstName);
  return (
    <Screen>
      <TextInput
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBarReact.currentHeight : 0,
  },
});
