import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Start from '../screens/start';
import CustomCharacters from '../screens/customiseCharacter';
import Home from '../screens/home';
import Header from '../style/header';
import React from 'react';
import {Image, TouchableOpacity } from 'react-native';



const screens = {
   Start: {
       screen: Start,
       navigationOptions: {
        headerTitle: () => <Header />,
        headerStyle: {
            height: 0
        }
    }
   },
   CustomCharacters: {
       screen: CustomCharacters,
       navigationOptions: {
           headerTitle: () => <Header />,
           headerStyle: {
            height: 0
        }
          
       }
   },
   Home: {
       screen: Home,
       navigationOptions: {
        headerTitle: () => <Header />,
        headerLeft: () => (
            <TouchableOpacity>
            <Image
        style={{ width: 50, height: 50, left: 10, top: -5 }}
        source={require('../assets/back_blue.png')}
       // onPress={() => { this.props.navigation.navigate("CustomCharacters") }}
      />
      </TouchableOpacity>
        ),
        }
   }
}


const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: '#B6A3B0'},      
        
    }
}
    );

export default createAppContainer(HomeStack);