import { View, Text, TouchableOpacity,StyleSheet,Dimensions,Image } from 'react-native'
import React,{useContext} from 'react'
import { BarChart } from 'react-native-chart-kit'
import { COLORS } from '../../utils/COLORS'
import themeContext from '../../utils/themeContext'
import Bit from '../../assets/bitcoin.png'

const MinersGraph = () => {
  const theme = useContext(themeContext)
  return (
    <View style={{alignItems:'center'}}>
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
      <BarChart
  data={{
    labels: [
      'O:'+ '3825.89',
      'H:'+ '3825.89',
      'L:'+ '3855.89',
      'C:'+ '3855.89',
    ],
    datasets: [
      {
        data: [24, 2.3, 2.2, 2.4, 2.5, 2.6],
      },
    ],
  }}
  width={Dimensions.get('window').width*0.9}
  height={Dimensions.get('window').height/3}
  // yAxisLabel={'K'}
  yAxisSuffix={'K'}
  chartConfig={{
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#efefef',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
    style: {
      borderRadius: 10  ,
    },
  }}
  style={{
    marginVertical: 8,
    borderRadius: 16,
  }}
/>
<View style={{ width:Dimensions.get('window').width*0.9, borderBottomColor:theme.PRIAMARY_COLOR,borderBottomWidth:1, paddingBottom:10}}>
  <View style={[styles.rate,{borderBottomColor:theme.PRIAMARY_COLOR,}]}>
    <Text style={[styles.dollarRate,{color:theme.TEXT_COLOR,}]}>$342.25</Text>
    <Text style={styles.margin}>-21.021(17.01%)</Text>
  </View>
  <View style={[styles.rate1]}>
    <View>
    <Text style={[styles.textRate,{color:theme.PRIAMARY_COLOR,}]}>Market Cap:</Text>
    <Text style={styles.margin1}>44.98</Text>
    </View>
    <View style={{marginRight:Dimensions.get('window').width*0.25,}}>
    <Text style={[styles.textRate,{color:theme.PRIAMARY_COLOR,}]}>High 24 Hr:</Text>
    <Text style={styles.margin1}>$4444.98</Text>
    </View>
  </View>
  <View style={[styles.rate1]}>
    <View>
    <Text style={[styles.textRate,{color:theme.PRIAMARY_COLOR,}]}>24 Hr Volumee:</Text>
    <Text style={styles.margin1}>$1244.98</Text>
    </View>
    <View style={{marginRight:Dimensions.get('window').width*0.25,}}>
    <Text style={[styles.textRate,{color:theme.PRIAMARY_COLOR,}]}>Low 24 Hr:</Text>
    <Text style={styles.margin2}>$4444.98</Text>
    </View>
  </View>
  <View style={[styles.rate1]}>
    <View>
    <Text style={[styles.textRate,{color:theme.PRIAMARY_COLOR,}]}>Mined Coins:</Text>
    <Text style={styles.margin1}>$1244.98</Text>
    </View>
    <View style={{marginRight:Dimensions.get('window').width*0.25,}}>
    <Text style={[styles.textRate,{color:theme.PRIAMARY_COLOR,}]}>Open 24 Hr:</Text>
    <Text style={styles.margin1}>$4444.98</Text>
    </View>
  </View>
  
</View>
<View style={{width:Dimensions.get('window').width*0.9}}>
  <Text style={{marginTop:10,fontWeight:'bold',color:theme.TEXT_COLOR}}>
    News
    </Text>
    <Text style={styles.newsRate}>Lorem Ipsum in SafeAreaProviderCompat (at BottomTabView.tsx:92)</Text>
    </View>
    </View>
  )
}

export default MinersGraph
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
  rate:{
    flexDirection:'row', 
  alignItems:'center',
   borderBottomWidth:1,
   paddingVertical:20
},
  rate1:{
    flexDirection:'row', 
  alignItems:'center',
  //  borderBottomWidth:1,
   paddingVertical:10,
   justifyContent:'space-between'
},
dollarRate:{ 
  fontSize:20,
  fontWeight:'bold'
},
textRate:{ 
  fontSize:15,
  fontWeight:'bold',
  paddingBottom:4
},
newsRate:{ 
  fontSize:12,
  // fontWeight:'bold',
  // paddingBottom:4
},
margin:{
  color:'#65fe08',
fontWeight:'bold',
marginLeft:60, 
fontSize:14
},
margin1:{
  color:COLORS.GREEN_COLOR,
fontWeight:'bold',
// marginLeft:60, 
fontSize:14
},
margin2:{
  color:'red',
fontWeight:'bold',
// marginLeft:60, 
fontSize:14
},
})