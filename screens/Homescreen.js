import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

import LottieView from "lottie-react-native";

const HomeScreen = ({ navigation }) => {
  const [pause, setPause] = useState(false);
  const [play, setPlay] = useState(false);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Entypo
          name="menu"
          style={{ paddingLeft: 10 }}
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <LottieView
        style={{
          marginTop: 10,
          marginBottom: 10,
          height: 200,
          width: 100,
          paddingLeft: 30,
        }}
        speed={5}
        source={require("../assets/plant.json")}
        autoPlay={true}
        loop={true}
      />
      <Button
        title="start"
        onPress={() => {
          setPlay(false);
        }}
      />
      <Button title="stop" onPress={() => {}} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
export default HomeScreen;
