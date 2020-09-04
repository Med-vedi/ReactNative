import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
  StatusBar as StatusBarReact,
} from "react-native";

export default function App() {
  // console.log(require("./assets/icon.png"));
  const handlePress = () => console.log("On btn press");
  return (
    <SafeAreaView style={styles.container}>
      <Button
        style={styles.btn}
        // color="orange"
        // borderColor="black"
        title="Click me"
        onPress={() =>
          // Alert.alert("Hey", "Button tapped", [{ text: "Yes" }, { text: "No" }])
          Alert.prompt("Hey", "Give me your data", (text) => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBarReact.currentHeight : 0,

    // paddingTop: Platform.OS === "android" ? 20 : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
  btn: {
    backgroundColor: "#000",
    color: "#000",
  },
});
