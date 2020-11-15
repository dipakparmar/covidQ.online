import React, { Component } from "react";
import { Button ,StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
 appButtonContainer: {
    elevation: 12,
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 12,
  },
  appButtonText: {
    fontSize: 17,
    color: "#252B63",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

const nButton = function({ onPress, title }) {
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
}

export default nButton
