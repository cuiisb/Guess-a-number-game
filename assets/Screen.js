import * as React from 'react';
import { Button, Image,Text, View, StyleSheet } from 'react-native';


const FirstScreen=(props)=>{
return(
  <View style={styles.container}>
    <View style={styles.container}>
  <Text style={styles.text1}> WELCOME TO </Text>
   <Text style={styles.text2}> GUESS THE NUMBER GAME </Text>
   <Text style={styles.text3}> ? </Text>
  </View>

  <View style={styles.container}>
  <Button title= "Start Game" color='#8b0000' onPress={props.begin}/>
   </View>
   </View>
)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
 
    backgroundColor: '#e9967a', //peach color
    padding: 8,
  },


  text1:{
textAlign: "center",
color: '#8b0000', //marroon color
fontWeight: "bold",
fontSize: 20,

  },
  text2:{
color:'#b22222',
textAlign: "center",
fontWeight: "bold",
fontSize: 30,
fontFamily: "Forte,Bradley hand ITC"
  },
    text3:{
color:'#b22222',
textAlign: "center",
fontWeight: "bold",
fontSize: 100,
paddingTop:"-60px",
  },


});

export default FirstScreen;
