import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        icon="email"
        placeholder="email"
        textContentType="emailAddress" //iOS only
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={(text) => setPassword(text)}
        icon="lock"
        placeholder="Password"
        secureTextEntry
        textContentType="password" //iOS only
      />
      <AppButton
        title="Login"
        onPress={() => {
          console.log(email, password);
          setEmail("");
          setPassword("");
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
