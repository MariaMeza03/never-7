
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

//*Css
import StyleContainer from "../../../css/ContainerStyle";
import StyleContainerScroll from "../../../css/ScrollViewStyle";

import HeaderVeterinarioChangeImagen from "../../components/layouts/HeaderVeterinarioTwo";
import Listenbutton from "../../components/layouts/Listenbutton";
import StyleButtonReturn from "../../../css/ButtonStyleGeneral";
import TargetVeterinario from "../../components/Veterinario/TargetVeterinarioGeneral";
import TargetServices from "../../components/Veterinario/TargetServicesVeterinario";

const AddServices= ({checked}) =>{
    const navigate = useNavigate();

    const handleSubmit = () => {
    
        //*Unicamente prueba, la idea es conectarlo al back
        navigate('/addVeterinarioOne')
	}

    return(

    <StyleContainerScroll container>       

        <HeaderVeterinarioChangeImagen
        title="Veterinarios"/>
   
   
           <StyleContainer content_taget>
               <StyleContainer >
                   <StyleButtonReturn onPress={handleSubmit} button_plus_veterinario text="Agregar Veterinario">
                   </StyleButtonReturn>
               </StyleContainer>
              
               <StyleContainer content_target_vaterinario>
                   <TargetServices nombre="Vacunas" imagen={require('../../img/hose-icon.webp')} uri={'/addDatosClinica'} />
                   <TargetServices nombre="Consultas" imagen={require('../../img/hose-icon.webp')} uri={'/addDatosClinica'} />
   
               </StyleContainer>
               
           </StyleContainer>
   
           <Listenbutton/>
   
   
       </StyleContainerScroll>
      
    )
}
export default AddServices