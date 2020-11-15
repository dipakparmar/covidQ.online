import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import logo from '../../assets/Logo3.png'
import Button from '../../components/dummybutton.js'




const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#252B63',
    alignItems: 'center',
  },
  contain: {
    position: 'absolute',
    top:'30%',
    width: "20%",
    height: "50%",
    'min-width':'250px',
    'min-height': "400px"
  },
  picpos:{
    position: 'absolute',
    top: '2%',
    left: '5%',
    width: '90%',
  },
  maintext:{
    font: 'Poppins',
    'font-weight': 'bold',
    color: 'white',
    'font-size': '25px',
    position: 'relative',
    top:'62%',
    'text-align': 'center'
  },
  subtext:{
    font: 'Poppins',
    color: 'white',
    'font-size': '20px',
    position: 'relative',
    top:'64%',
    'text-align': 'center'
  },
  appButtonContainer: {
    elevation: 12,
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 12,
    width:"100%",
  },
  appButtonText: {
    fontSize: 12,
    color: "#252B63",
    fontWeight: "bold",
    alignSelf: "center",
  },
  but1:{
    position:'absolute',
    alignItems: 'center',
    bottom:'0%',
    width:'255px',
    height:'57px',
  }
});

const PB = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);


function start() {
  return (
    <View style={styles.page}>
    <View style={styles.contain}>
      <View style={styles.picpos}>
        <img width={'100%'} src={logo}/>
      </View>
        <Text style={styles.maintext}>Get your Priority </Text>
        <Text style={styles.subtext}>Easy way to get ahead!</Text>
      <View style={styles.but1}>
      <PB title="Let's Get Started" />
      </View>
      </View>
    </View>
  );
}






export default start