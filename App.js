import { useDeviceOrientation } from "@react-native-community/hooks";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar as StatusBarReact,
  TextInput,
} from "react-native";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const handlePress = () => console.log("On btn press");
  const [firstName, setFirstName] = useState("");
  console.log(firstName);
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
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
