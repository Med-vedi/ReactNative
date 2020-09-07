import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    textAlign: "center",
    color: "white",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: "center",
    top: 50,
    position: "absolute",
    color: "white",
  },
});
export default styles;
