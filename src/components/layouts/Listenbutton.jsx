
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {ImageBackground} from 'react-native';

//*Css
import StyleImagen from "../../../css/ImagenStyle";
import StyleContainer from "../../../css/ContainerStyle";


const Listenbutton= ({ imagen, title}) =>{

    const [user, setuser] = useState({})
    const navigate = useNavigate();
    
    const handleSubmit = (values) => {
        setuser(values)

        //*Unicamente prueba, la idea es conectarlo al back
        navigate('/ChangePassword')
	}

    return(
   
     <StyleContainer content_asistent>

        <StyleImagen source={require('../../img/asistente.webp')} imagen_option_veterinario onPress={handleSubmit}/>

     </StyleContainer>
        
      
    )
}
export default  Listenbutton