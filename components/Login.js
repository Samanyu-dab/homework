import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TextInput,Button,Image} from 'react-native';
//import Login from 'Login.js' 

export default function Login() {
  return (
    <View >
     
     
    < TextInput
        style={{height: 40,borderWidth:3,width:200,textAlign:'center',marginLeft:50,marginBottom:20,}}
        placeholder="Username"
      
      />

      < TextInput
        style={{height: 40,borderWidth:3,width:200,textAlign:'center',marginLeft:50,marginBottom:20,}}
        placeholder="Password"
      />
      <Button title="Login"></Button>
      <StatusBar style="auto" />
    </View>
  );
}