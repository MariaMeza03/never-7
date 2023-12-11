
import React, { useState } from "react";

//*Css
import StyleText from "../../../css/TextStyle";
import StyleImagen from "../../../css/ImagenStyle";
import StyleContainer from "../../../css/ContainerStyle";


const TargetVeterinario= ({ imagen, nombre}) =>{
 

    return(
   
     <StyleContainer target_veterinario >
        <StyleContainer target_name_avatar>
            <StyleImagen source={require('../../img/arturo-prueba.png')} />
            <StyleText title_header>{nombre}</StyleText>
        </StyleContainer>

        <StyleImagen source={require('../../img/icon-target.webp')} imagen_icon_taget_vaterinario/>
     </StyleContainer>
        
      
    )
}
export default TargetVeterinario