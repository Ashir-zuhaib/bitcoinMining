import {Dimensions, View,Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React,{useContext} from 'react'
import { LineChart } from 'react-native-chart-kit'
import Bit from '../../assets/bitcoin.png'
import { COLORS } from '../../utils/COLORS'
import themeContext from '../../utils/themeContext'
const Tokens = () => {
const theme = useContext(themeContext)
  return (
    <View style={{alignItems:'center',}}>
        <View style={styles.title}>
      <Text style={[styles.trendText,{color:theme.TEXT_COLOR, }]}>
           <Image source={Bit} style={{height:40, width:40, marginRight:10}} /> Bitcoin
           </Text>
           <TouchableOpacity style={styles.btn}>
               <Text style={{fontWeight:'800', color:COLORS.GREEN_COLOR}}>
                   1.22 BTC
               </Text>
               </TouchableOpacity>
               </View>
               <LineChart
  data={{
    labels: ['Mon', 'Tue', 'Wed','Thur', 'Fri'],
    datasets: [
      {
        data: [
          10,
          50,
          30,
          25,
          100,
        ],
      },
    ],
  }}
  width={Dimensions.get('window').width*0.9} // from react-native
  height={220}
//   yAxisLabel={'Rs'}
  chartConfig={{
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#efefef',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 255) => `rgba(0, 128, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }}
  bezier
  style={{
    marginVertical: 8,
    borderRadius: 16,
  }}
/>
    </View>
  )
}

export default Tokens
const styles = StyleSheet.create({
    title:{
        width:Dimensions.get('window').width*0.9,
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // backgroundColor:'white'
      },
      trendText:{
        fontSize:22,
        fontWeight:'bold',
        height:60,
        // paddingHorizontal:10
      },
      btn:{
        borderColor:COLORS.GREEN_COLOR,
         borderWidth:2,
          justifyContent:'center',
           alignItems:'center',
            width:100,
             height:30,
       borderRadius:5
    }
})