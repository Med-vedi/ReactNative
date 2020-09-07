import { useDeviceOrientation } from "@react-native-community/hooks";
import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar as StatusBarReact,
} from "react-native";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();
  const handlePress = () => console.log("On btn press");
  return <WelcomeScreen />;

  // (
  //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //     <AppButton title="Login" onPress={() => console.log("tapped")} />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBarReact.currentHeight : 0,
  },
});
