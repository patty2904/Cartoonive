import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import CustomCharacters from '../screens/customiseCharacter';

const screens = {
   Home: {
       screen: Home
   },
   CustomCharacters: {
       screen: CustomCharacters
   }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);