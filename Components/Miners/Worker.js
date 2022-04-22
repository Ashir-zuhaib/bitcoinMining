import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Worker = () => {
  return (
    <View style={{backgroundColor:'#000', flex:1, width:'100%'}}>
      <TouchableOpacity>
      <Text style={{fontSize:50, color:'#fff'}}>Active</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text>Active</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text>Active</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text>Active</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text>Active</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text>Active</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Worker