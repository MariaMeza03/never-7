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
    target_veterinario_option:{
        borderRadius:10,
        flex:1 ,
        flexDirection:"column",
        alignItems:'center',
        justifyContent: 'space-between',
        width:170,
        height:170,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        paddingHorizontal:20,
        paddingVertical:40,
    },


})


export default function StyleButton({button_pdf,button, button_sesion, children,to,target_veterinario_option}){
    const buttonStyle =[
        button && styles.button,
        button_sesion && styles.button_sesion,
        button_pdf && styles.button_pdf,
        target_veterinario_option && styles.target_veterinario_option
    ]

    return(
        <Link to={to} underlayColor="transparent" component={TouchableOpacity} style={{backgroundColor:"transparent", margin:0 , padding:0}}>
            <View style={ buttonStyle }  component={TouchableOpacity}>
                { children }
            </View>
        </Link>
    )
}