import React from 'react';
import {TouchableOpacity, Text, View } from 'react-native';
import externalStyle from './externalStyle';

export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
    <View style={externalStyle.button}> 
    <Text style = {externalStyle.buttonText}>{text}</Text>
    </View>
        </TouchableOpacity>
    )
}