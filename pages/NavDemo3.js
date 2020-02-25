import React from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default class NavDemo3 extends React.Component {
  static navigationOptions = {
    title: "Page 3"
  };
  render() {
    const { navigation } = this.props;
    const { state, setParams } = navigation;
    const { params } = state;
    const showText = params && params.mode === "edit" ? "Editing" : "Edited";

    return (
      <View>
        <Text style={styles.text}>Welcome to page 3</Text>
        <Text style={styles.showText}>{showText}</Text>
        <Button
          title={"Go Back"}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Button
          title={"Go to page 1"}
          onPress={() => {
            navigation.navigate("NavDemo1");
          }}
        />

        <TextInput
          style={styles.input}
          onChangeText={text =>{
            setParams({name:text});
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    fontSize:20,
    color:"white"
  },
  input:{
    height:50,
    borderWidth:1,
    marginTop:10,
    borderColor:"black"
  },
  showText:{
    marginTop:20,
    fontSize:20,
    color:'red'
  }
});