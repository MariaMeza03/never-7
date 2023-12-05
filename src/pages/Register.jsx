
import React, { useState } from "react";
import { Formik } from 'formik';
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup';

//*Components
import Nav from "../components/Nav";

//*Css
import StyleText from "../../css/TextStyle";
import StyleInput   from "../../css/InputStyle";
import StyleImagen from "../../css/ImagenStyle";
import StyleContainer from "../../css/ContainerStyle";
import StyleBackground from "../../css/BackgroundStyle";
import StyleContainerScroll from "../../css/ScrollViewStyle";
import StyleButtonForm from "../../css/ButtonStyleForm";


const loginValidationSchema = Yup.object().shape({
    name: Yup.string()
    .required('Campo obligatorio *'),
    email: Yup.string()
    .email("Ingrese un email valido")
    .required('Campo abligatorio *'),
    password: Yup.string()
    .required('Campo obligatorio *'),
    password_two: Yup.string()
    .oneOf([Yup.ref('password'), null], 
    'Las contraseñas no  coinciden')
    .required('Campo obligatorio *'),
})

const Form= () =>{

    const [user, setuser] = useState({})
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        setuser(values)

        //*Unicamente prueba, la idea es conectarlo al back

        if(values.name !== ''){
            navigate('/profile')
        }else{
            alert('Todos los datos son necesarios, te agredecemos que ingreses la información correcta')
        }
	}

    return(

    <StyleContainerScroll container>
        <StyleBackground colors={['#04A3F3', '#17E1BF']}  background/> 
        <StyleImagen source={require('../img/registro.webp')} imagen />

        <StyleContainer content_form>
            <StyleText title >Registro</StyleText>

            <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ name: '', email: '', password:'', password_two:''}} 
            onSubmit={handleSubmit}>
                {({ handleChange, handleBlur, handleSubmit, values , errors }) => (

                    <StyleContainer content_form_form_formik >

                        <StyleContainer content_input>
                            <StyleInput placeholder="Nombre" name="name" secureTextEntry={false} value={values.name} onBlur={handleBlur('name')} onChangeText={handleChange('name')} input/>
                                {errors.name &&
                                    <StyleText error>{errors.name}</StyleText>
                                }
                        </StyleContainer>

                        <StyleContainer content_input>
                            <StyleInput placeholder="Correo" name="email" secureTextEntry={false} value={values.email} onBlur={handleBlur('email')} onChangeText={handleChange('email')} input/>
                                {errors.email &&
                                    <StyleText error>{errors.email}</StyleText>
                                }
                        </StyleContainer>

                        <StyleContainer content_input>
                            <StyleInput placeholder="Contraseña" secureTextEntry={true} name="password" vale={values.password} onBlur={handleBlur('password')} onChangeText={handleChange('password')} input/>
                                {errors.password &&
                                    <StyleText error>{errors.password}</StyleText>
                                }
                        </StyleContainer>

                        <StyleContainer content_input>
                            <StyleInput placeholder="Confirmar contraseña" name="password_two" secureTextEntry={true} value={values.password_two} onBlur={handleBlur('password_two')} onChangeText={handleChange('password_two')} input/>
                                {errors.password_two &&
                                    <StyleText error>{errors.password_two}</StyleText>
                                }
                        </StyleContainer>

                        <StyleButtonForm onPress={handleSubmit} button text="Login">
                        </StyleButtonForm>

                    </StyleContainer>

                )}
            </Formik>
            
        </StyleContainer>
        
        <Nav/>

    </StyleContainerScroll>
      
    )
}
export default Form