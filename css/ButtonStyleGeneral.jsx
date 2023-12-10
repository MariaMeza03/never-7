import React from "react";
import { StyleSheet , Image} from "react-native";
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({

    button:{
        width:120,
        height:"auto",
        justifyContent:'center',
        flexDirection:'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        gap:10,
        backgroundColor:'#EDC34D',
        borderColor:'#EDC34D',
        borderWidth:1,
        borderRadius:50,
        marginHorizontal:10,
        marginVertical:20,
    },

    button_plus_veterinario:{
        width:'auto',
        height:"auto",
        justifyContent:'center',
        flexDirection:'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        gap:10,
        borderColor:'#EDC34D',
        borderWidth:1,
        borderRadius:50,
        marginVertical:3,
    },


})


export default function StyleButtonReturn({button, onPress, title ,button_plus_veterinario, text }){
    const buttonStyle =[
        button && styles.button,
        button_plus_veterinario && styles.button_plus_veterinario,
    ]

    return(
        <Button onPress={onPress}  title={title} mode="text" buttonColor="transparent" textColor="black" style={ buttonStyle }  contentStyle={{flexDirection: 'row', width:'100%', justifyContent:'center', alignItems:'center'}}>
             {text}
        </Button>
    )
}