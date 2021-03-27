import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import  {seriesList} from './seriesList';


export default function seriesBaseMethod () {

    var array = [];
    for (let prop in seriesList) {
        array.push(seriesList[prop]);
    }  
    console.log(seriesList[2].hasAdded);

}