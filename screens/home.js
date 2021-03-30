import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import {FooterTab, Header, Content, Text, View, Button, SafeAreaView, Image, ImageBackground, ScrollView, Category, TouchableOpacity} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import externalStyle from '../style/externalStyle';
import FlatButton from '../style/button.js';
import {Container, Footer} from 'native-base';
import {CHARACTER} from './customiseCharacter';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import ONE from '../assets/characters/001-superhero.png';
import TWO from '../assets/characters/003-superhero.png';
import THREE from '../assets/characters/013-superhero.png';
import FOUR from '../assets/characters/017-superhero.png';
import FIVE from '../assets/characters/025-superhero.png';
import SIX from '../assets/characters/038-superhero.png';
import SEVEN from '../assets/characters/041-superhero.png';

var image = '';
export default function home({navigation}) {

  const retrieveCharacter = () => {
    if (CHARACTER == 1){
      image = ONE;
    } else if (CHARACTER == 2) {
      image = TWO;
    } else if (CHARACTER == 3) {
      image = THREE;
    } else if (CHARACTER == 4) {
      image = FOUR;
    } else if (CHARACTER == 5) {
      image = FIVE;
    } else if (CHARACTER == 6) {
      image = SIX;
    } else if (CHARACTER == 7) {
      image = SEVEN;
    } else {
      console.log("error. unable to read character selection.");
    }
  };

    return ( 
    <View style={externalStyle.container}>
      <LinearGradient
        colors={['#0A043C', '#03506F', '#A3DDCB','#A3DDCB' ]}
        style={externalStyle.background}
      />  

    {retrieveCharacter()}
    
<View style={externalStyle.headerr}>
<TouchableOpacity onPress={() => { navigation.navigate("CustomCharacters") }}>
            <Image
        style={{ width: 50, height: 50, right: 155, top: 17}}
        source={require('../assets/back_blue.png')}
      />
      </TouchableOpacity>
        </View>

        <View style={externalStyle.container}>
      <ImageBackground
            source={require('../assets/cleanlogo.png')}
            style={{
              height: 327,
              width: 327,  
            }}
            resizeMode="contain"
          >
<ImageBackground source={require('../assets/circle.png')}
style={{
    width: 315, 
    height: 285, 
    resizeMode: 'contain',
    bottom: 150,
    left: 5
    
}} >
  <TouchableOpacity onPress={() => {navigation.navigate("Movies")  }}>
<Image source={require('../assets/movies.png')}
style={{
  width: 210, 
  height: 210,
    resizeMode: 'contain',
    bottom:-25,
    left: 50
}}
/>
</TouchableOpacity>
</ImageBackground>
<ImageBackground source={require('../assets/circle.png')}
style={{
    width: 315, 
    height: 285, 
    resizeMode: 'contain',
    top: -105,
    right: -10
    
}} >
  <TouchableOpacity onPress={() => {navigation.navigate("Series")  }}>
    <Image source={require('../assets/series.png')}
    style={{
      width: 210, 
      height: 210, 
        resizeMode: 'contain',
        top: 30,
        left: 50
    }}
    />
   </TouchableOpacity>
    </ImageBackground>

     </ImageBackground>
        </View>
        <View style={externalStyle.footer}>
          <ImageBackground 
          source={require('../assets/bluecircle.png')}
          style={{ width: 100, height: 100, left: 155, top: 0}}>
          <TouchableOpacity onPress={() => {navigation.navigate("LibraryHome")}} >
          <Image 
        style={{width: 80, height: 80, left: 10, top: 10}}
        source={image}/>
        </TouchableOpacity>
        </ImageBackground>
        </View>
         </View>


    )
}

export {image};