import { View, Text, TouchableOpacity,StyleSheet,Dimensions,Image } from 'react-native'
import React,{useContext} from 'react'
import { BarChart } from 'react-native-chart-kit'
import { COLORS } from '../../utils/COLORS'
import themeContext from '../../utils/themeContext'
import Bit from '../../assets/bitcoin.png'
import Graph from './MinerGraph'
const Miners = () => {
    const theme = useContext(themeContext)
  return (
    <View>
      <View style={styles.title}>
              <Text style={[styles.trendText,{color:theme.TEXT_COLOR}]}> <Image source={Bit}  /> Bitcoin</Text>
      <View style={{flex:0.4,flexDirection:'row',justifyContent:'space-between',}}>
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center',width:30,height:25, borderRadius:40}}>
      <Text style={{color:theme.PRIAMARY_COLOR}}>1H</Text>
      </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:COLORS.GREEN_COLOR,alignItems:'center',justifyContent:'center',width:30,height:25, borderRadius:40}}>
      <Text style={{color:COLORS.WHITE}}>1D</Text>
      </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center',width:30,height:25, borderRadius:40}}>
      <Text style={{color:theme.PRIAMARY_COLOR}}>1Y</Text>
      </TouchableOpacity>
      </View>
      </View>
      <Graph />
    </View>
  )
}

export default Miners
const styles = StyleSheet.create({
    title:{
      width:Dimensions.get('window').width*0.9,
      marginVertical:10,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    trendText:{
      fontSize:28,
      fontWeight:'bold'
    },
})