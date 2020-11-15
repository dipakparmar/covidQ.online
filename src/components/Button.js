import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors  from '../styles/Colors';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return <View>{this.buttonTypes()}</View>;
  }


buttonTypes (){

  if (this.props.primaryText) {
    return (
    <View style={styles.container, styles.primaryText}>
      <Text style={styles.primaryText}>{this.props.title}</Text>
    </View>
    )
  }
  else if (this.props.secondary) {
    return (
    <View style={styles.container, styles.secondaryText}>
      <Text style={styles.secondaryText}>{this.props.title}</Text>
    </View>
    )
  }
  
}

}


const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 188,
    height: 57,
    left: 45,
    top: 20,
    borderRadius: 15,
  },
  primaryText: {
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
  },
  secondaryText: {
    backgroundColor: Colors.SECONDARY,
    color: Colors.WHITE,
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
