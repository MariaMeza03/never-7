import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({

    title:{
        fontSize:35,
        fontWeight:'bold',
        textAlign:'center',
        paddingBottom:15,
    },

    title_cotizador:{
        fontSize:40,
        paddingLeft:10,
    },

    title_header:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        
    },

    link_text:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        
    },

    link_text_two:{
        fontSize:15,
        marginBottom:40,
        marginTop:40,
        
    },

    link_password:{
        fontSize:15,
        fontWeight:'bold',
        textDecorationColor:'#EDC34D', 
        color:'#EDC34D',
        borderBottomColor:'#EDC34D',
        borderBottomWidth:1,
    },

    link_register:{
        fontSize:15,
        fontWeight:'bold',
        textDecorationColor:'#EDC34D', 
        color:'#EDC34D',
        padding:0,
        margin:0,
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


export default function StyleText({error,hr,label,title, link_text,children,title_cotizador,link_password,link_register,title_header, link_text_two}){
    
    const textStyle =[
        title && styles.title,
        link_text && styles.link_text,
        title_cotizador && styles.title_cotizador,
        label && styles.label,
        hr && styles.hr,
        error && styles.error,
        link_password && styles.link_password,
        link_register && styles.link_register,
        link_text_two && styles. link_text_two,
        title_header && styles.title_header
    ]

    return(
        <Text style={textStyle}>
            {children}
        </Text>
    )
}