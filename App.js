import React, { useState } from "react";
import {
  StyleSheet,
  Platform,
  StatusBar as StatusBarReact,
} from "react-native";

import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screens/LoginScreen";
import AppButton from "./app/components/AppButton";

export default function App() {
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState();

  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBarReact.currentHeight : 0,
  },
});
