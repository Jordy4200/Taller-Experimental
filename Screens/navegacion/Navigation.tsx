import { PrimeraScreen } from "../PrimeraScreen"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { TerceraScreen } from "../TerceraScreen";
import { SegundaScreen } from "../SegundaScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();


//Ingeniera no me deja poner iconos no tengo idea de porque :'
function MyTabs(){
  return (
    <Tab.Navigator
    initialRouteName="HomePage"
    screenOptions={{
        tabBarActiveTintColor:'red',
    
    } }
    
    >
        
      <Tab.Screen 
      name='Home' 
      component={PrimeraScreen}
        options={{
       headerShown:false,
       tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
      ),
      
    }}



      />
      <Tab.Screen name='Shop' 
      component={SegundaScreen}
      options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="shopping" color={color} size={size} />
        ),
     }}
      />
      <Tab.Screen name='My Account' 
      component={TerceraScreen}
      options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
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
