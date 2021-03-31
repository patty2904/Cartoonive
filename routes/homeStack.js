import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Start from "../screens/start";
import CustomCharacters from "../screens/customiseCharacter";
import Home from "../screens/home";
import React from "react";
import Movies from "../screens/movies";
import Series from "../screens/series";
import LibraryHome from "../screens/libraryHome";
import MovieLibrary from "../screens/movieLibrary";
import SeriesLibrary from "../screens/seriesLibrary";
import EmptyMovieLibrary from "../screens/emptyMovieLibrary";
import EmptySeriesLibrary from "../screens/emptySeriesLibrary.js";

//header is to be at 0 as we are designing it in the other functions
//by overriding values

//establish order of navigation

const screens = {
  Start: {
    screen: Start,
    navigationOptions: {
      headerStyle: {
        height: 0,
      },
    },
  },
  CustomCharacters: {
    screen: CustomCharacters,
    navigationOptions: {
      headerLeft: () => null,
      headerStyle: {
        height: 0,
      },
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerLeft: () => null,
      headerStyle: {
        height: 0,
      },
    },
  },
  Movies: {
    screen: Movies,
    navigationOptions: {
      headerLeft: () => null,
      headerStyle: {
        height: 0,
      },
    },
  },
  Series: {
    screen: Series,
    navigationOptions: {
      headerLeft: () => null,
      headerStyle: {
        height: 0,
      },
    },
  },
  LibraryHome: {
    screen: LibraryHome,
    navigationOptions: {
      headerLeft: () => null,
      headerStyle: {
        height: 0,
      },
    },
  },
  MovieLibrary: {
    screen: MovieLibrary,
    navigationOptions: {
      headerLeft: () => null,
      headerStyle: {
        height: 0,
      },
    },
  },
  SeriesLibrary: {
    screen: SeriesLibrary,
    navigationOptions: {
      headerLeft: () => null,
      headerStyle: {
        height: 0,
      },
    },
  },
  EmptyMovieLibrary: {
    screen: EmptyMovieLibrary,
    navigationOptions: {
      headerLeft: () => null,
      headerStyle: {
        height: 0,
      },
    },
  },
  EmptySeriesLibrary: {
    screen: EmptySeriesLibrary,
    navigationOptions: {
      headerLeft: () => null,
      headerStyle: {
        height: 0,
      },
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#B6A3B0" },
  },
});

export default createAppContainer(HomeStack);
