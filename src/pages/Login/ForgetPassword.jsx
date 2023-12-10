
import React, { useState } from "react";
import { Formik } from 'formik';
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup';

//*Css
import StyleText from "../../../css/TextStyle";
import StyleInput   from "../../../css/InputStyle";
import StyleImagen from "../../../css/ImagenStyle";
import StyleContainer from "../../../css/ContainerStyle";
import StyleContainerScroll from "../../../css/ScrollViewStyle";
import StyleButtonForm from "../../../css/ButtonStyleForm";
import StyleButton from "../../../css/ButtonStyle";

const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
    .email("Ingrese un email valido")
    .required('Campo abligatorio *'),
   
})

const FormEmail= ({checked}) =>{

    const [user, setuser] = useState({})
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        setuser(values)

        //*Unicamente prueba, la idea es conectarlo al back
        navigate('/ChangePassword')
	}

    return(

    <StyleContainerScroll container>       
        <StyleImagen source={require('../../img/header.webp')} imagen />


        <StyleContainer content_form>
            <StyleText title >Olvide mi contraseña</StyleText>
            <StyleText link_text>Ingresa tu correo electrónico asociadoa tu cuenta Never Seven Lost</StyleText>

            <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: ''}} 
            onSubmit={handleSubmit}>
                {({ handleChange, handleBlur, handleSubmit, values , errors }) => (

                    <StyleContainer content_form_form_formik >

                        <StyleContainer content_input>
                            <StyleInput placeholder="Email" name="email" secureTextEntry={false} value={values.email} onBlur={handleBlur('email')} onChangeText={handleChange('email')} input/>
                                {errors.email &&
                                    <StyleText error>{errors.email}</StyleText>
                                }
                        </StyleContainer>

                        <StyleButtonForm onPress={handleSubmit} button text="Siguiente">
                        </StyleButtonForm>

                        

                    </StyleContainer>
                    

                )}
            </Formik>

            
            
        </StyleContainer>

        <StyleButton to="/register" button_sesion >
                <StyleImagen source={require('../../img/button.png')} imagen />  
                <StyleText  link_register >Volver a identificarme</StyleText>
        </StyleButton>
        

    </StyleContainerScroll>
      
    )
}
export default FormEmail