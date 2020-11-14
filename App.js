import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import logo from './assets/Logo.png'

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#252B63',
    alignItems: 'center',
  },
  maintext:{
    font: 'Poppins',
    'font-weight': 'bold',
    color: 'white',
    'font-size': '25px',
    position: 'absolute', 
    top: '45%'
  },
  subtext:{
    font: 'Poppins',
    color: 'white',
    'font-size': '20px',
    position: 'absolute', 
    top: '53%'
  },
  textpos:{
    position: 'absolute',
    top: '50'
  },
});


 function App() {
  return (
    <View style={styles.page}>
      <img width={'15%'}  src={logo}/>
      <div style={styles.textpos}>
      <Text style={styles.maintext}>Get your Priority</Text>
      <Text style={styles.subtext}>Easy way to get ahead!</Text>
      </div>
    </View>
  );
}






export default App