import React, { Component } from "react";
import { Text, TextInput, Button, View, TouchableOpacity } from "react-native";
import { createStackNavigagtor } from "react-navigation";

export class HomePage extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={StyleSheet.text}> Welcome to HomePage </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    alignItems: "stretch",
  },
  text: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
  },
};

