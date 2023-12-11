
import React, { useState } from "react";


//*Css
import StyleText from "../../../css/TextStyle";
import StyleImagen from "../../../css/ImagenStyle";
import StyleButton from "../../../css/ButtonStyle";
import StyleContainer from "../../../css/ContainerStyle";


const TargetServices= ({ imagen, nombre, uri}) =>{
   

    return(
   
    <StyleButton to={uri} target_services >
        <StyleContainer target_name_avatar>
            <StyleContainer content_imagen_services>
                <StyleImagen source={imagen} />
            </StyleContainer>
        </StyleContainer>
       

        <StyleText title_header>{nombre}</StyleText>
     </StyleButton>
        
      
    )
}
export default TargetServices