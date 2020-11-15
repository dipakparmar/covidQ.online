import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import patient from '../../assets/patient.png'
import hp from '../../assets/hp.png'


const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#252B63',
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
  picpos1:{
    position: 'absolute',
    top: '15%',
    width: '40%',
  },
  picpos2:{
    position: 'absolute',
    top: '60%',
    width: '40%',
  },
  maintext:{
    font: 'Poppins',
    'font-weight': 'bold',
    color: 'white',
    'font-size': '30px',
    position: 'relative',
    'text-align':'center'

  },
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
  but1:{
    position:'absolute',
    top:'45%',
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


function welcome() {
  return (
    <View style={styles.page}>
    <View style={styles.contain}>
      <Text style={styles.maintext}>I am a...</Text>
      <View style={styles.picpos1}>
        <img width={'100%'} src={hp}/>
      </View>
      <View style={styles.but1}>
      <PB title="Healthcare Professional"/>
      </View>
      <View style={styles.picpos2}>
        <img width={'100%'} src={patient}/>
      </View>
      <View style={styles.but2}>
      <PB title="Patient"/>
      </View>
      </View>
    </View>
  );
}






export default welcome