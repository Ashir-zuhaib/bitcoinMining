import { View, Text, TouchableOpacity, StyleSheet, Dimensions,  Switch, ScrollView } from 'react-native'
import React,{useState, useEffect, useContext} from 'react'
import { EventRegister } from 'react-native-event-listeners';
import Arrow from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SwitchToggle from "react-native-switch-toggle";
import themeContext from '../utils/themeContext';
import ensureNativeModuleAvailable from 'react-native-vector-icons/dist/lib/ensure-native-module-available';
const OtherSetting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const theme = useContext(themeContext)
  return (
    <ScrollView  contentContainerStyle={{alignItems:"center"}}>
      <TouchableOpacity style={styles.setting}>
        <View style={{flexDirection:'row'}}>
      <Ionicons  name='md-wallet-sharp' size={16}  color={theme.PRIAMARY_COLOR} />
        <Text style={[styles.text, {color:theme.PRIAMARY_COLOR}]}>
          Wallet
        </Text>
        </View>
        <Arrow  name='keyboard-arrow-right' size={20} color={theme.PRIAMARY_COLOR} />
      </TouchableOpacity>
      <View style={styles.setting}>
      <View style={{flexDirection:'row'}}>
      <Arrow  name='brightness-6' size={16}  color={theme.PRIAMARY_COLOR} />
        <Text style={[styles.text, {color:theme.PRIAMARY_COLOR}]}>
            Dark Theme
        </Text>
          </View>
        <Switch
                style={{height:10}}
                trackColor={{ false: "light", true: "#5663FF" }}
                ios_backgroundColor="#5663FF"
                onValueChange={(previousState) => {setIsEnabled(previousState);
                  EventRegister.emit("changeTheme", previousState)
                }}
                value={isEnabled}
              />
      </View>
      <TouchableOpacity style={[styles.setting1,]}>
      <View style={{flexDirection:'row'}}>
      <Arrow  name='security' size={16}  color={theme.PRIAMARY_COLOR} />
        <Text style={[styles.text, {color:theme.PRIAMARY_COLOR}]}>
            Security
        </Text>
        </View>
        <Arrow name='keyboard-arrow-right' size={20} color={theme.PRIAMARY_COLOR}/>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.setting1,]}>
      <View style={{flexDirection:'row'}}>
      <Ionicons  name='notifications' size={16}  color={theme.PRIAMARY_COLOR} />
        <Text style={[styles.text, {color:theme.PRIAMARY_COLOR}]}>
            Push Notifications
        </Text>
        </View>
        <Arrow name='keyboard-arrow-right' size={20} color={theme.PRIAMARY_COLOR}/>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.setting1,]}>
      <View style={{flexDirection:'row'}}>
      <Arrow  name='filter' size={16}  color={theme.PRIAMARY_COLOR} />
        <Text style={[styles.text, {color:theme.PRIAMARY_COLOR}]}>
            preferences
        </Text>
        </View>
        <Arrow name='keyboard-arrow-right' size={20} color={theme.PRIAMARY_COLOR}/>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.setting1,]}>
      <View style={{flexDirection:'row'}}>
      <Arrow  name='dangerous' size={16}  color={theme.PRIAMARY_COLOR} />
        <Text style={[styles.text, {color:theme.PRIAMARY_COLOR}]}>
            Price Alert
        </Text>
        </View>
        <Arrow name='keyboard-arrow-right' size={20} color={theme.PRIAMARY_COLOR}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.setting}>
      <View style={{flexDirection:'row'}}>
      <Ionicons  name='md-wallet-sharp' size={16}  color={theme.PRIAMARY_COLOR} />
        <Text style={[styles.text, {color:theme.PRIAMARY_COLOR}]}>
            Wallet Connect
        </Text>
        </View>
        <Arrow name='keyboard-arrow-right' color={theme.PRIAMARY_COLOR} size={20}/>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.setting1,]}>
      <View style={{flexDirection:'row'}}>
      <Arrow  name='wallet-giftcard' size={16}  color={theme.PRIAMARY_COLOR} />
        <Text style={[styles.text, {color:theme.PRIAMARY_COLOR}]}>
            About
        </Text>
        </View>
        <Arrow name='keyboard-arrow-right' color={theme.PRIAMARY_COLOR} size={20}/>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default OtherSetting
const styles = StyleSheet.create({
    setting:{
        width:Dimensions.get("window").width*0.90,
        height:Dimensions.get("window").height/15,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
        ,padding:10,
        borderBottomWidth:0.5,
        borderBottomColor:"grey",
        marginTop:2,
    },
    setting1:{
        width:Dimensions.get("window").width*0.90,
        height:Dimensions.get("window").height/15,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10,
        // borderBottomWidth:1,
        // borderBottomColor:"grey",
        marginTop:2
    },
    OtherSetting:{
      width:Dimensions.get("window").width*0.90,
        height:Dimensions.get("window").height/15,
        justifyContent:"center",
        backgroundColor:'grey',
        padding:5,
    },
    text:{
      fontWeight:'900', fontSize:16,
      justifyContent:'center',
      marginHorizontal:5
    }
})