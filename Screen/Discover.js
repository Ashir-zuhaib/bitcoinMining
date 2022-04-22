import { View, Text,ScrollView } from 'react-native'
import React,{useContext} from 'react'
import StakingPart from '../Components/Discover/Staking'
import DefiToken from '../Components/Discover/DefiToken'
import Lending from '../Components/Discover/Lending'
import themeContext from '../utils/themeContext'

const Discover = () => {
  const theme = useContext(themeContext)
  return (
    <ScrollView  contentContainerStyle={{alignItems:"center"}}>
      <StakingPart />
      <DefiToken />
      <Lending />
    </ScrollView>
  )
}

export default Discover