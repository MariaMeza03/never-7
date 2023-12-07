import React from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({

    
    input:{
        width:"100%",
        borderWidth:1,
        borderColor:"#D1CDCD",
        padding:10,
        borderRadius:30,
    },

})


export default function StyleInput({input, placeholder, value , onBlur, onChangeText, secureTextEntry}){
    const textInput =[
        input && styles.input,

    ]

    return(
        <TextInput style={textInput} secureTextEntry={secureTextEntry} placeholder={placeholder} value={value} onBlur={onBlur} onChangeText={onChangeText}>
        </TextInput>
    )
}