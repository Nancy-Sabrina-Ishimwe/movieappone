import React from "react";
import { StyleSheet, View, Text ,ImageBackground } from "react-native";
import Flatbutton from "../shared/button";
import { Color } from "../colors/Color";
import { Button } from "react-native-paper";



export default function HomeScreen({navigation}) {
  return (
  <ImageBackground source={require('../assets/joc1.jpg')} style={styles.container} 
  >
    <View style={styles.opacity}>
    </View>
    <View style={styles.viewText}>
        <View style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
          
          }}>
          <Text style={styles.Text}>Enjoy your favourite
             movie everywhere</Text>

          <Text style={styles.Textbody}>Browse through our collections and discover hundreds of movies
             and series that you will love</Text>
        </View>

        <View>
          <Button style={styles.btnStyle}
              mode="contained"
              buttonColor={Color.PRIMARY}
              textColor={Color.DARK}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              Get Started
            </Button>
        </View>
      </View>
  </ImageBackground>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'relative',
    
  
  },


  Text:{
      color: 'white',
      fontSize: 31,
      fontWeight: 'bold',
  },

  Textbody:{
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 19,
},
  opacity: {
    flex:1,
    backgroundColor:Color.DARK,
    opacity:0.7
  },
  viewText: {
    position:'absolute',
    width:'100%',
    height:'100%',
    flexDirection:'column',
    justifyContent:'space-between',
    padding:16,

  },

  btnStyle: {
    borderRadius: 6,
    
   

     
  },

});
