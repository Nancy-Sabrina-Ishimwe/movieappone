import { View, Text,Image,StyleSheet, useWindowDimensions,I, ImageBackground} from 'react-native'
import CustomInput from '../components/CustomInput';
import { Color } from "../colors/Color";
import { Button } from "react-native-paper";
import React,{useState} from 'react'

const LoginScreen = () => {

  const [Email,setEmail] = useState('');
  const [password,setPassword] = useState('');


  const {height} = useWindowDimensions();

  return (
    <ImageBackground source={require('../assets/splash.jpg')} style={styles.container}>
      
    <View style={styles.container}>
    
    <Image source={require("../assets/mtwo.png")} style={[styles.logo, {height:height* 0.3}]} resizeMode='container' />
    <View>
      <Text style={styles.Text}>Welcome to Muvi</Text>
      <Text style={styles.Textbody}>Look back and reflect on your memories and grow over time</Text>
    </View>

    <View style={styles.subContainer}>
    <CustomInput placeholder="Email" value={Email} setValue={setEmail}/>
    <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
    <Button style={styles.btnStyle} mode="contained" buttonColor={Color.PRIMARY}
     textColor={Color.DARK} onPress={() => navigation.navigate("RegisterScreen")}>Login</Button>

      </View>
         
    </View>
</ImageBackground>
  )}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26282C",
    opacity: 0.8,
    padding: 20,
  },


  logo: {
    width: '30%',
    height:'30%',
    maxHeight: 100,
    maxWidth:200,
    marginLeft:100,
    
    
  
    marginBottom: 100,
  },  

  Text:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 50,
    paddingLeft: 50,
    alignItems: 'center',
    
},

Textbody:{
  color: '#FFFFFF',
  fontSize: 15,
  fontWeight: 'bold',
  paddingTop: 19,
},
  btnStyle: {
    borderRadius: 6,
  },
 
  // opacity: {
  //   flex:1,
  //   backgroundColor:Color.DARK,
  //   opacity:0.7
  // },

});

export default LoginScreen