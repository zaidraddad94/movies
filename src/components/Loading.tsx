import React from 'react'
import { View, ActivityIndicator } from 'react-native'


function Loading() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <ActivityIndicator size="large" color={'#53ba24'} />
    </View>
  )
}

export default Loading