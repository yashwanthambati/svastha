import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Splash from "./SplashScreen";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={Splash} />
    <RootStack.Screen name="SignIn" component={SignIn} />
    <RootStack.Screen name="SignUp" component={SignUp} />
  </RootStack.Navigator>
);

export default RootStackScreen;
