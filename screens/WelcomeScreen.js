import { View, Text,Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Flatbutton from '../shared/button'

export default function WelcomeScreen() {
  return (
    <View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./assets/muvi.png')} />
      </View>
      <Text>Welcome to Muvi</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Free movie streaming all your needs everytime and everywhere</Text>
      </View>
      
    </View>
  )
}