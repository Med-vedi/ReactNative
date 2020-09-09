import { useDeviceOrientation } from "@react-native-community/hooks";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar as StatusBarReact,
  TextInput,
  Switch,
} from "react-native";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
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
