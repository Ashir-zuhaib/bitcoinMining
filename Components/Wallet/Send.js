import { View, Text,StyleSheet,Dimensions,Image,TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import themeContext from '../../utils/themeContext'
import { COLORS } from '../../utils/COLORS'
import Bit from '../../assets/bitcoin.png'
import { useNavigation } from "@react-navigation/core"
const Send = () => {
    const theme = useContext(themeContext)
    const navigation = useNavigation();
  return (
    <View >
      <View style={[styles.header,{backgroundColor:theme.TAB_COLOR}]}>
        <TouchableOpacity onPress={navigation.goBack}>
            <Ionicons name='arrow-back' size={30} color={COLORS.GREEN_COLOR}/>
            </TouchableOpacity>
            <Text style={[styles.headerText,{color:theme.PRIAMARY_COLOR}]}>Send</Text>
            <Text></Text>
        </View>
        <View style={{alignItems:'center',}}>
        <View style={[styles.title,{borderBottomWidth:1, borderBottomColor:'grey'}]}>
          <View style={styles.logo}>
            <Foundation name='bitcoin-circle' size={40} color={'#F6BE00'}/>
      <Text style={[styles.trendText,{color:theme.TEXT_COLOR, }]}>
            Bitcoin
           </Text>
          </View>
           <TouchableOpacity style={styles.number}>
               <Text style={{fontWeight:'800',fontSize:18, color:theme.PRIAMARY_COLOR}}>
                   1.22 BTC
               </Text>
               </TouchableOpacity>
               </View>
               
        <View style={styles.title}>
          <View style={styles.logo}>
           <Entypo name='wallet' size={30}color={COLORS.GREEN_COLOR}/> 
      <Text style={[styles.trendText,{color:theme.TEXT_COLOR, }]}>
      Wallet
           </Text>
           </View>
               <Text style={{fontWeight:'800',fontSize:18, color:theme.PRIAMARY_COLOR}}>
                   1009.00
               </Text>
               </View>
        </View>

     </View>
  )
}

export default Send
const styles = StyleSheet.create({
    container:{
      backgroundColor:'#fff',
       width:Dimensions.get('window').width,
        alignSelf:'center'
      },
      logo:{
        flexDirection:'row',
       alignItems:'center'
    },
    header:{
      flexDirection:'row',
      justifyContent:'space-between',
       alignItems:'center',
       paddingHorizontal:10,
       backgroundColor:COLORS.WHITE,
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
     fontWeight:'bold',
      fontSize:22,
       
  },
  title:{
    width:Dimensions.get('window').width*0.9,
    paddingVertical:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:64
  },
  trendText:{
    fontSize:22,
    fontWeight:'bold',
    marginLeft:5
  },
  number:{
        justifyContent:'center',
         alignItems:'center',
   borderRadius:5
}
})