import {Dimensions, View,Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React,{useContext} from 'react'
import { LineChart } from 'react-native-chart-kit'
import Bit from '../../assets/bitcoin.png'
import { COLORS } from '../../utils/COLORS'
import { Col, Row, Grid } from "react-native-easy-grid";
import themeContext from '../../utils/themeContext'
import BitcoinTab from './BitcoinTab'
const Graph = ()=>{
    const theme = useContext(themeContext) 
    return(
        <View>
            <LineChart
  data={{
    labels: ['0hr', '6hr', '12hr','18hr', '24hr'],
    datasets: [
      {
        data: [
          2.4,
          2.3,
          2.2,
          2.1,
          2.0,
        ],
      },
    ],
  }}
  width={Dimensions.get('window').width*0.9} // from react-native
  height={220}
  yAxisSuffix={'k'}
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
<View style={{flexDirection:'row', marginVertical:10}}>
    <Text style={{fontSize:18, fontWeight:'bold', color:theme.TEXT_COLOR, marginLeft:10}}>Total Paid: </Text>
    <Text style={{fontSize:18, fontWeight:'bold', color:theme.TEXT_COLOR, marginLeft:10}}>0.62960838 BTC</Text>
</View>
<BitcoinTab />
        </View>
    )
}
export default Graph
const styles = StyleSheet.create({
    
})