import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import series from '../screens/series';

const screens = {
    Home: {
        screen: Home
    },
    Series: {
        screen: Series
    }
    
    }


const secondStackB = createStackNavigator(screens);
export default createAppContainer(secondStackB);