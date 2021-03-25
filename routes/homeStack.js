import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Start from '../screens/start';
import CustomCharacters from '../screens/customiseCharacter';
import Home from '../screens/home';
import Header from '../style/header';
import React from 'react';
import Movies from '../screens/movies';
import Series from '../screens/series'
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
           headerLeft: () => (null),
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
          null
        ),
        headerStyle: {
            height: 0
        }
    
        }
   },
   Movies: {
       screen: Movies,
       navigationOptions: {
        headerTitle: () => <Header />,
        headerLeft: () => (
          null
        ),
        headerStyle: {
            height: 0
        }
    
        }
       
   },
   Series: {
       screen: Series,
       navigationOptions: {
        headerTitle: () => <Header />,
        headerLeft: () => (
          null
        ),
        headerStyle: {
            height: 0
        }
    
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