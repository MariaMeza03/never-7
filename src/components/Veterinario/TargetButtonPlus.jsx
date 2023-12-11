
import React, { useState } from "react";

//*Css
import StyleText from "../../../css/TextStyle";
import StyleImagen from "../../../css/ImagenStyle";
import StyleButton from "../../../css/ButtonStyle";


const TargetButtonPlus= ({ imagen, nombre, uri}) =>{
   

    return(
   
     <StyleButton to={uri} target_button_plus>
        <StyleImagen source={imagen} imagen_option_plus/>
        <StyleText link_text>{nombre}</StyleText>
     </StyleButton>
        
      
    )
}
export default TargetButtonPlus