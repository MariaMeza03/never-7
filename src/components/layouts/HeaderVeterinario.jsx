
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {ImageBackground} from 'react-native';

//*Css
import StyleText from "../../../css/TextStyle";
import StyleImagen from "../../../css/ImagenStyle";
import StyleContainer from "../../../css/ContainerStyle";
import StyleButtonReturn from "../../../css/ButtonStyleGeneral";


const HeaderVeterinario= ({ imagen, title}) =>{

    const [user, setuser] = useState({})
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        setuser(values)

        //*Unicamente prueba, la idea es conectarlo al back
        navigate('/ChangePassword')
	}

    return(
   
     <StyleContainer content_header >

        <StyleContainer content_button_return>
            <StyleButtonReturn onPress={handleSubmit} button text="Regresar">
            </StyleButtonReturn>
        </StyleContainer>

        <StyleContainer content_media_header>
            <ImageBackground source={require('../../img/Texturas.webp')} resizeMode="cover" style={{flex: 1,resizeMode: 'contain', alignItems:'center', flexDirection:"row",justifyContent:'space-between',  padding:20}}>
                <StyleText title_header>{title}</StyleText>
            
                <StyleContainer content_button_header>
                    <StyleImagen source={require('../../img/button_planet.webp')} />
                    <StyleImagen source={require('../../img/button_shop.webp')} />
                </StyleContainer>

            </ImageBackground>
        </StyleContainer>
        {/* Parte dinamica, se envio la foto desde donde se esta usando */}
        <StyleImagen source={require('../../img/button-plus.webp')} imagen_header/>
     </StyleContainer>
        
      
    )
}
export default HeaderVeterinario