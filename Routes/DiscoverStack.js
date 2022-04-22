import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from '../Screen/Discover';
const Stack = createStackNavigator();
const DiscoverStack = ()=>{
    return(
      <Stack.Navigator
      // initialRouteName='Profile'   
      >
    <Stack.Screen name="DiscoverStack" component={Discover} options={{
      headerShown:false
      }} />
      </Stack.Navigator>
)
}
export default DiscoverStack