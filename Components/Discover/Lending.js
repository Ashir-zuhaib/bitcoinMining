import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React,{useContext} from 'react'
import themeContext from '../../utils/themeContext'
import { COLORS } from '../../utils/COLORS'
import StakingCard from './StakingCard'
const Lending = () => {
  const theme = useContext(themeContext)
  return (
    <View style={{alignItems:'center', }}>
      <View style={styles.title}>
      <Text style={[styles.trendText,{color:COLORS.GREEN_COLOR}]}>Lending/Borrowing</Text>
      <Text style={{color:theme.PRIAMARY_COLOR}}>See All</Text>
      </View>
      <TouchableOpacity>
    <StakingCard title='Osmosis'/>
    </TouchableOpacity>
    <View style={[styles.border,{ borderColor:theme.PRIAMARY_COLOR}]}></View>
    <TouchableOpacity >
    <StakingCard title='Kava'/>
    </TouchableOpacity>
    <View style={[styles.border,{ borderColor:theme.PRIAMARY_COLOR}]}></View>
    <TouchableOpacity>
    <StakingCard title='Cosmos'/>
    </TouchableOpacity>
    </View>
  )
}

export default Lending
const styles = StyleSheet.create({
  title:{
    width:Dimensions.get('window').width*0.9,
    marginVertical:5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  trendText:{
    fontSize:16,
    fontWeight:'bold'
  },
  border:{
    borderBottomWidth:0.3,
     width:'90%',
  }
})