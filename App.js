// import { StatusBar } from "expo-status-bar";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar as StatusBarReact,
} from "react-native";

export default function App() {
  const { landscape } = useDeviceOrientation();
  const handlePress = () => console.log("On btn press");
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ backgroundColor: "dodgerblue", flex: 1 }} />
      <View style={{ backgroundColor: "gold", flex: 1 }} />
      <View style={{ backgroundColor: "pink", flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBarReact.currentHeight : 0,
  },
});
