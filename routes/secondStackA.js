import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Movies from '../screens/movies';

const screens = {
    Home: {
        screen: Home
    },
    Movies: {
        screen: Movies
    }

    }


}

const secondStackA = createStackNavigator(screens);
export default createAppContainer(secondStackA);