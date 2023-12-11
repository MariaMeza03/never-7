
import React, { useState } from "react";


//*Css
import StyleText from "../../../css/TextStyle";
import StyleImagen from "../../../css/ImagenStyle";
import StyleButton from "../../../css/ButtonStyle";
import StyleContainer from "../../../css/ContainerStyle";


const TargetServices= ({ imagen, nombre}) =>{
   

    return(
   
     <StyleButton to={uri} target_veterinario_option>
        <StyleContainer content_imagen_services>
            <StyleImagen source={imagen} imagen_option_veterinario/>
        </StyleContainer>
    
        <StyleText link_text>{nombre}</StyleText>
     </StyleButton>
        
      
    )
}
export default TargetServices