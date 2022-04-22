import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Tokens from './Tokens';
import NFTs from './NFTs';
import { COLORS } from '../../utils/COLORS';
const TopTab = () => {
    const Tab = createMaterialTopTabNavigator();
  return (
      <Tab.Navigator 
    screenOptions={{
    tabBarActiveBackgroundColor:COLORS.GREEN_COLOR,
      headerShown:false,
      tabBarActiveTintColor:'green',
      tabBarLabelStyle:{
          fontSize:16,
        fontWeight:'bold'
      },
      tabBarStyle:{
        height:50,
        width:'100%',        
        // backgroundColor:'#D3D3D3'
      }
    }}
    >
        <Tab.Screen name='Token' component={Tokens} />
        <Tab.Screen name='NFTs' component={NFTs} />
    </Tab.Navigator>
    
  )
}

export default TopTab