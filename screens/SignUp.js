import React, { useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { AuthContext } from "../context/context";
const SignUpScreen = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  const { signUp } = useContext(AuthContext);
  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({ ...data, email: val, check_textInputChange: true });
    } else {
      setData({ ...data, email: val, check_textInputChange: false });
    }
  };
  const handlePasswordChange = (val) => {
    setData({ ...data, password: val });
  };
  const handleConfirmPasswordChange = (val) => {
    setData({ ...data, confirm_password: val });
  };

  const updateSecureText = () => {
    setData({ ...data, secureTextEntry: !data.secureTextEntry });
  };
  const updateConfirmSecureText = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register to access.!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={24} color="black" />
          <TextInput
            //value={data}
            placeholder="Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" size={24} color="green" />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, { marginTop: 30 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" size={24} color="black" />
          <TextInput
            placeholder="Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureText}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" size={24} color="green" />
            ) : (
              <Feather name="eye" size={24} color="green" />
            )}
          </TouchableOpacity>
        </View>
        <Text style={[styles.text_footer, { marginTop: 30 }]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" size={24} color="black" />
          <TextInput
            placeholder="Password"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity onPress={updateConfirmSecureText}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" size={24} color="green" />
            ) : (
              <Feather name="eye" size={24} color="green" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              signUp();
            }}
          >
            <LinearGradient
              style={styles.signIn}
              colors={["#008000", "#228B22"]}
            >
              <Text style={styles.textSign}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 15 }}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text
              style={[
                styles.textSign,
                { color: "black", fontWeight: "normal" },
              ]}
            >
              Already have an account ? Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 20,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
  },
  text_footer: {
    fontSize: 17,
    color: "black",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: "#f2f2f2",
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "black",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
export default SignUpScreen;
