import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import logo from '../../assets/Logo.png'

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#252B63',
    alignItems: 'center',
  },
  block: {
    alignItems: 'left',
    borderRadius: 10,
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    'max-width':'390px',
    'max-height':'370px',
    height: '40%',
    top: '27%'
  },
  contain: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    top:'10%',
    width: "100%",
    height: "80%",
    'min-width':'250px',
    'min-height': "420px"
  },
  maintext:{
    font: 'Poppins',
    'font-weight': 'bold',
    color: 'white',
    'font-size': '30px',
    position: 'relative',
    'text-align':'center'

  },
  subtext:{
    font: 'Poppins',
    'font-weight': 'bold',
    color: '#252B63',
    'font-size': '15px',
    position: 'relative',
    'text-align':'left',
    top:'25%',

  },
  appButtonContainer: {
    elevation: 12,
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 12,

  },
  appButtonText: {
    fontSize: 15.5,
    color: "#252B63",
    fontWeight: "bold",
    alignSelf: "center",
  },
  but1:{
    position:'absolute',
    bottom:'14%',
    width:'276px',
    height:'57px'
  },
  but2:{
    position:'absolute',
    bottom:'0%',
    width:'276px',
    height:'57px'
  }
});

const PB = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);


function emergency() {
  return (
    <View style={styles.page}>
    <View style={styles.contain}>
    <View style={styles.block}>
        <Text style={styles.subtext}> >Trouble Breathing</Text>
        <Text style={styles.subtext}> >Persistent pain in the chest</Text>
        <Text style={styles.subtext}> >New confusion</Text>
        <Text style={styles.subtext}> >Inability to stay awake</Text>
        <Text style={styles.subtext}> >Bluish lips or face</Text>
    </View>
      <Text style={styles.maintext}>Emergency COVID-19 Symptoms</Text>
    <View style={styles.but1}>
      <PB title="NO (Join the Queue)"/>
    </View>
    <View style={styles.but2}>
      <PB style={{backgroundColor:"red"}}title="YES (See Me Immediately)"/>
    </View>
      </View>
    </View>
  );
}


export default emergency