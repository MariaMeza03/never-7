import React, { useState } from "react";
import {ImageBackground, StyleSheet, Text, View} from 'react-native';


//*Components
import Nav from "../components/Nav";

//*Css
import StyleImagen from "../../css/ImagenStyle";
import StyleContainer from "../../css/ContainerStyle";
import StyleContainerScroll from "../../css/ScrollViewStyle";




const Reload= () =>{
    const image = {uri: '../img/mascota.png'};

    return(

        <StyleContainerScroll container>
                

                <ImageBackground source={require('../img/mascotas.jpg')} resizeMode="cover" style={styles.image}>

                    <StyleContainer text>

                        <View style={styles.idiom}>
                            <Text style={styles.text_idiom} >País</Text>
                            <StyleImagen source={require('../img/bandera.png')}/>
                        </View>


                        <StyleImagen source={require('../img/Logo-color.png')} imagen />
                        
                    </StyleContainer>
                    
                </ImageBackground>
            </StyleContainerScroll>
      
    )
}


const styles = StyleSheet.create({

    image: {
      flex: 1,
      justifyContent: 'center',
    },

    idiom:{
        flex:1 , 
        flexDirection:"row",
        gap:10,
        justifyContent : 'center',
        alignItems: 'center',
        position:"absolute",
        top:-250,
        right:30
    },

    text_idiom:{
        color:'white'
    }
  });
export default Reload

