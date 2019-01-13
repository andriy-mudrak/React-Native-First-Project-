import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create ({
  helloworld:{
    textAlign: "center",
    fontSize:25,    
    color:"red",
  },
  centralpart:{ 
    flex:1, 
    backgroundColor: "#faebd7",   
    justifyContent:"center",
  },
  });

export default class Greeting extends Component {
  static navigationOptions= {
    header:null
  };

  render() {
    return (
      
          <View  style={styles.centralpart}>
            <Text style = {styles.helloworld}>Hi. It`s my first program in React Native.More information about me you can find in tab About Developer</Text>
          </View>

    );
  }
}
