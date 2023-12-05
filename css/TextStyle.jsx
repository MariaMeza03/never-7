import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({

    title:{
        fontSize:40,
        fontWeight:'bold',
        textAlign:'left',
    },

    title_cotizador:{
        fontSize:40,
        fontWeight:'bold',
        textAlign:'left',
        paddingLeft:10,
    },

    link_text:{
        fontSize:15,
        fontWeight:'bold',
    },

    label:{
        fontWeight:"bold",
    },
    error:{
        color:"red",
        fontSize:10,   
    },

    hr:{
        textAlign:"center" ,
         paddingTop:30
    }

})


export default function StyleText({error,hr,label,title, link_text,children,title_cotizador}){
    const textStyle =[
        title && styles.title,
        link_text && styles.link_text,
        title_cotizador && styles.title_cotizador,
        label && styles.label,
        hr && styles.hr,
        error && styles.error
    ]

    return(
        <Text style={textStyle}>
            {children}
        </Text>
    )
}