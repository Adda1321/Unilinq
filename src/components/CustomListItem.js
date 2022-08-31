import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
  console.log("chatName >>>", chatName);
  console.log("ID >>>", id);
  const myId = id.id;

  const myChatName = id.chatName;

  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={myId} buttomDivider>
      <Avatar
        rounded
        source={{
          uri:
            "https://www.warrenctlibrary.org/wp-content/uploads/2018/05/account-icon-lg.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsisMode="tail">
          This is the test Subtitle
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};  

export default CustomListItem;

const styles = StyleSheet.create({});
