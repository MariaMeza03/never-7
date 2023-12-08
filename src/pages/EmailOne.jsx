
import React, { useState } from "react";
import { Formik } from 'formik';
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup';

//*Css
import StyleText from "../../css/TextStyle";
import StyleInput   from "../../css/InputStyle";
import StyleImagen from "../../css/ImagenStyle";
import StyleContainer from "../../css/ContainerStyle";
import StyleContainerScroll from "../../css/ScrollViewStyle";
import StyleButtonForm from "../../css/ButtonStyleForm";


const loginValidationSchema = Yup.object().shape({
    password: Yup.string()
    .required('Campo obligatorio *'),
    password_two: Yup.string()
    .oneOf([Yup.ref('password'), null], 
    'Las contraseñas no  coinciden')
    .required('Campo obligatorio *'),
})

const FormPassword= ({checked}) =>{

    const [user, setuser] = useState({})
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        setuser(values)

        //*Unicamente prueba, la idea es conectarlo al back

        navigate('/EmailOne')
	}

    return(

    <StyleContainerScroll container>
        <StyleImagen source={require('../img/header.webp')} imagen />

        <StyleText title >Correo electrónico enviado</StyleText>
        <StyleContainer content_form>
            
            <StyleImagen source={require('../img/huellas.png')} imagen />


            <StyleText  link_text_two >Revisa todas las bandejas de tu correo incluyendo la de SPAM e ingresa al link de reactivación. Si no recibes el correo aún al solicitar nuevamente
            el envío revisa el correo electrónico que ingresaste
            en la pantalla anterior.</StyleText>

            <StyleButtonForm onPress={handleSubmit} button text="Regresar">
            </StyleButtonForm>

            
        </StyleContainer>
        

    </StyleContainerScroll>
      
    )
}
export default FormPassword