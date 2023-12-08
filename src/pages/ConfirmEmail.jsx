
import React, { useState } from "react";


//*Css
import StyleText from "../../css/TextStyle";
import StyleImagen from "../../css/ImagenStyle";
import StyleContainer from "../../css/ContainerStyle";
import StyleContainerScroll from "../../css/ScrollViewStyle";
import StyleButtonForm from "../../css/ButtonStyleForm";


const FormPassword= ({checked}) =>{


    return(

    <StyleContainerScroll container>
        <StyleImagen source={require('../img/header.webp')} imagen />

        <StyleText title >¡Estas a un paso de activar tu cuenta de Never Seven Lost!</StyleText>
        <StyleContainer content_form>
            
            <StyleImagen source={require('../img/huellas.png')} imagen />


            <StyleText  link_text_two >Revisa todas las bandejas de tu correo incluyendo la de SPAM e ingresa al link de activación. Si no recibes el correo aún al solicitar nuevamente el envío revisa el correo electrónico que ingresaste en la pantalla anterior.</StyleText>

            <StyleButtonForm onPress={handleSubmit} button text="Regresar">
            </StyleButtonForm>

            
        </StyleContainer>
        

    </StyleContainerScroll>
      
    )
}
export default FormPassword