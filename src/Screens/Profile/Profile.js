import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

 function Profile({navigation}) {
  return (
    <View>
        
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Text>Profile Screen</Text>
        </TouchableOpacity>
    </View>
  )
}
export default Profile