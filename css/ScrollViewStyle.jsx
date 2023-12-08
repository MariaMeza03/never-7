import React from "react";
import { StyleSheet, ScrollView} from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({

    container:{
        width:"100%",
        height:"auto",
        flexGrow : 1, 
     
        alignItems: 'center',
        marginTop:Constants.statusBarHeight,
        
    },
    container_form:{
        width:"100%",
        height:"auto",
        paddingBottom:20,
        flexGrow : 1, 
        justifyContent : 'center',
        alignItems: 'center',
        marginTop:Constants.statusBarHeight,
        
    },
})


export default function StyleContainerScroll({ container,container_form, children}){
    const containerStyleScroll =[
        container && styles.container,
        container_form && styles.container_form,
    ]

    return(
        <ScrollView contentContainerStyle={ containerStyleScroll } >
            { children }
        </ScrollView>
    )
}