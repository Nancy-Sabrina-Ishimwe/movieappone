import { View, Text } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={Style.Header}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./assets/muvi.png')} />
      </View>
    </View>
  )
}