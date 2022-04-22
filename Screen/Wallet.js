import { View, Text,Dimensions,StyleSheet } from 'react-native'
import React,{useContext} from 'react'
import Header from '../Components/Wallet/Header'
import TopTab from '../Components/Wallet/TopTab'
import themeContext from '../utils/themeContext'

const Wallet = () => {
  const theme = useContext(themeContext)
  return (
    <View style={{flex:1, backgroundColor:theme.TAB_COLOR}}>
      <View style={styles.header}>
      <Header />
      </View>
      <TopTab />
    </View>
  )
}

export default Wallet
const styles=StyleSheet.create({
  header:{
    // backgroundColor:'#fff',
     height:Dimensions.get('window').height/4.3,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  }
})
