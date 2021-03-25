import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import {FooterTab, Header, Content, Text, View, Button, SafeAreaView, Image, ImageBackground, ScrollView, Category, TouchableOpacity} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import externalStyle from '../style/externalStyle';
import FlatButton from '../style/button.js';
import {Container, Footer} from 'native-base';


export default function home({navigation}) {

    return (  
    <View style={externalStyle.container}>
      <LinearGradient
        colors={['#0A043C', '#03506F', '#A3DDCB','#A3DDCB' ]}
        style={externalStyle.background}
      />  

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
    width: '80%', 
    height: '80%', 
    resizeMode: 'contain',
    bottom: 190,
    left: 50
    
}} >
  <TouchableOpacity onPress={() => {navigation.navigate("Movies")  }}>
<Image source={require('../assets/movies.png')}
style={{
    width: '55%', 
    height: '55%', 
    resizeMode: 'contain',
    bottom:-15,
    left: 40
}}
/>
</TouchableOpacity>
</ImageBackground>
<ImageBackground source={require('../assets/circle.png')}
style={{
    width: '80%', 
    height: '80%', 
    resizeMode: 'contain',
    top: -195,
    right: -60
    
}} >
  <TouchableOpacity onPress={() => {navigation.navigate("Series")  }}>
    <Image source={require('../assets/series.png')}
    style={{
        width: '55%', 
        height: '55%', 
        resizeMode: 'contain',
        top: 20,
        left: 45
    }}
    />
   </TouchableOpacity>
    </ImageBackground>

     </ImageBackground>
        </View>
        <View style={externalStyle.footer}>
        <Text style={{fontSize:20}}> </Text>
        </View>
         </View>


    )
}