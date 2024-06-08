import { View, Text,TextInput,StyleSheet,placeholder,secureTextEntry,Button} from 'react-native'
import React from 'react'


const CustomInput = ({value,setValue}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.Input}
      secureTextEntry={secureTextEntry}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
   backgroundColor:'white',
   borderColor:'#10130F',
   borderWidth: 1,
   borderRadius: 3,
   width:'100%',
   height:50,
   paddingHorizontal:100,
   marginVertical:10,


    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        padding: 90,
        
        borderRadius: 5,
      },
     
      buttonText: {
        fontSize: 18,
        color: "white",
      },
    // TextInput: {
    //     height: 40,
    //     borderColor: "gray",
    //     borderWidth: 1,
    //     marginBottom: 10,
    //     paddingLeft: 10,
    
    // },

});
  

export default CustomInput