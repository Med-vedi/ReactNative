import React from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";

import ListItem from "../components/ListItem";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessagesScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
