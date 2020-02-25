import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class NavDemo1 extends React.Component {
  static navigationOptions = {
    title: "Page 1"
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Welcome to page 1</Text>
        <Button
          title={"Go Back"}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Button
            title={"Go to page 2"}
            onPress={()=>{
                navigation.navigate('NavDemo2')
            }}
        />
      </View>
    );
  }
}
