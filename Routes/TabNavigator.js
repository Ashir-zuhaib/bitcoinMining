import React,{useContext} from 'react'
import {TouchableOpacity,View} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MatIcon from 'react-native-vector-icons/MaterialIcons'
import AntIcon from 'react-native-vector-icons/Foundation'
import Entypo from 'react-native-vector-icons/Entypo'
import { COLORS } from '../utils/COLORS';
import themeContext from '../utils/themeContext';
import OtherSetting from '../Screen/Setting';
import DiscoverStack from './DiscoverStack';
import EMCDstack from './EMCDstack';
import WalletStack from './WalletStack';
const Tab = createBottomTabNavigator();

const MyTabs= ()=> {
  const theme = useContext(themeContext)
  return (
    <Tab.Navigator
tabBarPosition='bottom'
    screenOptions={{
      headerTitleAlign:"center",
      // headerShown:false,
      tabBarActiveTintColor:COLORS.GREEN_COLOR,
      inactiveTintColor: 'grey',

      tabBarStyle:{
        height:50,
        backgroundColor:theme.TAB_COLOR,


        
      }
    }}
    >
      <Tab.Screen name="Wallet" component={WalletStack} options={{
        headerShown:false,
        tabBarIcon:({focused, color})=>(
          <View>
            <Entypo name='wallet' size={20} color={color}/>
          </View>
        )
      }} />
      <Tab.Screen name="Discover" component={DiscoverStack} options={{
       tabBarIcon:({focused, color})=>(
         <View>
           <Entypo name='compass' size={20} color={color} />
         </View>
       )
     }} 
     />
      
      
      <Tab.Screen name="Miners" component={EMCDstack} options={{
        tabBarIcon:({focused, color})=>(
          <View>
          <AntIcon name='graph-bar' size={30} color={color}/>
          </View>
        )}}
       /> 
      <Tab.Screen name="Setting" component={SettingStack} options={{
        tabBarIcon:({focused, color})=>(
          <View>
            <MatIcon name='settings' size={20} color={color} />
          </View>
        )
        
      }} 
      />
    </Tab.Navigator>
  );
} 
export default MyTabs
const Stack = createStackNavigator();
const SettingStack = ()=>{
    return(
      <Stack.Navigator
      // initialRouteName='Profile'   
      >
    <Stack.Screen name="SettingStack" component={OtherSetting} options={{
      headerShown:false
      }} />
      </Stack.Navigator>
)
}