import { View,Image,StyleSheet} from 'react-native'
import React from 'react'


export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageStyle}> 
      <Image source={require('../assets/mtwo.png')} />
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'absolute',
    backgroundColor:'#1F2123',
  },
  imageStyle: {
    borderRadius:'50%',
    alignItems: 'center',
    
    flex: 3,
    
  },

});