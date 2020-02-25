import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class Login extends React.Component {
  static navigationOptions = {
    title: "Login"
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Welcome to page 1</Text>
        <Button
          title={"Login"}
          onPress={() => {
            navigation.navigate('App');
          }}
        />
        
      </View>
    );
  }
}
