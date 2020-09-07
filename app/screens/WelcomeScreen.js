import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import AuthButton from "../components/AppButton";
import styles from "./style";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/back.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/pngwave.png")} />
        <Text>Sell with discount</Text>
      </View>
    </ImageBackground>
  );
}
