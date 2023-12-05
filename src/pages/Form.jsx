
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
    email: Yup.string()
    .email("Ingrese un email valido")
    .required('Campo abligatorio *'),
    url: Yup.string()
    .required('Campo obligatorio *'),
    object: Yup.string()
    .required('Campo obligatorio *'),
    presupuesto: Yup.string()
    .required('Campo obligatorio *'),
    ventas: Yup.string()
    .required('Campo obligatorio *'),
    ticket: Yup.string()
    .required('Campo obligatorio *'),
})

const Form= () =>{

    const [user, setuser] = useState({})
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        setuser(values)

        //*Unicamente prueba, la idea es conectarlo al back

        if(values.email !== '' && values.url !== ''){
            navigate('/quoter')
        }else{
            alert('Todos los datos son necesarios, te agredecemos que ingreses la información correcta')
        }
	}

    return(

    <StyleContainerScroll container>
        <StyleBackground colors={['#00E2CF', '#00E2CF']}  background/> 
        <StyleImagen source={require('../img/Formulario.webp')} imagen />

        <StyleContainer content_form>
            <StyleText title >Formulario</StyleText>

            <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', url: '', object:'', presupuesto:'', ventas:'', ticket:''}} 
            onSubmit={handleSubmit}>
                {({ handleChange, handleBlur, handleSubmit, values , errors }) => (

                    <StyleContainer content_form_form_formik >

                        <StyleContainer content_input>
                            <StyleText label >Correo electrónico</StyleText>
                            <StyleInput placeholder="Tú dirección de correo electrónico" name="email" secureTextEntry={false} value={values.email} onBlur={handleBlur('email')} onChangeText={handleChange('email')} input/>
                                {errors.email &&
                                    <StyleText error>{errors.email}</StyleText>
                                }
                        </StyleContainer>

                        <StyleContainer content_input>
                            <StyleText label >Cuéntanos todo sobre tu proyecto ¿Cuál es tu url? y ¿Cuáles son tus productos o servicios estrella?</StyleText>
                            <StyleInput placeholder="Tú respuesta" name="url" secureTextEntry={false} value={values.url} onBlur={handleBlur('url')} onChangeText={handleChange('url')} input/>
                                {errors.url &&
                                    <StyleText error>{errors.url}</StyleText>
                                }
                        </StyleContainer>

                        <StyleContainer content_input>
                            <StyleText label >¿Cuál es el objetivo de tu campaña?</StyleText>
                            <StyleInput placeholder="Tú respuesta" name="object" secureTextEntry={false} vale={values.object} onBlur={handleBlur('object')} onChangeText={handleChange('object')} input/>
                                {errors.object &&
                                    <StyleText error>{errors.object}</StyleText>
                                }
                        </StyleContainer>

                        <StyleContainer content_input>
                            <StyleText label >¿Cuál es tu presupuesto?</StyleText>
                            <StyleInput placeholder="Tú respuesta" name="presupuesto" secureTextEntry={false} value={values.presupuesto} onBlur={handleBlur('presupuesto')} onChangeText={handleChange('presupuesto')} input/>
                                {errors.presupuesto &&
                                    <StyleText error>{errors.presupuesto}</StyleText>
                                }
                        </StyleContainer>

                        <StyleContainer content_input>
                            <StyleText label>¿A cuanto asciende tu objetivo de ventas?
                                (en dinero $)</StyleText>
                            <StyleInput placeholder="Tú respuesta" name="ventas" secureTextEntry={false} value={values.ventas} onBlur={handleBlur('ventas')} onChangeText={handleChange('ventas')} input/>
                                {errors.ventas &&
                                    <StyleText error>{errors.ventas}</StyleText>
                                }
                        </StyleContainer>

                        <StyleContainer content_input>
                            <StyleText label >¿A cuánto asciende tu ticket promedio?
                                (en dinero $) El ticket promedio se refiere a cuanto
                                cuesta en promedio tu producto o servicio</StyleText>
                            <StyleInput placeholder="Tú respuesta" name="ticket" secureTextEntry={false} value={values.ticket} onBlur={handleBlur('ticket')} onChangeText={handleChange('ticket')} input/>
                                {errors.ticket &&
                                    <StyleText error>{errors.ticket}</StyleText>
                                }
                        </StyleContainer>

                        <StyleButtonForm onPress={handleSubmit} button text="ENVIAR">
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