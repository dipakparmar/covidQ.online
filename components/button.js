import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = {
    rectangle: {
        width: '239px',
        height: '57px',
    }
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}