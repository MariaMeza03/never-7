import React, { useState } from "react";
import { View } from "react-native";
import { Formik } from 'formik';
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup';

//*Components
import Nav from "../components/Nav";

//*Css
import StyleText from "../../css/TextStyle";
import StyleInput   from "../../css/InputStyle";
import StyleImagen from "../../css/ImagenStyle";
import StyleButton from "../../css/ButtonStyle";
import StyleContainer from "../../css/ContainerStyle";
import StyleBackground from "../../css/BackgroundStyle";
import StyleContainerScroll from "../../css/ScrollViewStyle";
import StyleButtonForm from "../../css/ButtonStyleForm";

const loginValidationSchema = Yup.object().shape({
    user: Yup.string()
    /*.email("Please enter valid email")*/
    .required('El usuario es un campo requerido'),
    password: Yup.string()
    /*.min(8, ({ min }) => `La contraseña debe tener al menos ${min} caracteres`)*/
    .required('La contraseña es un campo requerido'),
})


const Home= () =>{

    const [user, setuser] = useState({})
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log(values)
        setuser(values)

        //*Unicamente prueba, la idea es conectarlo al back

        if(values.user === 'admin' && values.password === 'Licorne_130?'){
            console.log('Usuario y contraseña correctos')
            navigate('/form')
        }else{
            alert('Usuario y/o contraseña incorrectos')
        }
	}

    return(

        <StyleContainerScroll container>
                <StyleBackground colors={['#FFDF17', '#00E2CF']}  background/> 
                <StyleImagen source={require('../img/Pc.webp')} imagen />

                <StyleContainer text>
                    <StyleText title >Login</StyleText>

                    <Formik  
                    validationSchema={loginValidationSchema}
                    initialValues={{ user: '', password: ''}} 
                    onSubmit={handleSubmit}>
                    {({ handleChange, handleBlur, handleSubmit, values , errors }) => (
                       <View>
                            <StyleContainer content_input>
                                <StyleInput placeholder="Usuario" name="user" input secureTextEntry={false} value={values.user}  onBlur={handleBlur('user')} onChangeText={handleChange('user')} />
                                {errors.user &&
                                    <StyleText error>{errors.user}</StyleText>
                                }
                            </StyleContainer >

                            <StyleContainer content_input>
                            <StyleInput placeholder="Usuario" input value={values.password} secureTextEntry={true} onBlur={handleBlur('password')} onChangeText={handleChange('password')} />
                                {errors.password &&
                                    <StyleText error>{errors.password}</StyleText>
                                }
                            </StyleContainer >

                            <StyleButtonForm onPress={handleSubmit} button text="INCIA SESIÓN">
                            </StyleButtonForm>

                        </View>
                        )}
                    </Formik>   

                    <StyleButton to="/register" button_sesion >
                        <StyleText  link_text>¡Regístrate!</StyleText>
                    </StyleButton>
                    
                </StyleContainer>

                <Nav/>

            </StyleContainerScroll>
      
    )
}
export default Home

