
import React, { useState } from "react";


//*Css
import StyleText from "../../../css/TextStyle";
import StyleImagen from "../../../css/ImagenStyle";
import StyleButton from "../../../css/ButtonStyle";


const TargetVeterinariOption= ({ imagen, nombre, uri}) =>{
   

    return(
   
     <StyleButton to={uri} target_veterinario_option>
        <StyleImagen source={imagen} imagen_option_veterinario/>
        <StyleText link_text>{nombre}</StyleText>
     </StyleButton>
        
      
    )
}
export default TargetVeterinariOption