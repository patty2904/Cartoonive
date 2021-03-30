import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import {FooterTab, Header, Content, Text, View, Button, SafeAreaView, Image, ImageBackground, ScrollView, Category, TouchableOpacity} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import externalStyle from '../style/externalStyle';
import FlatButton from '../style/button.js';
import {Container, Footer} from 'native-base';
import  seriesBaseMethod, {seriesBase} from '../objects/seriesBase.js';
import  {seriesList} from '../objects/seriesList';
import {image} from './home';



export default function movies({navigation}) {


    return (  
    <View style={externalStyle.container}>
      <LinearGradient
        colors={['#0A043C', '#03506F', '#A3DDCB','#A3DDCB' ]}
        style={externalStyle.background}
      />  

<View style={externalStyle.headerr}>
<TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
            <Image
        style={{ width: 50, height: 50, right: 155, top: 50}}
        source={require('../assets/back_blue.png')}
      />
      <Image 
      style={{width: 60, height: 60, bottom: 10, right: 2}}
      source={require('../assets/movies.png')}
      
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