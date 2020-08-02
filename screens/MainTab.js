import HomeScreen from "./Homescreen";
import Profile from "./Profile";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DetailScreen from "./Details";
import {
  Ionicons,
  Feather,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./Settings";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
//import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();
//const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: "#e91e63",
      //activeColor: "#fff",
      activeColor: "#e91e63",
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#007567",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-home" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Details"
      component={DetailStackScreen}
      options={{
        tabBarLabel: "Updates",
        tabBarColor: "#554500",
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="bell" color={color} size={25} />
        ),
        //tabBarBadge: 3,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#007567",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="account-circle" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{
        tabBarLabel: "Settings",
        tabBarColor: "#111267",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="settings" color={color} size={25} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;
const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#887" },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Home",
      }}
    />
  </HomeStack.Navigator>
);
const DetailStackScreen = ({ navigation }) => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#887" },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailStack.Screen
      name="Details"
      component={DetailScreen}
      options={{
        title: "Details",
        headerLeft: () => (
          <Ionicons
            name="ios-menu"
            size={30}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }}
    />
  </DetailStack.Navigator>
);
