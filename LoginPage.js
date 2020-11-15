import React, { Component } from "react";
import { Text, TextInput, Button, View, TouchableOpacity } from "react-native";
import { createStackNavigagtor } from "react-navigation";
import RegisterPage from "./RegisterPage";
import HomePage from "./HomePage";

export class LoginPage extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={styles.textfields}>
          <TextInput style={styles.input}>
            placeholder = "username" returnKeyType = "next" onSubmitEditing ={" "}
            {() => this.passwordInput.focus()}
            keyboardType = "email-address" autoCapitalize = "none" autoCorrect ={" "}
            {false}
          </TextInput>
          <TextInput style={styles.input}>
            placeholder = "password" returnKeyType = "go" secureTextEntry ref ={" "}
            {(inpupt) => (this.passwordInput = input)}
          </TextInput>
          <TouchableOpacity
            style={styles.buttoncontainer}
            onPress={() => this.props.navigation.navigate.naviation("Home")}
          >
            <Text style={styles.buttontext}> Login </Text>
          </TouchableOpacity>
          <Button
            title="Sign In here"
            colo="#1abc9c"
            onPress={() => this.props.naviation.navigate("Register")}
          />
        </View>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return <AppStackNavigator />;
  }
}

const AppStackNavigator = createStackNavigagtor({
  Login: LoginPage,
  Register: RegisterPage,
  Home: HomePage,
});

const styles = {
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    alignItems: "stretch",
  },
  input: {
    paddingLeft: 20,
    borderRadius: 5,
    height: 50,
    frontSize: 25,
    backgroundColor: "white",
    borderWidth: 1,
    marginBottom: 20,
    color: "#34495e",
  },
  buttoncontainer: {
    height: 50,
    borderRadius: 50,
    backgroundColor: "#1abc9c",
    paddingVertical: 10,
    justifyCOntent: "center",
  },
  buttontext: {
    textAlign: "center",
    color: "#ecf0f1",
    fontSize: 20,
  },
};
