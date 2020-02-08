import React from "react";
import { Image } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { theme } from "../constants";
import Welcome from "../screens/Welcome";
// import Browse from "../screens/Browse";
// import Login from "../screens/Login";
// import Explore from "../screens/Explore";
// import Product from "../screens/Product";
// import Setting from "../screens/Setting";

const screens = createStackNavigator(
  {
    Welcome
    // Browse,
    // Login,
    // Explore,
    // Product,
    // Setting
  },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: <Image />,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRightContainerStyle: {}
    }
  }
);

export default createAppContainer(screens);
