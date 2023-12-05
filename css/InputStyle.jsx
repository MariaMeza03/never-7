import React from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({

    
    input:{
        width:"100%",
        borderBottomWidth:3,
        borderBottomColor:"#000",
        padding:10,
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