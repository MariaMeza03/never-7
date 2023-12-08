import React from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import { TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({

    button:{
        width:70,
        height:70,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap:10,
        backgroundColor:'#FFDF18',
        borderRadius:100,
        position:'relative',
        top:-20,
    },

    button_sesion:{
        flexDirection:'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent:'center',
        marginLeft:"auto",
        underlayColor:"transparent",
        padding:0,
        
    },

    button_pdf:{
        width:"100%",
        height:80,
        flexDirection:'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        gap:10,
        
    },


})


export default function StyleButton({button_pdf,button, button_sesion, children,to}){
    const buttonStyle =[
        button && styles.button,
        button_sesion && styles.button_sesion,
        button_pdf && styles.button_pdf,
    ]

    return(
        <Link to={to} underlayColor="transparent" component={TouchableOpacity} style={{backgroundColor:"transparent", margin:0 , padding:0}}>
            <View style={ buttonStyle }  component={TouchableOpacity}>
                { children }
            </View>
        </Link>
    )
}