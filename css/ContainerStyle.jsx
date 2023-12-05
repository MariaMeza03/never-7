import React from "react";
import { StyleSheet, View} from "react-native";

const styles = StyleSheet.create({
    text:{
        width:"100%",
        paddingLeft:50,
        paddingRight:50,
    },

    //**Formulario */

    content_form:{
        width:"100%",
        paddingHorizontal:50,
    },

    content_form_cotizador:{
        width:"110%",
        paddingHorizontal:50,
        paddingBottom:50,
    },

    content_form_quoter_formik:{
        padding:15, 
        backgroundColor: 'white',
        borderRadius:20,
        marginBottom:30,
    },
    content_form_form_formik:{
        paddingVertical:20,
        marginBottom:15,
    },

    content_image:{
        width:'100%', 
        justifyContent:'center',
        alignItems:'center',
    },
    content_input:{
        paddingBottom:15, 
    },

    content_media:{
        gap:10,
        flex:1 , 
        flexDirection:"row",
        paddingBottom:40,
    },

    container_imagen_result:{
        paddingTop:40
    },

    content_nav:{
        width:'90%',
        height:'auto',
        backgroundColor:'#666666',
        borderRadius:50,
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical:50,
        position:'relative',
    },
    

})


export default function StyleContainer({container_imagen_result,content_form_form_formik,content_input,content_form_quoter_formik,content_media,text, content_form, content_image, content_form_cotizador,content_nav, children}){
    const containerStyle =[
        text && styles.text,
        content_form && styles.content_form,
        content_image && styles.content_image,
        content_form_cotizador && styles.content_form_cotizador,
        content_media && styles.content_media,
        content_form_quoter_formik && styles.content_form_quoter_formik,
        content_input && styles.content_input,
        content_form_form_formik && styles.content_form_form_formik,
        container_imagen_result && styles.container_imagen_result,
        content_nav && styles.content_nav,
    ]

    return(
        <View style={ containerStyle } >
            { children }
        </View>
    )
}