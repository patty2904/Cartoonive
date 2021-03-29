import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import {Modal, Header, Content, Text, View, Button, SafeAreaView, Image, ImageBackground, ScrollView, Category, TouchableOpacity} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import externalStyle from '../style/externalStyle';
import FlatButton from '../style/button.js';
import {Container, Footer} from 'native-base';
import  seriesBaseMethod, {seriesBase} from '../objects/seriesBase.js';
import  {seriesList} from '../objects/seriesList';
import {useState} from "react";


export default function series({navigation}) {

  const [modalOpen, setModalOpen] = useState(false);


  var customTop = 15;
  var customlLeft = 0;
  var customRight = 155;

  const populateSeries = [];
  for (let i in seriesList) {
   populateSeries.push(<ImageBackground style={externalStyle.circle, {top: customTop, left: customlLeft, right: customRight, height: 180, width: 200}} source= 
   {require('../assets/circle.png')}>

<Modal visible={modalOpen} animationType='slide'>
  <View style={{backgroundColor: '#B6A3B0', flex: 1}}>
    <TouchableOpacity onPress={() => {setModalOpen(false)}}> 
      <Image 
        style={{ width: 50, height: 50, left: 20, bottom: -50}}
        source={require('../assets/removeblue.png')}/>  
    </TouchableOpacity> 
  </View>
</Modal>


    <TouchableOpacity onPress={() => {setModalOpen(true)}}>
    <Image style={externalStyle.image} source={seriesList[i].uri}/>
    </TouchableOpacity>


    </ImageBackground>);
    //customTop+=25;
    if (i % 2 == 0){
      customTop+= 15;
      customRight=155;
      customlLeft=0;
    } else { 
      customRight=0;
      customlLeft=155;
      }
      
  }
  
  //{alignContent: 'center',
 // right:-15, bottom: -70}


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
       <View style={{paddingLeft: -190, paddingRight: 170, marginLeft: 20}}>
         {populateSeries}
       </View>
    </ScrollView> 


        <View style={externalStyle.container}>
      <ImageBackground
            source={require('../assets/cleanlogo.png')}
            style={{
              height: 327,
              width: 327,  
              bottom: 300,
              opacity: 0.4
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