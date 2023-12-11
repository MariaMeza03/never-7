
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

//*Css
import StyleContainer from "../../../css/ContainerStyle";
import StyleContainerScroll from "../../../css/ScrollViewStyle";

import TargetVeterinario from "../../components/Veterinario/TargetVeterinarioGeneral";
import HeaderVeterinarioChangeImagen from "../../components/layouts/HeaderVeterinarioTwo";
import TargetVeterinariOption from "../../components/Veterinario/TargetOptionVeterinario";
import Listenbutton from "../../components/layouts/Listenbutton";


const ListaVeterinarios= ({checked}) =>{
  
    return(

    <StyleContainerScroll container>       

     <HeaderVeterinarioChangeImagen
     title="Perfil Veterinario"/>
           
           <StyleContainer  content_taget_option_veterinario>
                <StyleContainer  content_taget_option>
                    <TargetVeterinariOption nombre="Datos de la clínica" imagen={require('../../img/hose-icon.webp')} uri={'/addDatosClinica'} />
                    <TargetVeterinariOption nombre="Datos del Dr."  imagen={require('../../img/men-icon.webp')}  uri={'/addDatosVeterinario'}/>

                </StyleContainer>

                <StyleContainer  content_taget_option>
                    <TargetVeterinariOption nombre="Servicios"  imagen={require('../../img/trofeo-icon.webp')} uri={'/addDatosServices'}/>
                    <TargetVeterinariOption nombre="Documentos"  imagen={require('../../img/clipboard-icon.webp')} />

                </StyleContainer>

            </StyleContainer>
       
        <Listenbutton/>


    </StyleContainerScroll>
      
    )
}
export default ListaVeterinarios