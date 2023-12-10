
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {ImageBackground} from 'react-native';

//*Css
import StyleText from "../../../css/TextStyle";
import StyleImagen from "../../../css/ImagenStyle";
import StyleContainer from "../../../css/ContainerStyle";
import StyleButtonReturn from "../../../css/ButtonStyleGeneral";


const TargetVeterinariOption= ({ imagen, nombre}) =>{
    const [user, setuser] = useState({})
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        setuser(values)

        //*Unicamente prueba, la idea es conectarlo al back
        navigate('/veterinario')
	}

    return(
   
     <StyleContainer  target_veterinario_option >
        <StyleImagen source={imagen} imagen_option_veterinario/>
        <StyleText link_text>{nombre}</StyleText>
     </StyleContainer>
        
      
    )
}
export default TargetVeterinariOption