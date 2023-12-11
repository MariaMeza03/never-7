
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

//*Css
import StyleContainer from "../../../css/ContainerStyle";
import StyleContainerScroll from "../../../css/ScrollViewStyle";
import StyleButtonReturn from "../../../css/ButtonStyleGeneral";
import HeaderVeterinario from "../../components/layouts/HeaderVeterinario";
import TargetVeterinario from "../../components/Veterinario/TargetVeterinarioGeneral";
import Listenbutton from "../../components/layouts/Listenbutton";


const ListaVeterinarios= ({checked}) =>{

    const navigate = useNavigate();

    const handleSubmit = () => {
    
        //*Unicamente prueba, la idea es conectarlo al back
        navigate('/addVeterinarioOne')
	}

    return(

    <StyleContainerScroll container>       

     <HeaderVeterinario
     title="Veterinarios"/>


        <StyleContainer content_taget>
            <StyleContainer >
                <StyleButtonReturn onPress={handleSubmit} button_plus_veterinario text="Agregar Veterinario">
                </StyleButtonReturn>
            </StyleContainer>
           
            <StyleContainer content_target_vaterinario>
                <TargetVeterinario nombre="Armando"/>
                <TargetVeterinario nombre="Daniela"/>

            </StyleContainer>
            
        </StyleContainer>

        <Listenbutton/>


    </StyleContainerScroll>
      
    )
}
export default ListaVeterinarios