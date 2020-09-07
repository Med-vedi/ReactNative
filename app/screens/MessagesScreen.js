import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  // const handleDelete = (message) => {
  //     const newMessages = messages.filter(m=>m.id !== message.id)

  // }
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("msg selected")}
            // renderRightActions={ListItemDeleteAction}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => console.log("delete")} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
