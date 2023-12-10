
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
        <StyleImagen source={require('../../img/header.webp')} imagen />

        <StyleContainer content_form>
            <StyleText title >Recuperar contraseña</StyleText>

            <Formik
            validationSchema={loginValidationSchema}
            initialValues={{  password:'', password_two:''}} 
            onSubmit={handleSubmit}>
                {({ handleChange, handleBlur, handleSubmit, values , errors }) => (

                    <StyleContainer content_form_form_formik >

                        <StyleContainer content_input>
                            <StyleInput placeholder="Password" secureTextEntry={true} name="password" vale={values.password} onBlur={handleBlur('password')} onChangeText={handleChange('password')} input/>
                                {errors.password &&
                                    <StyleText error>{errors.password}</StyleText>
                                }
                        </StyleContainer>

                        <StyleContainer content_input>
                            <StyleInput placeholder="Confirmar password" name="password_two" secureTextEntry={true} value={values.password_two} onBlur={handleBlur('password_two')} onChangeText={handleChange('password_two')} input/>
                                {errors.password_two &&
                                    <StyleText error>{errors.password_two}</StyleText>
                                }
                        </StyleContainer>

                        <StyleButtonForm onPress={handleSubmit} button text="Recuperar">
                        </StyleButtonForm>

                    </StyleContainer>

                )}
            </Formik>
            
        </StyleContainer>
        

    </StyleContainerScroll>
      
    )
}
export default FormPassword