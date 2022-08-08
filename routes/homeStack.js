import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Mesta from '../screens/mesta';

const Stack = createStackNavigator();

export default function Navigtor() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Mesta" component={Mesta} />
    </Stack.Navigator>
    
  );
}


