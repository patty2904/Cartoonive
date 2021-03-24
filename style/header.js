import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import externalStyle from '../style/externalStyle';

export default function Header({ navigation }) {

    const move = () => {
        
      }

    return (
        <View style={externalStyle.header}>
               
        <View>
        <Text style={externalStyle.headerText}></Text>
        </View>
        </View>
    )
    
}
