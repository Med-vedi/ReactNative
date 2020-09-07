import { useDeviceOrientation } from "@react-native-community/hooks";
import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar as StatusBarReact,
} from "react-native";

import Card from "./app/components/Card";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();
  const handlePress = () => console.log("On btn press");
  return (
    // <ListingDetailScreen />
    // <ViewImageScreen />
    <MessagesScreen />

    // <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBarReact.currentHeight : 0,
  },
});
