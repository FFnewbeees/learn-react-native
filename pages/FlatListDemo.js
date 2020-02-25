import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  ActivityIndicator
} from "react-native";

const NAMES = [
  "ANDY",
  "VICTOR",
  "KIKI",
  "LILY",
  "BOBBY",
  "TONY",
  "JACK",
  "SHAWTY"
];

export default class FlatListDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataArray: NAMES
    };
  }

  loadData(refreshing) {
    if (refreshing) {
      this.setState({
        isLoading: true
      });
    }

    setTimeout(() => {
      let dataArray = [];
      if (refreshing) {
        for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
          dataArray.push(this.state.dataArray[i]);
        }
      } else {
        dataArray = this.state.dataArray.concat(NAMES);
      }

      this.setState({
        dataArray: dataArray,
        isLoading: false
      });
    }, 2000);
  }

  getIndicator() {
    return (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator
          style={styles.indicator}
          size={"large"}
          animating={"true"}
          color={"green"}
        />
        <Text>Loading More</Text>
      </View>
    );
  }

  _renderItem(data) {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{data.item}</Text>
      </View>
    );
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title={"Go Back"}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <FlatList
          data={this.state.dataArray}
          renderItem={data => this._renderItem(data)}
          refreshControl={
            <RefreshControl
              title={"Loading"}
              titleColor={"grey"}
              colors={["red"]}
              tintColor={"orange"}
              refreshing={this.state.isLoading}
              onRefresh={() => {
                this.loadData(true);
              }}
            />
          }
          ListFooterComponent={() => this.getIndicator()}
          onEndReached={() => {
            this.loadData(false);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    height: 200,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "black",
    fontSize: 20
  },
  indicatorContainer: {
    alignItems: "center"
  },
  indicator: {
    margin: 10
  }
});
