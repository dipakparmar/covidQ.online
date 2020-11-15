import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import logo from '../../assets/Logo.png'
import Button from '../components/Button.js'


const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  contain: {
    alignItems: 'center',
    position: 'absolute',
    top:'10%',
    width: "20%",
    height: "80%",
    'min-width':'250px',
    'min-height': "400px"
  },
  maintext:{
    font: 'Poppins',
    'font-weight': 'bold',
    color: '#252B63',
    'font-size': '30px',
    position: 'relative',
    'text-align':'center'
  },
  appButtonContainer: {
    elevation: 12,
    backgroundColor: "#252B63",
    borderRadius: 15,
    paddingVertical: 12,
  },
  appButtonText: {
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
  but1:{
    position:'absolute',
    bottom:'14%',
    width:'188px',
    height:'57px'
  },
  but2:{
    position:'absolute',
    bottom:'0%',
    width:'188px',
    height:'57px'
  }
});

const PB = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

function headache() {
  return (
    <View style={styles.page}>
    <View style={styles.contain}>
      <Text style={styles.maintext}>Are you exeriencing any headaches?</Text>
    <View style={styles.but1}>
      <PB title="NO"/>
    </View>
    <View style={styles.but2}>
      <PB title="YES"/>
    </View>
      </View>
    </View>
  );
}


export default headache