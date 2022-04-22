import { View, Text } from 'react-native'
import React from 'react'

const Stack = createStackNavigator();
import { createStackNavigator } from '@react-navigation/stack';
import Wallet from '../Screen/Wallet';
import Send from '../Components/Wallet/Send';
import Receive from '../Components/Wallet/Receive';
import BuyBTC from '../Components/Wallet/BuyBTC';

const WalletStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="wallet" component={Wallet} options={{
      headerShown:false
      }} />
    <Stack.Screen name="send" component={Send} options={{
      headerShown:false
      }} />
    <Stack.Screen name="receive" component={Receive} options={{
      headerShown:false
      }} />
    <Stack.Screen name="BuyBTC" component={BuyBTC} options={{
      headerShown:false
      }} />
      </Stack.Navigator>
  )
}

export default WalletStack