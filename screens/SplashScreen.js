import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Animatable.Image
          animation="bounceIn"
          duration={2000}
          source={require("../assets/logo.jpg")}
          style={styles.logo}
          resizeMode="stretch"
  />*/}
        <LottieView
          style={{
            height: "100%",
            width: "100%",
          }}
          speed={1}
          source={require("../assets/plant.json")}
          autoPlay
          loop
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>Stay connected with Everyone.! </Text>
        <Text style={styles.text}>Sign In with your account </Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <LinearGradient
              // Button Linear Gradient
              colors={["#008000", "#228B22"]}
              style={styles.signIn}
            >
              <Text
                style={{
                  backgroundColor: "transparent",
                  fontSize: 15,
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Get Started
              </Text>
              <MaterialIcons name="navigate-next" size={24} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: 250,
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "black",
    marginTop: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    marginTop: 30,
  },
  signIn: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
});
export default SplashScreen;
