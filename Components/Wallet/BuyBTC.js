import { View, Text,TouchableOpacity,Dimensions, StyleSheet, TextInput } from 'react-native'
import React,{useContext} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

import { useNavigation } from "@react-navigation/core"
import themeContext from '../../utils/themeContext'
import { COLORS } from '../../utils/COLORS'
const BuyBTC = ()=>{
    const theme = useContext(themeContext)
    const navigation = useNavigation();
    return(
        <View>
              <View style={[styles.header,{backgroundColor:theme.TAB_COLOR}]}>
        <TouchableOpacity onPress={navigation.goBack}>
            <Ionicons name='arrow-back' size={30} color={COLORS.GREEN_COLOR}/>
            </TouchableOpacity>
            <Text style={[styles.headerText,{color:theme.PRIAMARY_COLOR}]}>Buy BTC</Text>
            <Feather name='info' size={25} color={COLORS.GREEN_COLOR}/>
        </View>
        <View style={{alignItems:'center'}}>
            <TextInput 
            placeholder='Enter'
            keyboardType='numeric'
            style={{height:80,fontSize:38,fontWeight:'bold',color:theme.TEXT_COLOR}}
            />
            <Text></Text>
        </View>
        </View>
    )
}
export default BuyBTC
const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
         alignItems:'center',
         paddingHorizontal:10,
         height:Dimensions.get('window').height/14,
         shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
    },
    headerText:{
        // fontWeight:'bold',
         fontSize:24,
          
     }
})