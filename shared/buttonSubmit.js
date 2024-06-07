import {StyleSheet,TouchableOpacity, View, Text } from 'react-native'
import React from 'react'



export default function buttonSubmit({text,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{Text}</Text>

        </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    button:{
        borderRadius: 8,
        paddingBottom:14,
        paddingHorizontal:10,
        backgroundColor:'yellow',
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:'10px',
        textAlign:'center',
    }
});