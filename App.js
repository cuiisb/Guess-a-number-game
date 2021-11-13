import * as React from 'react';
import {Image,Button, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import FirstScreen from './assets/Screen';

export default function App() {
const [getinput,setinput]=React.useState(-1);
const [getresult,setresult]=React.useState(" ");
const [getguesses,setguesses]=React.useState(" ");
const [getTotalHints,setTotalHints]=React.useState(0);
const [getTotalScore,setTotalScore]=React.useState(0);
const [getRoundScore,setRoundScore]=React.useState("");
const [getTries,setTries]=React.useState(0);
const [getRounds,setRounds]=React.useState(1);
var randnum=Math.floor(Math.random()*9)+1;
const [NumberHolder, setNohold]=React.useState(randnum);



const buttonClick=(input)=>{
  if(getinput===0)
    setinput(input);

  else
    setinput(input);
};
const GenerateRandomNum=()=>{
var randnum=Math.floor(Math.random()*9)+1;
return randnum;
};


const Result=()=>{
  setguesses(getguesses +  ' ' + getinput);
  var score;
  if (getinput==  NumberHolder){
    setresult("congrats!! ypu guessed it right");
    score=10 - getTotalHints*2;
    setTotalScore(score);
    setRoundScore(getRoundScore + '' + score)
    setinput(-2);
  }
  else{
     setresult("Oh no!! you guessed it wrong");
    score=0;
    setTotalScore(score);
    setRoundScore(getRoundScore + '' + score)
    if(getTries<5){
      setTries(getTries+1);
    }
    else if(getTries>5){
     
      setRounds(getRounds+1);
      setNohold(GenerateRandomNum());
       setTries(1);
       setTotalHints(0);
       setTotalScore(0);

    }
    if(getTries==5){
   setinput(-2);
    }

  }
};


const SecondScreen=(
  <View style={styles.container}>
   <View style={styles.container}>
   <Text style={styles.text2}> GAME </Text>
   <Text style={styles.text2}> Guess random number between 1 to 10 </Text>
  </View>
    <View style={styles.container}>
   <Text style={{color: '#8b0000',fontWeight:"bold"}}> Rounds: {getRounds}
    </Text>
   <Text style={{color: '#8b0000',fontWeight:"bold"}}> Try: {getTries} </Text>
  </View>
   <View style={styles.container}>
   <Text style={{color: '#8b0000',fontWeight:"bold", justifyContent:"right"}}> Score: {getTotalScore} </Text>
   <Text style={{color: '#8b0000',fontWeight:"bold"}}> User Guess: {getguesses} </Text>
   
    <Text style={styles.text1} >
  {'   '} {getinput} {'  '}
  </Text >
  <Text style={styles.text1}> {getresult}
  </Text>
  </View>
 <View style={{flexDirection:"row"}}>
<View style={styles.buttonContainer}>
 <Button title="1" color='#8b0000' onPress={buttonClick.bind(this,1)}/>
 </View>
 <View style={styles.buttonContainer}>
  <Button title="2" color='#8b0000' onPress={buttonClick.bind(this,2)}/>
  </View>
  <View style={styles.buttonContainer}>
   <Button title="3" color='#8b0000' onPress={buttonClick.bind(this,3)}/>
   </View>
 </View>
 <View  style={{flexDirection:"row"}}>
  <View style={styles.buttonContainer}>
 <Button title="4" color='#8b0000' onPress={buttonClick.bind(this,4)}/>
 </View>
  <View style={styles.buttonContainer}>
  <Button title="5" color='#8b0000' onPress={buttonClick.bind(this,5)}/> 
  </View>
   <View style={styles.buttonContainer}>
   <Button title="6" color='#8b0000' onPress={buttonClick.bind(this,6)}/>
   </View>
 </View>
 <View  style={{flexDirection:"row"}}>
  <View style={styles.buttonContainer}>
 <Button title="7" color='#8b0000' onPress={buttonClick.bind(this,7)}/> 
 </View>
 <View style={styles.buttonContainer}>
  <Button title="8" color='#8b0000' onPress={buttonClick.bind(this,8)}/>
   </View>
   <View style={styles.buttonContainer}>
   <Button title="9" color='#8b0000' onPress={buttonClick.bind(this,9)}/>
   </View>
 
 </View>

 <View style={{margin:9,flexDirection:"row", justifyContent:"space-around"}}>
 <TouchableOpacity style={{   backgroundColor: '#8b0000', width: "27%",
    borderRadius: 100,
    margin: 2,
alignItems:'center',
justifyContent:'center',
   border: '1px solid white', }} onPress={Result.bind(this)}
    >
 <Text style={{color:'white' }}>  MATCH  </Text>
 </TouchableOpacity>
  <View style={styles.button2Container}>
 <Button title="Hint" color='#8b0000' onPress={()=>{
   setTotalHints(getTotalHints+1)
if(NumberHolder<getinput)
setresult("YOU GUESSED HIGHER");
if(NumberHolder>getinput)
setresult("YOU GUESSED LOWER");
 }}/> </View>
  <View style={styles.button2Container}>
  <Button title="Reset" color='#8b0000' onPress={()=>{
    setinput(0)
    setresult('');
  }}/>
  </View>
 </View>
 <View style={{paddingTop:15, width:"100%"}}>
  <View style={{width: "50%", alignSelf:"center"}}>
   <Button title="Done" color='#8b0000' onPress={()=>{ 
     setinput(-2)
   }}/>
 </View>
 </View>
  </View>
);

const ThirdScreen=(
 <View style={styles.container}>
    <Text style={styles.text1}>RESULTS</Text>
  <Text style={styles.text2}> Actual no: {NumberHolder}</Text>
  <View style={styles.container}>
  <Text style={styles.text2}> Guesses: {getguesses}</Text>
    <Text style={styles.text2}> Round no: {getRounds}</Text>
      <Text style={styles.text2}> No. of Tries: {getTries}</Text>

          <Text style={styles.text2}> Total Score: {getTotalScore}</Text>
  </View>
  <View style={{width:"50%", alignSelf:"center", margin: 20}}>
  <Button title="Play again" color='#8b0000' onPress={()=> {
  setinput(0);
setTries(1);
setRounds(getRounds+1)
setNohold(GenerateRandomNum());
setTotalHints(0);
setresult('');
setRoundScore('');
setguesses('');
setTotalScore(0);
}}/>
  </View>
  <View style={{width:"50%", alignSelf:"center", margin: 20}}>
  <Button title="END" color='#8b0000' onPress={()=>{
    setinput(-1);
    setNohold(GenerateRandomNum());
    setresult('');
    setRounds(1);
setTries(1);
setRoundScore('');
setguesses('');
setTotalHints(0);
setTotalScore(0);
  }}/>
  </View>
  </View>
);
const ChangeScreen=()=>{
if(getinput=== -1)
return (
  <FirstScreen  begin={()=>{
setinput(0);
  }}/>
);
else if (getinput === -2)
return( ThirdScreen );

else
    return SecondScreen;
};
 return ( <View style={styles.container}>{ChangeScreen()}</View>);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#e9967a', //peach color
    padding: 8,
  },


 buttonsRowContainer: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '33%',
    margin: 2,
    border: '1px solid white',
  },
  button2Container: {
     backgroundColor: '#8b0000', width: "27%",
    borderRadius: 100,
    margin: 2,
alignItems:'center',
justifyContent:'center',
   border: '1px solid white',
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
fontSize: 22,
fontFamily: "Forte,Bradley hand ITC"
  },
    text3:{
color:'#b22222',
textAlign: "center",
fontWeight: "bold",
fontSize: 100,
paddingTop:"-60px",
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
