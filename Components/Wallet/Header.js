import { View, Text,TouchableOpacity,Dimensions, StyleSheet } from 'react-native'
import React,{useContext} from 'react'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../../utils/COLORS'
import themeContext from '../../utils/themeContext'
import { useNavigation } from "@react-navigation/core"
const Header = () => {
  const navigation = useNavigation();
    const theme= useContext(themeContext)
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Feather name='bell' size={25} color={COLORS.GREEN_COLOR}/>
            <Text style={[styles.headerText,{color:theme.PRIAMARY_COLOR}]}>$0.00</Text>
            <Ionicons name='filter' size={25} color={COLORS.GREEN_COLOR}/>
        </View>
        <View style={styles.btns}>
        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>navigation.navigate('send')}>
          <View style={styles.content}>
            <Material name='arrow-up-thin' size={20} color={'#fff'} style={{marginLeft:3}}/>
            <View style={styles.btnIcon}><FontAwesome name='dollar' size={15} color={'green'}/></View>
          </View>
            <Text style={{color:COLORS.GREEN_COLOR}}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center' }} onPress={()=>navigation.navigate('receive')}>
          <View style={styles.content}>
            <Material name='arrow-down-thin' size={20} color={'#fff'} style={{marginLeft:3}}/>
            <View style={styles.btnIcon}><FontAwesome name='dollar' size={15} color={'green'}/></View>
          </View>
            <Text style={{color:COLORS.GREEN_COLOR}}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>navigation.navigate('BuyBTC')}>
          <View style={styles.content5}>
            <FontAwesome5 name='money-bill-wave' size={20} color={COLORS.WHITE} />
          </View>
            <Text style={{color:COLORS.GREEN_COLOR}}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}}>
          <View style={styles.content5}>
            <FontAwesome name='bitcoin' size={30} color={'#fff'} />
            {/* <View style={styles.btnIcon}><FontAwesome name='dollar' size={15} color={'green'}/></View> */}
          </View>
            <Text style={{color:COLORS.GREEN_COLOR}}>TRC 20</Text>
        </TouchableOpacity>
       
        </View>
    </View>
  )
}

export default Header
const styles = StyleSheet.create({
  container:{
    // backgroundColor:'#fff',
     width:Dimensions.get('window').width*0.9,
      alignSelf:'center'
    },
  header:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
     alignItems:'center',
 },
 headerText:{
   fontWeight:'bold',
    fontSize:28,
     
},
btns:{
  flexDirection:'row',
   justifyContent:'space-around',
    marginTop:20
},
content:{
  backgroundColor:'green',
   width:54,
    height:54,
     borderRadius:28,
     alignItems:'center',
      flexDirection:'row',
      marginBottom:10
},
content5:{
  backgroundColor:'green',
   width:54,
    height:54,
     borderRadius:28,
     alignItems:'center',
     justifyContent:'center',
     marginBottom:10
      // flexDirection:'row'
},
btnIcon:{
  backgroundColor:'#fff',
   height:20,
   width:20,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'

}
})