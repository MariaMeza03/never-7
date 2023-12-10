
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

//*Css
import StyleText from "../../../css/TextStyle";
import StyleImagen from "../../../css/ImagenStyle";
import StyleContainer from "../../../css/ContainerStyle";


const TargetVeterinario= ({ imagen, nombre}) =>{
    const [user, setuser] = useState({})
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        setuser(values)

        //*Unicamente prueba, la idea es conectarlo al back
        navigate('/veterinario')
	}

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