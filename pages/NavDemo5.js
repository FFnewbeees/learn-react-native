import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { DrawerActions } from "react-navigation-drawer";

export default class NavDemo5 extends React.Component {
  static navigationOptions = {
    title: "Page 5"
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{backgroundColor:"yellow", flex:1, paddingTop:20}}>
        <Text style={styles.text}>Welcome to page 5</Text>
        <Button
          title={"Open Drawer"}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        <Button
          title={"Toggle Drawer"}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
        <Button
          title={"Go to Page 4"}
          onPress={() => {
            navigation.navigate("NavDemo4");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    textAlign:"center",
    margin:10
  }
});
