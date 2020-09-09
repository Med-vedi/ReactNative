import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function AppTextInput({ icon, placeholder }) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} />}
      <TextInput placeholder={placeholder} style={styles.textInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 15,
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
