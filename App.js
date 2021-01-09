import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TextInput,Button,Image} from 'react-native';
import Login from './components/Login.js' ;
import Header from './components/Header.js';
import Picture from './components/Image.js'

export default function App() {
  return (
    <View>
   <Header/>
   <Picture/>
   <Login/> 
   
    </View>
  );
}

