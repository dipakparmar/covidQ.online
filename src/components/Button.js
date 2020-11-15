import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 188,
    height: 57,
    left: 45,
    top: 20,
    backgroundColor: "#F21D52",
    borderRadius: 15,
  },
  text: {
    position: "absolute",
    left: "31.91%",
    right: "32.45%",
    top: "26.32%",
    bottom: "26.32%",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 27,

    display: "flex",
    alignItems: "center",
    textAlign: "center",

    color: "#252B63",
  },
});
