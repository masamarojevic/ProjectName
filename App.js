import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image,Button } from 'react-native';

export default function App() {
  const[textColor, setTextcolor] = useState("green");
  const[counter,setCounter]=setCounter(0);
  return (
    <View style={styles.container}>
      <View style= {{width: "100%",height:180, backgroundColor:"lightblue",marginTop:48}}>
       <Text style ={{fontSize:35, fontStyle:'italic',marginTop:10,marginBottom:10, color:textColor}}>{textColor}Hello World</Text>
       <Text style ={{fontSize:25,marginBottom:10}}>First React Native App</Text>
       <Text style ={{fontSize:15}}>This is a paragraph explaining what this app is all about.
        As you can see there are already many components including text,
        images and buttons</Text>
      </View>
      <Text style ={{fontSize:15, fontWeight:'bold',marginTop:20}}>
        What would you like to get out from this course?
      </Text>
      <Text style={{...styles.header, color:"red"}}>Another Header</Text>
      <TextInput style ={{backgroundColor:"#EAF2F8",width:300,height:100,marginTop:15}}
      placeholder='Write in here..'
       />
       <Text style={{fontSize:15, fontWeight:'bold',marginTop:20}}>An emoji describing how you are feeling {'\n'} about this course:</Text>
       <Image style ={{width:200, height:200, marginTop:50}}
        source={require('./assets/emoji1.png')}/>
        <Button title={"Submit and changed text to blue"}
         onPress={()=>{
          console.log("Text color before button press" + textColor)
          let textColor=setTextcolor("blue");
          console.log("Text color after is: " + textColor)
         }}
         />
         
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    
  },
  contentBody: {width:200,height:500, backgroundColor: "green" },
  header: {
    fontWeight:"bold",
    fontSize: 30,
  }
});
