import React, { Component } from 'react';
import { AppRegistry,StyleSheet, Image, View, Text, Font} from 'react-native';

export default class  AboutDeveloper extends React.Component {
  static navigationOptions= {
    header:null
  };
  
  render() {
    return (
    
   <View style={styles.backgroundDesign}>
       
        <View style={styles.photoContainer}>      
          <Image 
          source={require('../assets/images/my_photo.jpg')}
          style={styles.mainImage}
          />
        </View>
      
        <View style={styles.textContainer}>
          <Text
          style={styles.mainText}>Hi. My name is Andriy and now i`m studying at SoftServe IT Academy.
          If talk about hobby I love football and lately I like web programming. 
          I even did not think it could be so interesting. </Text>
        </View>

     </View>
    
    );
  }
}
const styles = StyleSheet.create({
  mainText:{
    fontSize:18,
    textAlign: "justify",
  },
  mainImage:{
    width:"70%", 
    height:"70%",
  },
  backgroundDesign:{
      flex:1,      
      margin:10,
      borderRadius: 5,
      borderWidth: 2,
      borderStyle:"dashed",
      backgroundColor: '#d6d7da',
  },
  photoContainer:{
    flex: 3, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer:{
    flex:1,
  },
});
