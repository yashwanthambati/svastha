import React, { useState, useEffect, useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTab from "./screens/MainTab";
import { CustomScreen } from "./screens/CustumDrawer";
import SupportScreen from "./screens/Support";
import BookMarkScreen from "./screens/Bookmark";
import SettingScreen from "./screens/Settings";
import RootStackScreen from "./screens/RootStackScreen";
import { ActivityIndicator, View } from "react-native";
import { AuthContext } from "./context/context";
const Drawer = createDrawerNavigator();

export default function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(false);
  const initialState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  const loginReducer = (state, action) => {
    switch (action.type) {
      case "TOKEN":
        return { ...state, userToken: action.token, isLoading: false };
      case "LOGIN":
        return {
          ...state,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return { ...state, userName: null, userToken: null, isLoading: false };
      case "REGISTER":
        return {
          ...state,
          userToken: action.token,
          userName: action.id,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = useReducer(loginReducer, initialState);
  const authContext = React.useMemo(
    () => ({
      signIn: (userName, password) => {
        //setIsLoading(false);
        //setUserToken("jfjf");
        let userToken;
        userToken = null;
        if ((userName == "user") & (password == "pass")) {
          userToken = "adff";
        }
        dispatch({ type: "LOGIN", id: userName, token: userToken });
      },
      signOut: () => {
        dispatch({ type: "LOGOUT" });
        // setIsLoading(null);
        //setUserToken(false);
      },
      signUp: () => {
        //setIsLoading(false);
        //setUserToken("jfjf");
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(() => {
      //setIsLoading(false);
      let userToken;
      userToken: "gfhf";
      dispatch({ type: "TOKEN", token: userToken });
    }, 1000);
  }, []);
  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator
            drawerContent={(props) => <CustomScreen {...props} />}
          >
            <Drawer.Screen name="HomeDrawer" component={MainTab} />
            <Drawer.Screen name="Support" component={SupportScreen} />
            <Drawer.Screen name="BookMark" component={BookMarkScreen} />
            <Drawer.Screen name="Settings" component={SettingScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
