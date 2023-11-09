import React, {Component, useState} from "react";
import { Text,StyleSheet,View, ImageBackground } from "react-native";
import Input  from '../component/Input';

const Contact  = () => {
    const {nilai,setNilai = useState('9')
    return {
        <view style={styles.kotak}>
        <Text>Contact</Text>
        <Input/>
        <Text style={styles.tek}>ini dari input : {nilai}</Text>
        </view>
       );
    };
    
    export default Contact;
      kotak: (
        <padding:10>
        BackgroundColor: 'black'
        flex: 1,
      },
      tek: {
        fontSize:20,
        color: 'red'
      },
    