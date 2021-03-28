import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import  {seriesList} from './seriesList';
import {Image} from 'react-native';


export default function seriesBaseMethod () {

    var array = [];
    for (let prop in seriesList) {
        array.push(seriesList[prop]);
    }  
    console.log(seriesList[1].uri);
}
