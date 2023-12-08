import React from "react";
import { StyleSheet , Image} from "react-native";
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({

    button:{
        width:'auto',
        height:"auto",
        flexDirection:'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        gap:10,
        borderColor:'#F5C12A',
        borderWidth:1,
        borderRadius:50,
    },

    button_sesion:{
        flexDirection:'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        marginLeft:"auto",
        underlayColor:"transparent",
        gap:10,
        
    },

    button_pdf:{
        width:"100%",
        height:150,
        flexDirection:'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        gap:10,
        
    },


})


export default function StyleButtonForm({button_pdf,button, button_sesion, children,onPress, title , text }){
    const buttonStyle =[
        button && styles.button,
        button_sesion && styles.button_sesion,
        button_pdf && styles.button_pdf,
    ]

    return(
        <Button onPress={onPress}  title={title} mode="text" icon={({ }) => (<Image source={require('../src/img/button.png')} style={{ width:50 , height: 45,  resizeMode: 'contain' ,padding:0 , position:'relative', left:-47}}/>)} buttonColor="transparent" textColor="black" style={ buttonStyle }  contentStyle={{flexDirection: 'row', width:'100%', justifyContent:'center', alignItems:'center'}}>
             {text}
        </Button>
    )
}