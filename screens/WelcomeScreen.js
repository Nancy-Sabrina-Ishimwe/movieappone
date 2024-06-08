import { View,Image,StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


export default function WelcomeScreen() {

  const navigate = useNavigation();


  return (
    
      <View style={styles.container}> 
      <Image source={require('../assets/mtwo.png')} />
      </View> 
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'absolute',
    backgroundColor:'#1F2123',
    width:'50%',
    height:'50%',
    borderRadius:'50%',
    alignItems: 'center',
    resizeMode:'cover',
    
    
  },

});