
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

//*Css
import StyleContainer from "../../../css/ContainerStyle";
import StyleContainerScroll from "../../../css/ScrollViewStyle";

import HeaderVeterinarioChangeImagen from "../../components/layouts/HeaderVeterinarioTwo";
import TargetVeterinariOption from "../../components/Veterinario/TargetOptionVeterinario";
import Listenbutton from "../../components/layouts/Listenbutton";
import TargetServices from "../../components/Veterinario/TargetServicesVeterinario";


const AddServices= ({checked}) =>{
  
    return(

    <StyleContainerScroll container>       

        <HeaderVeterinario
        title="Servicios Veterinario"/>
   
   
           <StyleContainer content_taget>

               <StyleContainer content_target_vaterinario>
                   <TargetServices nombre="Vacunas" imagen={require('../../img/hose-icon.webp')}/>
                   <TargetServices  nombre="Consultas" imagen={require('../../img/hose-icon.webp')}/>
   
               </StyleContainer>
               
           </StyleContainer>
   
           <Listenbutton/>
   
   
    </StyleContainerScroll>
      
    )
}
export default AddServices