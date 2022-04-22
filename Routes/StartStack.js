import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StartScreen from '../Screen/StartScreen';
import MyTabs from './TabNavigator';
import Legal from '../Screen/Legal';
const Stack = createStackNavigator();
const StartStack = ()=>{
    return(
      <Stack.Navigator
      // initialRouteName='Profile'   
      >
    <Stack.Screen name="Start" component={StartScreen} options={{
      headerShown:false
      }} />
    <Stack.Screen name="Legal" component={Legal} options={{
      headerShown:false
      }} />
    <Stack.Screen name="Tab" component={MyTabs} options={{
      headerShown:false
      }} />
      </Stack.Navigator>
)
}
export default StartStack