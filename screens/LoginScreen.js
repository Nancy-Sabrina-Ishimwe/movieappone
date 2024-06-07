import React, { useState } from "react";
import {
  View,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Color } from "../colors/Color";
import { Button } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPhoneNumber("");
    setPassword("");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image source={require("../assets/muvi.png")} style={styles.logoImage} />
      <View>
        <Text>Please login to enjoy more benefits and we won't let you go</Text>
      </View>

      <View style={styles.subContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!isPasswordVisible}
          style={styles.input}
        />
        <TouchableOpacity>
          <Text
            style={{ ...styles.input, alignSelf: "flex-end", color: "red" }}
          >
            Show/Hide
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignSelf: "flex-end" }}>
          <Text style={{ color: "yellow" }}>Forgot your password?</Text>
        </TouchableOpacity>
        <Button
          style={styles.btnStyle}
          mode="contained"
          buttonColor={Color.PRIMARY}
          textColor={Color.DARK}
        >
          Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#007bff",
  },
  subContainer: {
    width: "100%",
    height: "70%",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Color.PRIMARY,
  },
  heading: {
    fontSize: 30,
    fontFamily: "Arial",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
});

export default LoginScreen;
