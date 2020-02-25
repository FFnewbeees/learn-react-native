import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../pages/Home";
import NavDemo1 from "../pages/NavDemo1";
import Login from "../pages/Login";

const AppStack = createStackNavigator({
  Home: {
    screen: Home
  },
  NavDemo1: {
    screen: NavDemo1
  }
});

const AuthStack = createStackNavigator({
  Login: {
    screen: Login
  }
});

export default createSwitchNavigator(
    {
        Auth: AuthStack,
        App: AppStack
    }
)