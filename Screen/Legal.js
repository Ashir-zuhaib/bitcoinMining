import { View, Text, TouchableOpacity , StyleSheet,Dimensions} from 'react-native'
import React from 'react'
import { COLORS } from '../utils/COLORS'
import Arrow from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from "@react-navigation/core"
const Legal = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <View>
        <View style={styles.legal}>
      <Text style={{color:COLORS.SECONDARY_COLOR, fontSize:40, fontWeight:'bold'}}>Le</Text>
      <Text style={{color:COLORS.GREEN_COLOR, fontSize:40, fontWeight:'bold'}}>gal</Text>
        </View>
        <View>
            <Text style={{fontSize:16}}>Please Review our terms of services and privacy Policy</Text>
        </View>
        <TouchableOpacity style={styles.setting}>
        <Text style={{color:COLORS.PRIAMARY_COLOR, fontWeight:'bold'}}>
          Privacy Policy
        </Text>
        <Arrow name='keyboard-arrow-right' size={20} color={COLORS.PRIAMARY_COLOR}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.setting1}>
        <Text style={{color:COLORS.PRIAMARY_COLOR, fontWeight:'bold'}}>
            Terms of Services
        </Text>
        <Arrow name='keyboard-arrow-right' size={20} color={COLORS.PRIAMARY_COLOR}/>
      </TouchableOpacity>
      </View>
      <View >
          <Text style={{fontSize:16}}>I've read and acepeted terms of services and privacy Policy
          </Text>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Tab')}>
          <Text style={styles.text1}>Create New Wallet</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Legal
const styles = StyleSheet.create({
    setting:{
        width:Dimensions.get("window").width*0.90,
        height:Dimensions.get("window").height/15,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        // ,padding:10,
        borderBottomWidth:0.3,
        borderBottomColor:"grey",
        marginTop:2
    },
    setting1:{
        width:Dimensions.get("window").width*0.90,
        height:Dimensions.get("window").height/15,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        // ,padding:10,
        // borderBottomWidth:1,
        borderBottomColor:"grey",
        marginTop:2
    },
    container:{
        flex:1,
         width:Dimensions.get('window').width*0.9,
     marginHorizontal:20,
     justifyContent:'space-between'
    },
    legal:{flexDirection:'row',
    marginVertical:10,
},
button:{
    width:Dimensions.get('window').width*0.9,
    height:56,
    borderRadius:10,
    // marginHorizontal:78,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:20,
    backgroundColor:COLORS.GREEN_COLOR,
},
})