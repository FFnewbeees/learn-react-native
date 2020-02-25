import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { SafeAreaView } from "react-navigation";

import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation-tabs";
import {
  createDrawerNavigator,
  DrawerNavigatorItems
} from "react-navigation-drawer";
import SwitchNavigator from "../navigators/SwitchNavigators";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import NavDemo1 from "../pages/NavDemo1";
import NavDemo2 from "../pages/NavDemo2";
import NavDemo3 from "../pages/NavDemo3";
import NavDemo4 from "../pages/NavDemo4";
import NavDemo5 from "../pages/NavDemo5";
import Home from "../pages/Home";
import FlatList from "../pages/FlatListDemo";
import SectionList from "../pages/SectionList";
import { Button, Text, ScrollView } from "react-native";

const DrawerNav = createDrawerNavigator(
  {
    NavDemo4: {
      screen: NavDemo4,
      navigationOptions: {
        drawerLabel: "Page 4",
        drawerIcon: ({ tintColor, focused }) => (
          <MaterialIcons
            name={"drafts"}
            size={24}
            style={{ color: tintColor }}
          />
        ),
      }
    },
    NavDemo5: {
      screen: NavDemo5,
      navigationOptions: {
        drawerLabel: "Page 5",
        drawerIcon: ({ tintColor, focused }) => (
          <MaterialIcons
            name={"move-to-inbox"}
            size={24}
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    //customising drawer
    contentComponent: (props) => (
      <ScrollView style={{ backgroundColor: "grey", flex: 1 }}>
        <SafeAreaView forceInset={{top:"always",}}>
          <DrawerNavigatorItems
            {...props}
          />
        </SafeAreaView>
      </ScrollView>
    ),
    contentOptions:{
      activeTintColor:"white"
    }
  }
);

const MaterialTopNavigator = createMaterialTopTabNavigator(
  {
    NavDemo1: {
      screen: NavDemo1,
      navigationOptions: {
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? "orange" : "white" }}>Page 1</Text>
        )
      }
    },
    NavDemo2: {
      screen: NavDemo2,
      navigationOptions: {
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? "orange" : "white" }}>Page 2</Text>
        )
      }
    },
    NavDemo3: {
      screen: NavDemo3,
      navigationOptions: {
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? "orange" : "white" }}>Page 3</Text>
        )
      }
    }
  },
  {
    tabBarOptions: {
      //activeTintColor: "red"
      tabStyle: {
        minHeight: 50
      },
      upperCaseLabel: false,
      style: {
        backgroundColor: "grey"
      },
      indicatorStyle: {
        height: 2,
        backgroundColor: "black"
      },
      labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6
      }
    }
  }
);

const BottomNavigator = createBottomTabNavigator(
  {
    NavDemo1: {
      screen: NavDemo1,
      navigationOptions: {
        tabBarLabel: "Page 1",
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={"ios-home"} size={26} style={{ color: tintColor }} />
        )
      }
    },
    NavDemo2: {
      screen: NavDemo2,
      navigationOptions: {
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? "orange" : "grey" }}>Page 2</Text>
        ),
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={"ios-people"}
            size={26}
            style={{ color: focused ? "orange" : "grey" }}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "red"
    }
  }
);

export const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home",
        headerRight: null
      }
    },
    MaterialTopNavigator: {
      screen: MaterialTopNavigator,
      navigationOptions: {
        title: "Top Tab Bar"
      }
    },
    BottomNavigator: {
      screen: BottomNavigator,
      navigationOptions: {
        title: "Bottom Tab Bar",
        header: null
      }
    },
    DrawerNav: {
      screen: DrawerNav
    },
    SwitchNavigator: {
      screen: SwitchNavigator
    },
    NavDemo1: {
      screen: NavDemo1,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params &&
          navigation.state.params.name} Page Name`
      })
    },
    NavDemo2: {
      screen: NavDemo2,
      navigationOptions: {
        title: "Page 2 test"
      }
    },
    NavDemo3: {
      screen: NavDemo3,
      navigationOptions: props => {
        const { navigation } = props;
        const { state, setParams } = navigation;
        const { params = {} } = state;
        return {
          title: params.name ? params.name : "This is page 3",
          headerRight: (
            <Button
              title={params.mode === "edit" ? "Save" : "Edit"}
              onPress={() => {
                setParams({ mode: params.mode === "edit" ? " " : "edit" });
              }}
            />
          )
        };
      }
    },
    FlatList: {
      screen: FlatList
    },
    SectionList: {
      screen: SectionList
    }
  },
  {
    defaultNavigationOptions: {}
  }
);
