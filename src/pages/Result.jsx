import React from "react";
import { Linking } from "react-native";

//*Components
import Nav from "../components/Nav";

//*Css
import StyleText from "../../css/TextStyle";
import StyleImagen from "../../css/ImagenStyle";
import StyleButton from "../../css/ButtonStyle";
import StyleContainer from "../../css/ContainerStyle";
import StyleBackground from "../../css/BackgroundStyle";
import StyleContainerScroll from "../../css/ScrollViewStyle";


const Result= () =>{
    return(

        <StyleContainerScroll container>
                <StyleBackground colors={['#FFDF17', '#00E2CF']}  background/> 
                <StyleImagen source={require('../img/result.webp')} imagen />

                <StyleContainer text>
                    <StyleText title >Resultados</StyleText>
                    <StyleContainer container_imagen_result>
                        <StyleImagen source={require('../img/login_document.webp')} imagen />
                    </StyleContainer>

                    <StyleButton to="/form" button_pdf >
                        <StyleText link_text >DESCARGA TUS RESULTADOS</StyleText>
                        <StyleImagen source={require('../img/arrow.webp')} link_imagen />
                    </StyleButton>

                    <StyleContainer content_media>
                        <StyleText link_text >Compartir por </StyleText>
                        <StyleButton  onPress={() => Linking.openURL('http://google.com')} button_sesion >
                            <StyleImagen source={require('../img/email.webp')} link_media />
                        </StyleButton>

                        <StyleButton  onPress={() => Linking.openURL('http://google.com')} button_sesion >
                            <StyleImagen source={require('../img/logo-whatsapp.webp')} link_media />
                        </StyleButton>

                    </StyleContainer>
                    
                    
                </StyleContainer>
                
                <Nav/>
        
            </StyleContainerScroll>
      
    )
}
export default Result

