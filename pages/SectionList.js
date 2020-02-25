import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  SectionList,
  StyleSheet,
  RefreshControl,
  ActivityIndicator
} from "react-native";

const NAMES = [
  {
    data: ["ANDY", "KIKI"],
    title: "Andy Fam"
  },
  {
    data: ["VICTOR", "LILY"],
    title: "Victor Fam"
  },
  {
    data: ["BOBBY", "TONY", "JACK", "SHAWTY"],
    title: "WHO THE FAM"
  }
];

export default class SectionListScreen extends Component {
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

  _renderSectionHeader({ section }) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.text}>{section.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.dataArray}
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
          renderSectionHeader={data => this._renderSectionHeader(data)}
          ItemSeparatorComponent={()=> <View style={styles.separator}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container:{
    backgroundColor:"white",
    flex:1
  }, 
  item: {
  
    height: 80,
    marginBottom: 15,
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
  },
  sectionHeader: {
    height: 50,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center"
  },
  separator:{
      height:1,
      backgroundColor:'grey',
      flex:1
  }
});
