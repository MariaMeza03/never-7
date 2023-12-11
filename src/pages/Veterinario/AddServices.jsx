
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

//*Css
import StyleContainer from "../../../css/ContainerStyle";
import StyleContainerScroll from "../../../css/ScrollViewStyle";

import HeaderVeterinarioChangeImagen from "../../components/layouts/HeaderVeterinarioTwo";
import Listenbutton from "../../components/layouts/Listenbutton";
import TargetServices from "../../components/Veterinario/TargetServicesVeterinario";
import TargetButtonPlus from "../../components/Veterinario/TargetButtonPlus";

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
               <StyleContainer content_target_vaterinario>
                   <TargetServices nombre="Vacunas" imagen={require('../../img/vacunas.webp')} uri={'/addDatosClinica'} />
                   <TargetServices nombre="Consultas" imagen={require('../../img/hose-icon.webp')} uri={'/addDatosClinica'} />
                   <TargetServices nombre="Aseo" imagen={require('../../img/aseo.webp')} uri={'/addDatosClinica'} />
                   <TargetServices nombre="Estética" imagen={require('../../img/estetica.webp')} uri={'/addDatosClinica'} />

                   <StyleContainer  content_target_add>
                        <TargetButtonPlus nombre="Agregar servicios" imagen={require('../../img/icon_plus.webp')} uri={'/addDatosClinica'} />
                    </StyleContainer>

               </StyleContainer>


               
           </StyleContainer>
   
           <Listenbutton/>
   
   
       </StyleContainerScroll>
      
    )
}
export default AddServices