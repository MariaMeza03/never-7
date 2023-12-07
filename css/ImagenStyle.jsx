import React from "react";
import { StyleSheet, Image  } from "react-native";

const styles = StyleSheet.create({

    imagen:{

    resizeMode: 'contain',
    


    },
    imagen_logo:{
        width: 40,
        height: 40,
        resizeMode: 'contain',
        margin:"auto",
    },

    link_imagen:{
        width:50,
        resizeMode: 'contain',
        margin:"auto",
    },

    link_media:{
        width:35,
        height:35,
        resizeMode: 'contain',
        margin:"auto",
    }
})


export default function StyleImagen({imagen_logo,imagen, imagen_firts ,link_imagen,link_media , source}){
    const ImagenStyle =[
        /*styles.imagen_first,*/
        imagen && styles.imagen,
        imagen_firts && styles.imagen_first,
        link_imagen && styles.link_imagen,
        link_media && styles.link_media,
        imagen_logo && styles.imagen_logo,

    ]

    return(
        <Image style={ImagenStyle}  source={ source}>
        </Image>
    )
}