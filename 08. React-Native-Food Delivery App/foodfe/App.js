import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';



export default function App() {
  const TabStack = createBottomTabNavigator();

  const tabBarOptions = {
    showLabel:true,
    style:{
      backgroundColor:'#1e1e1e',
      borderTopColor:'#1e1e1e',
      paddingBottom:0,
      shadowColor:'#fff',
      shadowOffset:{
        width:0,
        height:2
      },
      shadowOpacity:0.25,
      shadowRadius:3.84,
      elevation:5,
    }
  };

  const screenOptions=({route})=>({
    tabBarIcon:({focused})=>{
      let icon="";
      const color = focused ? "#fff" :"#828282"; //ef4f4f
      const size = 24;
      switch(route.name){
        case "Home":
          icon="home";
          break;
        case "SendRequest":
          icon="send";
          break;
        default:
          icon="dashboard";
      }
      return <AntDesign name={icon} size={size} color={color}/>;
    },
    tabBarLabel:''
  })

  return (
    <NavigationContainer>
      <TabStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
        <TabStack.Screen name="Home" component={HomeScreen} />
      </TabStack.Navigator>
    </NavigationContainer>
  );
}
