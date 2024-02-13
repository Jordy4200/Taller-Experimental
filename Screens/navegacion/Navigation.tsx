import { PrimeraScreen } from "../PrimeraScreen"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { TerceraScreen } from "../TerceraScreen";
import { SegundaScreen } from "../SegundaScreen";
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs(){
  return (
    <Tab.Navigator
    initialRouteName="Shop"
    screenOptions={{
        tabBarActiveTintColor:'red'
    } }
    
    >
        
      <Tab.Screen name='Shop' 
      component={PrimeraScreen}
        options={{
       headerShown:false,
    }}

      />
      <Tab.Screen name='Nosotros' 
      component={SegundaScreen}
      options={{
        headerShown:false,
     }}
      />
      <Tab.Screen name='Contacto' 
      component={TerceraScreen}
      options={{
        headerShown:false,
     }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation(){
  return(
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}
