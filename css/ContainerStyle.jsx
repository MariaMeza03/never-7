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
        width:'100%',
        position:'relative',
        flex:1 , 
        left:-15,
        top:0,
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center'
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

    content_new_user:{
        width:'100%',
        height:'auto',
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:50,
        position:'relative',
    },

    content_media_two:{
        width:'100%',
        height:'auto',
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
        position:'relative',
        gap:20,
        marginBottom:30
    },

    content_password:{
        flex:1 ,
        width:'100%',
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:5,
        marginBottom:30,
    },

    content_terminos:{
        width:'100%',
        height:'auto',
        flex:1 ,
        flexDirection:"column",
        overflow:'hidden',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    content_header:{
        width:'100%',
        flexDirection:"column",
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    content_button_header:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
        gap:10,
    },
    content_media_header:{
        width:'100%',
        position:'relative',
        flex:1 , 
        top:0,
        flexDirection:"row",
        justifyContent:' space-between',
        alignItems:'center',
        
    },
    content_button_return:{
        marginLeft:'auto'
    },

    content_taget:{
        width:'100%',
        flexDirection:"grap",
        alignItems: 'center',
        justifyContent: 'center',
    },
    content_target_vaterinario:{
        alignItems:'center',
        justifyContent: 'center',
        paddingTop:20,
        gap:20,
    },
    target_veterinario:{
        borderRadius:10,
        flexWrap:'wrap',
        flexDirection:'row',
        alignItems:'center',
        width:'90%',
        height:'auto',
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        paddingHorizontal:20,
        paddingVertical:20,
    },
    target_name_avatar:{
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        gap:10
    },
    imagen_change:{
        position:'relative',
        top:-20,
        flexWrap:'wrap',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
    },
    content_taget_option:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        paddingTop:20,
        gap:20,
    },
    
    target_veterinario_option:{
        borderRadius:10,
        flex:1 ,
        flexDirection:"column",
        alignItems:'center',
        justifyContent: 'space-between',
        width:'100%',
        height:200,
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
    content_taget_option_veterinario:{
        width:'90%',
        height:"auto",
        flex:1,
        flexDirection:"grap",
        alignItems: 'center',
        justifyContent: 'center',
    },
 
    content_asistent:{
        paddingTop:30,
        paddingBottom:0,
        
    },
    content_imagen_services:{
        borderColor:'#F5C12A',
        borderWidth:1,
        borderRadius:10,
        padding:5,
        height:68,
        width:68,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content_target_add:{
        width:'100%',
        height:110,
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        paddingTop:10,
        gap:10,
    },





})


export default function StyleContainer({container_imagen_result,content_form_form_formik,content_input,content_form_quoter_formik,content_media,text, content_form, content_image, content_form_cotizador,content_nav,content_new_user,content_password, content_media_two, content_terminos,content_button_header,content_media_header,content_header,content_button_return,target_veterinario,target_name_avatar, content_target_vaterinario,content_taget,imagen_change, content_taget_option,target_veterinario_option,content_taget_option_veterinario,content_asistent,content_imagen_services,children,content_target_add}){
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
        content_new_user && styles.content_new_user,
        content_password && styles.content_password,
        content_media_two && styles.content_media_two,
        content_terminos && styles.content_terminos,
        content_button_header && styles.content_button_header,
        content_media_header && styles.content_media_header,
        content_header && styles.content_header,
        content_button_return && styles.content_button_return,
        target_veterinario && styles.target_veterinario,
        target_name_avatar && styles.target_name_avatar,
        content_target_vaterinario && styles. content_target_vaterinario,
        content_taget && styles.content_taget,
        imagen_change && styles.imagen_change,
        content_taget_option && styles.content_taget_option,
        target_veterinario_option && styles.target_veterinario_option,
        content_taget_option_veterinario && styles.content_taget_option_veterinario,
        content_asistent && styles.content_asistent,
        content_imagen_services && styles.content_imagen_services,
        content_target_add && styles.content_target_add,
        
    ]

    return(
        <View style={ containerStyle } >
            { children }
        </View>
    )
}