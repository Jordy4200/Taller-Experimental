import { PrimeraScreen } from "../PrimeraScreen"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { TerceraScreen } from "../TerceraScreen";
import { SegundaScreen } from "../SegundaScreen";


const Tab = createBottomTabNavigator();


//Ingeniera no me deja poner iconos no tengo idea de porque :'
function MyTabs(){
  return (
    <Tab.Navigator
    initialRouteName="Shop"
    screenOptions={{
        tabBarActiveTintColor:'red',
    
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
