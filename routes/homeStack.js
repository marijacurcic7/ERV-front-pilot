import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Mesta from '../screens/mesta';
import MestaPretraga from '../screens/mestaPretraga';
import MestaUnos from '../screens/mestaUnos';

const Stack = createStackNavigator();

export default function Navigtor() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Mesta" component={Mesta} />
      <Stack.Screen name="MestaPretraga" component={MestaPretraga} />
      <Stack.Screen name="MestaUnos" component={MestaUnos} />
    </Stack.Navigator>
    
  );
}


