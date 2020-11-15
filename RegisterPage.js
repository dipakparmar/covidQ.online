import React, { Component } from "react";
import { Text, TextInput, Button, View, TouchableOpacity } from "react-native";
import { createStackNavigagtor } from "react-navigation";

export class RegisterPage extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={styles.registerform}>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            returnKeyType="next"
            onSubmitEditing={() => this.emailinput.focus()}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordinput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            ref={(input) => (this.emailinput = input)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            returnKeyType="go"
            secureTextEntry
            ref={(input) => (this.passwordinput = input)}
          />
          <TouchableOpacity
            style={styles.buttoncontainer}
            onPress={() => this.props.navigation.navigate.naviation("Login")}
          >
            <Text style={styles.buttontext}> Sign Up </Text>
          </TouchableOpacity>
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
