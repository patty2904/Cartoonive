import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import {FooterTab, Header, Content, Text, View, Button, SafeAreaView, Image, ImageBackground, ScrollView, Category, TouchableOpacity} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import externalStyle from '../style/externalStyle';
import FlatButton from '../style/button.js';
import {Container, Footer} from 'native-base';
import  seriesBaseMethod, {seriesBase} from '../objects/seriesBase.js';
import  {seriesList} from '../objects/seriesList';


export default function series({navigation}) {

  const populateSeries = [];
for (let i in seriesList) {
   populateSeries.push(<ImageBackground style={externalStyle.circle} source= 
   {require('../assets/circle.png')}>
    <Image style={externalStyle.image} source={seriesList[i].uri}/>
    </ImageBackground>);
  }
  

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
      source={require('../assets/series.png')}
      
      />
      </TouchableOpacity>
        </View>

    <ScrollView>
       <View>
         {populateSeries}
       </View>
      
    </ScrollView> 


        <View style={externalStyle.container}>
      <ImageBackground
            source={require('../assets/cleanlogo.png')}
            style={{
              height: 327,
              width: 327,  
              bottom: 200
            }}
            resizeMode="contain"
          >

     </ImageBackground>
        </View>
        <View style={externalStyle.footer}>
        <Text style={{fontSize:20}}> </Text>
        </View>
         </View>


    )
}