import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Image,Dimensions } from 'react-native';
import Logo from '../assets/logoIcon.jpeg'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/core"
import { COLORS } from '../utils/COLORS';
export default function StartScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex:1, alignItems:'center', backgroundColor:COLORS.WHITE, justifyContent:'space-between'}}>
        <Image source={Logo} style={styles.logo}/>
        <View>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Legal')}>
          <Text style={styles.text1}>Create New Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={styles.button1}>
          <Text style={styles.text}>I've already a wallet</Text>
      </TouchableOpacity>
      </View>
    </View>
    )}
    const styles = StyleSheet.create({
        logo:{
            width:'80%',
            marginTop:20,
            height:'35%',
        },
        text: {
          fontSize: 20,
          color:COLORS.SECONDARY_COLOR
        },
        text1: {
          fontSize: 20,
          color:COLORS.WHITE
        },
        button:{
            width:Dimensions.get('window').width*0.9,
            height:56,
            borderRadius:20,
            marginHorizontal:78,
            justifyContent:'center',
            alignItems:'center',
            marginTop:26,
            backgroundColor:COLORS.GREEN_COLOR,
        },
        button1:{
            width:Dimensions.get('window').width*0.9,
            height:56,
            borderRadius:20,
            marginHorizontal:78,
            marginTop:16,
            // borderWidth:2,
            justifyContent:'center',
            alignItems:'center',
            // borderColor:COLORS.GREEN_COLOR,
            // backgroundColor:COLORS.SECONDARY_COLOR
        }
      })