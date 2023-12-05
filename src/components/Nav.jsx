
import React from "react";

//*Css
import StyleImagen from "../../css/ImagenStyle";
import StyleContainer from "../../css/ContainerStyle";
import StyleContainerScroll from "../../css/ScrollViewStyle";
import StyleButton from "../../css/ButtonStyle";

const Nav= () =>{

    return(

        <StyleContainer content_nav>
            <StyleButton  onPress={() => Linking.openURL('http://google.com')} button_sesion >
                    <StyleImagen source={require('../img/telefono.webp')} link_media />
            </StyleButton>

            <StyleButton  onPress={() => Linking.openURL('http://google.com')} button_sesion >
                <StyleImagen source={require('../img/whatsapp.webp')} link_media />
            </StyleButton>
            
            <StyleButton to="/" button>
                <StyleImagen imagen_logo source={require('../img/logo.webp')} />
            </StyleButton>

            <StyleButton  onPress={() => Linking.openURL('http://google.com')} button_sesion >
                <StyleImagen source={require('../img/correo.webp')} link_media />
            </StyleButton>

            <StyleButton  onPress={() => Linking.openURL('http://google.com')} button_sesion >
                <StyleImagen source={require('../img/lupa-blanca.webp')} link_media />
            </StyleButton>

        </StyleContainer>

      
    )
}
export default Nav