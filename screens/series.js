import React  from 'react';
import {Modal, Header, Content, Text, View, Button, SafeAreaView, Image, ImageBackground, ScrollView, Category, TouchableOpacity} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import externalStyle from '../style/externalStyle';
import  {seriesList} from '../objects/seriesList';
import {useState} from "react";
import {image} from './home';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

export default function series({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [getK, setK] = useState(7);

  let imageToggle = true;
  var customTop = 15;
  var customLeft = 0;
  var customRight = 155;
  let k = 19;
  const populateSeries = [];
  for (let i in seriesList) {
   populateSeries.push(
    <TouchableOpacity onPress={() => 
      {setModalOpen(true)
       setK(i);
      console.log("k inside loop:" + k)}}>
    <Image style={externalStyle.image,
     {top: customTop, left: customLeft, right: customRight, height: 180, width: 200}}
    source={seriesList[i].uri}/>
    </TouchableOpacity>
    );
    if (i % 2 == 0){
      customTop+= 15;
      customRight=155;
      customLeft=0;
    } else { 
      customRight=0;
      customLeft=155;
      }
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
       <View style={{paddingLeft: -190, paddingRight: 170, marginLeft: 20}}>
         {populateSeries}       
       </View>
    </ScrollView> 

    <View>
    <Modal visible={modalOpen} animationType='slide'>
  <View style={{backgroundColor: '#B6A3B0', flex: 1}}>
    <TouchableOpacity onPress={() => 
    {setModalOpen(false)
  console.log("k outside of loop: " + k)
    }}> 
      <Image 
        style={{ width: 50, height: 50, left: 20, bottom: -50}}
        source={require('../assets/removeblue.png')}/>  
    </TouchableOpacity> 
    <Image style={{height: 200,
        width: 200,  bottom: -40, left: 105}} source={seriesList[getK].uri}/>
    <Text
        style={{
          bottom: -60,
          color: 'black',
          fontFamily: 'MarkerFelt-Thin',
          fontSize: 21,
          textAlign: 'left'
      }}
    >Name:  {seriesList[getK].name}</Text>
    <Text
    style={{
      bottom: -90,
      color: 'black',
      fontFamily: 'MarkerFelt-Thin',
      fontSize: 21,
      textAlign: 'left'
  }}
    >Year:  {seriesList[getK].year}</Text>
    <Text
    style={{
      bottom: -120,
      color: 'black',
      fontSize: 21,
      textAlign: 'left',
      fontFamily: 'MarkerFelt-Thin'
  }}
    >Description:  {seriesList[getK].description}</Text>

    <TouchableOpacity onPress={() => {
      imageToggle = false;
      console.log(imageToggle)
      }}> 
      {
      imageToggle === true ?
      <Image style={{height: 80,
        width: 80,  bottom: -130, left: 150}} source={
          require('../assets/plus.png')}/> :
          <Image style={{height: 80,
            width: 80,  bottom: -130, left: 150}} source={
              require('../assets/tick.png')}/>
      }
    </TouchableOpacity>

    <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{bottom: -200}}
        >

           <TouchableOpacity onPress={()=>pressHandler('1')}>
            <Image style={{height: 100,
              width: 100, alignSelf: 'center'}} source={require('../assets/emojis/happiness.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>pressHandler('2')}>
            <Image style={{height: 100,
              width: 100, alignSelf: 'center'}} source={require('../assets/emojis/sadness.png')}
            />
            </TouchableOpacity>
          
            <TouchableOpacity onPress={()=>pressHandler('3')}>
            <Image style={{height: 100,
              width: 100, alignSelf: 'center'}} source={require('../assets/emojis/love.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>pressHandler('4')}>
            <Image style={{height: 100,
              width: 100, alignSelf: 'center'}} source={require('../assets/emojis/fear.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>pressHandler('5')}>
            <Image style={{height: 100,
              width: 100, alignSelf: 'center'}} source={require('../assets/emojis/excited.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>pressHandler('6')}>
            <Image style={{height: 100,
              width: 100, alignSelf: 'center'}} source={require('../assets/emojis/dead.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>pressHandler('7')}>
            <Image style={{height: 100,
              width: 100, alignSelf: 'center'}} source={require('../assets/emojis/disappointment.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>pressHandler('8')}>
            <Image style={{height: 100,
              width: 100, alignSelf: 'center'}} source={require('../assets/emojis/friendly.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>pressHandler('9')}>
            <Image style={{height: 100,
              width: 100, alignSelf: 'center'}} source={require('../assets/emojis/sickness.png')}
            />
            </TouchableOpacity>

        </ScrollView>


  </View>
</Modal>
    </View>
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