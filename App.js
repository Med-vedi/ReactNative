import { useDeviceOrientation } from "@react-native-community/hooks";
import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar as StatusBarReact,
} from "react-native";

import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  const handlePress = () => console.log("On btn press");
  return <ListingsScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBarReact.currentHeight : 0,
  },
});
