import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Text,
  Caption,
  Paragraph,
  Drawer,
  Switch,
  TouchableRipple,
} from "react-native-paper";
import {
  Ionicons,
  Feather,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { AuthContext } from "../context/context";

export function CustomScreen(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { signOut } = useContext(AuthContext);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfo}>
            <View>
              <Avatar.Image
                source={{
                  uri:
                    "https://thumbs-prod.si-cdn.com/dy0zULoVdRBqBwAO2-IRr-6bRiw=/420x240/https://public-media.si-cdn.com/filer/Charles-Darwin-1880-631.jpg",
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>A Yashwanth</Title>
                <Caption style={styles.caption}>@2yashwa</Caption>
              </View>
              <View style={styles.row}>
                <View style={styles.section}>
                  <Paragraph style={(styles.paragraph, styles.caption)}>
                    34
                  </Paragraph>
                  <Caption style={styles.caption}>Following</Caption>
                </View>
                <View>
                  <Paragraph style={(styles.paragraph, styles.caption)}>
                    40
                  </Paragraph>
                  <Caption style={styles.caption}>Followers</Caption>
                </View>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={() => (
                <FontAwesome name="sign-out" size={24} color="black" />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={() => (
                <FontAwesome name="sign-out" size={24} color="black" />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
            />
            <DrawerItem
              icon={() => (
                <FontAwesome name="sign-out" size={24} color="black" />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate("BookMark");
              }}
            />
            <DrawerItem
              icon={() => (
                <FontAwesome name="sign-out" size={24} color="black" />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            />
            <DrawerItem
              icon={() => (
                <FontAwesome name="sign-out" size={24} color="black" />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate("Support");
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => toggleTheme()}>
              <View style={styles.preference}>
                <Text>Dark Mode</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkMode} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={() => <FontAwesome name="sign-out" size={24} color="black" />}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
});
//module.exports = { CustomScreen };
//export { CustomScreen };
//export default CustomScreen;
