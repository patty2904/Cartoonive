import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Text, View, Alert, SafeAreaView, Image, ImageBackground, ScrollView, Category, TouchableOpacity} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import externalStyle from '../style/externalStyle';
import FlatButton from '../style/button.js';
import { FlatList } from 'react-native-gesture-handler';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

var CHARACTER = '';

export default function customiseCharacter( {route, navigation} ) {

// const [character, setCharacter] = useState(''); 

// const handleCharacter = (theCharacter) => { 
// setCharacter(theCharacter);
// console.log(theCharacter);
// }


const [characters, setCharacters] = useState([
    {image: require('../assets/characters/001-superhero.png'), key: '1'},
    {image: require('../assets/characters/003-superhero.png'), key: '2'},
    {image: require('../assets/characters/013-superhero.png'), key: '3'},
    {image: require('../assets/characters/017-superhero.png'), key: '4'},
    {image: require('../assets/characters/025-superhero.png'), key: '5'},
    {image: require('../assets/characters/038-superhero.png'), key: '6'},
    {image: require('../assets/characters/041-superhero.png'), key: '7'},

])

//const { superheroID } = route.params;

 const pressHandler = (num) => {
  console.log(num);
  CHARACTER = num;
  navigation.navigate('Home');
 }

 const storeData = async (num) => {
   try {
     await AsyncStorage.setItem('id', num);
     console.log("saved. the selected id is: " + num);
     navigation.navigate('Home');
   } catch (error) {
     console.log("error. the selected id is:  " + num);
     navigation.navigate('Home');
   }
 }

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

           <TouchableOpacity onPress={()=>pressHandler('1')}>
            <Image style={{height: 120,
              width: 120, alignSelf: 'center'}} source={require('../assets/characters/001-superhero.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>pressHandler('2')}>
            <Image style={{height: 120,
              width: 120, alignSelf: 'center'}} source={require('../assets/characters/003-superhero.png')}
            />
            </TouchableOpacity>
          
            <TouchableOpacity onPress={()=>pressHandler('3')}>
            <Image style={{height: 120,
              width: 120, alignSelf: 'center'}} source={require('../assets/characters/013-superhero.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>pressHandler('4')}>
            <Image style={{height: 120,
              width: 120, alignSelf: 'center'}} source={require('../assets/characters/017-superhero.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>pressHandler('5')}>
            <Image style={{height: 120,
              width: 120, alignSelf: 'center'}} source={require('../assets/characters/025-superhero.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>pressHandler('6')}>
            <Image style={{height: 120,
              width: 120, alignSelf: 'center'}} source={require('../assets/characters/038-superhero.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>pressHandler('7')}>
            <Image style={{height: 120,
              width: 120, alignSelf: 'center'}} source={require('../assets/characters/041-superhero.png')}
            />
            </TouchableOpacity>

        </ScrollView>
            </ImageBackground>
            </View>    
            
          </ImageBackground>
          </View>

      <StatusBar style="auto" />  
      </SafeAreaView>   
  );
}
 export{CHARACTER};
