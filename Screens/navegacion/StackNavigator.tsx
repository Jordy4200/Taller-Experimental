import { createStackNavigator } from '@react-navigation/stack';
import { PrimeraScreen } from '../PrimeraScreen';
import { SegundaScreen } from '../SegundaScreen';
import { TerceraScreen } from '../TerceraScreen';



const Stack = createStackNavigator();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PrimeraScreen" options={{headerShown:false}} component={PrimeraScreen} />
      <Stack.Screen name="SegundaScreen" options={{headerShown:false}} component={SegundaScreen} />
      <Stack.Screen name="TerceraScreen" options={{headerShown:false}} component={TerceraScreen} />
    </Stack.Navigator>
  );
}