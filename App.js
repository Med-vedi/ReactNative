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
} from "react-native";

export default function App() {
  // console.log(require("./assets/icon.png"));
  const handlePress = () => console.log("On text press");
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iusto
        eaque beatae illo autem facilis, debitis repudiandae quaerat tempore
        fugit dignissimos facere quo sequi expedita! Ab quas eveniet accusantium
      </Text>
      <TouchableOpacity onPress={() => console.log("img tapped")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/237/200/300",
          }}
        />
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
