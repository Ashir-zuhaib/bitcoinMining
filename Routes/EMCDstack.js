import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from '../Screen/Discover';
import EMCD from '../Screen/EMCD';
import Miners from '../Components/Miners/Miners';
const Stack = createStackNavigator();
const MinersStack = ()=>{
    return(
      <Stack.Navigator>
    <Stack.Screen name="MinerStack" component={Miners} options={{
      headerShown:false
      }} />
      </Stack.Navigator>
)
}
export default MinersStack