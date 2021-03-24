import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import {Text, View, Alert, SafeAreaView, Image, ImageBackground, ScrollView, Category } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import externalStyle from '../style/externalStyle';
import FlatButton from '../style/button.js';

export default function customiseCharacter() {

  
  return (
    <SafeAreaView style={externalStyle.container}>
      <LinearGradient
        colors={['#0A043C', '#03506F', '#A3DDCB','#A3DDCB' ]}
        style={externalStyle.background}
      />  


        <View style={externalStyle.container}>
      <ImageBackground
            source={require('../assets/cleanlogo.png')}
            style={{
              height: 327,
              width: 327,  
            }}
            resizeMode="contain"
          >
              <View style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  bottom: '50%',

              }}> 
            <ImageBackground
              style={{
                marginTop: '4.5%',
                alignSelf: 'center',
                height: '110%',
                width: '126%',
              }}
              resizeMode="contain"
              source={require('../assets/pinkbox.png')}
            >
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <Image style={{height: 120,
              width: 120, alignSelf: 'center'}} source={require('../assets/characters/001-superhero.png')}
            />
            <Image style={{height: 120,
              width: 120, alignSelf: 'center'}} source={require('../assets/characters/003-superhero.png')}
            />
            <Image style={{height: 120,
              width: 120, alignSelf: 'center'}} source={require('../assets/characters/013-superhero.png')}
            />
            <Image style={{height: 120,
              width: 120, alignSelf: 'center'}} source={require('../assets/characters/017-superhero.png')}
            />
            <Image style={{height: 120,
              width: 120, alignSelf: 'center'}} source={require('../assets/characters/025-superhero.png')}
            />
            <Image style={{height: 120,
              width: 120, alignSelf: 'center'}} source={require('../assets/characters/038-superhero.png')}
            />
            <Image style={{height: 120,
              width: 120, alignSelf: 'center'}} source={require('../assets/characters/041-superhero.png')}
            />
        </ScrollView>
            </ImageBackground>
            </View>    
            <FlatButton text='select' style = {externalStyle.fontStyle} onPress={console.log("selected character")} />
          </ImageBackground>
          </View>

      <StatusBar style="auto" />  
      </SafeAreaView>   
  );
}

