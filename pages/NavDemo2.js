import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class NavDemo2 extends React.Component {

  // static navigationOptions = {
  //   title: "Page 2"
  // };
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Welcome to page 2</Text>
        <Button
          title={"Go Back"}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Button
            title={"Go to page 1"}
            onPress={()=>{
                navigation.navigate('NavDemo1')
            }}
        />
      </View>
    );
  }
}
