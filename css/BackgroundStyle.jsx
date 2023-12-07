import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({

    background:{
        width:"100%",
        height:"100%",
        position:"absolute",
        zIndex:0,
    },

    image: {
        flex: 1,
        justifyContent: 'center',
      },



})


export default function StyleBackground({background, colors}){
    const backgroundStyle =[
        background && styles.background,

    ]

    return(
        <LinearGradient style={ backgroundStyle } colors={ colors }>
        </LinearGradient>
    )
}