import React,{useContext} from 'react';
import { Text, View, StyleSheet, Image,Dimensions,ScrollView,TouchableOpacity } from 'react-native';
import themeContext from '../../utils/themeContext';
import Diss from '../../assets/dis1.jpg'
import { COLORS } from '../../utils/COLORS';
export default function StakingCard(props) {

  // const [value,setValue]=React.useState(false)
  const theme = useContext(themeContext)
  return (

    <View style={styles.container}>
    <View style={{flexDirection:"row"}}>
    <Image source={Diss} style={styles.image}/>
    <View style={styles.content}>
    <Text style={{color:theme.TEXT_COLOR, fontWeight:'bold',fontSize:18}}>{props.title}</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{color:theme.PRIAMARY_COLOR,fontSize:12}}>APR:</Text>
    <Text style={{color:COLORS.GREEN_COLOR,fontSize:12}}>65.36%</Text>
    </View>
    </View>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        width:Dimensions.get("window").width*0.90,
        height:Dimensions.get("window").height/10,
        flexDirection:"row",
        alignItems:'center'
      },
      image:{
        width:40,
        height:40,
        borderRadius:20,
        // borderWidth:1,
        // borderColor:"black"
      },
      content:{
          flexDirection:"column",
      paddingHorizontal:10,
    //    width:'75%'
    },
})