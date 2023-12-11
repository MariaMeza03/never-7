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
    },

    imagen_header:{
        width:132,
        height:132,
        margin:'auto' ,
        position:'relative',
        top:-20,
        zIndex:2
    },
    imagen_header_imagen:{
        width:132,
        height:132,
        margin:'auto' ,
        zIndex:2
    },

    imagen_icon_taget_vaterinario:{
        marginLeft:'auto'

    },
    imagen_header_change_imagen:{
        width:35,
        height:35,
        position:'relative',
        zIndex:2,
        left:-20
    },
    imagen_option_veterinario:{
        width:65,
        height:65,
        resizeMode: 'contain',
    },

   
   
})


export default function StyleImagen({imagen_logo,imagen, imagen_firts ,link_imagen,link_media , imagen_header,imagen_icon_taget_vaterinario,imagen_header_change_imagen,imagen_header_imagen,imagen_option_veterinario, source}){
    const ImagenStyle =[
        /*styles.imagen_first,*/
        imagen && styles.imagen,
        imagen_firts && styles.imagen_first,
        link_imagen && styles.link_imagen,
        link_media && styles.link_media,
        imagen_logo && styles.imagen_logo,
        imagen_header && styles.imagen_header,
        imagen_icon_taget_vaterinario && styles.imagen_icon_taget_vaterinario,
        imagen_header_change_imagen && styles.imagen_header_change_imagen,
        imagen_header_imagen && styles.imagen_header_imagen,
        imagen_option_veterinario && styles.imagen_option_veterinario
    ]

    return(
        <Image style={ImagenStyle}  source={ source}>
        </Image>
    )
}