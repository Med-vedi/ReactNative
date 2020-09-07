// import { StatusBar } from "expo-status-bar";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar as StatusBarReact,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();
  const handlePress = () => console.log("On btn press");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          // fontFamily: "Courier",
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "600",
          color: "tomato",
          textTransform: "capitalize",
          textAlign: "center",
          lineHeight: 40,
        }}
      >
        I love React Native! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Animi vitae molestias minus assumenda ab nobis saepe cum
        excepturi.
      </Text>
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
