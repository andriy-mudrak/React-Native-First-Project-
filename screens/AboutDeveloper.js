import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class  AboutDeveloper extends React.Component {
  static navigationOptions= {
    header:null
  };
  
  render() {
    return (
      <Image source={require('../assets/images/my_photo.jpg')} />
      
    );
  }
}

