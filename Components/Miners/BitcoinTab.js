import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Worker from './Worker';
import Reward from './Reward'
import { COLORS } from '../../utils/COLORS';
const BitcoinTab = () => {
  const Tab = createMaterialTopTabNavigator();
    const CustomTabBarButton = ({children,onPress})=>(
      <TouchableOpacity style={{
        // top:-20,
        justifyContent:'center',
        alignItems:'center',
      }}
      onPress={onPress}>
        <View style={{width:60,height:30, borderRadius:5,backgroundColor:'green',justifyContent:'center',
        alignItems:'center'}}>
         <Text>{children}</Text>
        </View>
               </TouchableOpacity>
    );
  return (
    <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',}}>
       <Tab.Navigator tabBarPosition='top'
    screenOptions={{
    tabBarActiveBackgroundColor:COLORS.GREEN_COLOR,
      headerShown:false,
      tabBarActiveTintColor:'green',
      inactiveTintColor: 'grey',
      tabBarStyle:{
        height:50,
        width:'100%',
        alignSelf:'flex-end',
      }
    }}>
        <Tab.Screen name="worker" component={Worker} 
        // options={{
        //   title:'',
        //   tabBarIcon:(props)=>(
        //     <View style= {{backgroundColor:'green', width:80}}>
        //       <Text style={{color:'white'}}>
        //       Worker
        //         </Text></View>
        //     // <CustomTabBarButton {...props}/>
        //   )
        // }}
         />
        <Tab.Screen name="Reward" component={Reward} 
            // <CustomTabBarButton {...props}/>
        />
      </Tab.Navigator>
      </View>
    </View>
  )
}

export default BitcoinTab
// import { Animated, View, TouchableOpacity } from 'react-native';

//  function MyTabBar({ state, descriptors, navigation, position }) {
//   return (
//     <View style={{ flexDirection: 'row' }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             // The `merge: true` option makes sure that the params inside the tab screen are preserved
//             navigation.navigate({ name: route.name, merge: true });
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         const inputRange = state.routes.map((_, i) => i);
//         const opacity = position.interpolate({
//           inputRange,
//           outputRange: inputRange.map(i => (i === index ? 1 : 0)),
//         });

//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityState={isFocused ? { selected: true } : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{ flex: 1 }}
//           >
//             <Animated.Text style={{ opacity }}>
//               {label}
//             </Animated.Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

// // ...

