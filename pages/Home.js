import React, { Component } from "react";
import { Button, View } from "react-native";

export default class Homescreen extends Component {
  static navigationOptions = {
    title: "Home",
    headerBackTitle:"Back"
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Button
          title={"SectionList Demo"}
          onPress={() => {
            navigate("SectionList");
          }}
        />

        <Button
          title={"FlatList Demo"}
          onPress={() => {
            navigate("FlatList");
          }}
        />

        <Button
          title={"Top Nav Bar"}
          onPress={() => {
            navigate("MaterialTopNavigator", {name:"Dynamic"});
          }}
        />

        <Button
          title={"Bottom Nav Bar"}
          onPress={() => {
            navigate("BottomNavigator");
          }}
        />
        
      </View>
    );
  }
}
