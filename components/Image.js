import React,{Component}from 'react';
import { StyleSheet, Text, View ,TextInput,Button,Image} from 'react-native';

export default function DisplayImage () {
    return(
       <View>
          <Image
            style={{
              resizeMode: "cover",
              height: 150,
              width: 350,
              marginBottom:30
            }}
            source={require("../assets/bugatti-veyron-mansory-0dc2.jpg")}
          />
        </View>
         );
  }
