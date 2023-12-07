import React, { useState } from "react";
import { View, Text } from "react-native";
import { Formik } from 'formik';
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup';
import { CheckBox } from 'react-native-elements'

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


const Home= ({checked}) =>{

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
                <StyleBackground colors={['#FFFF', '#FFFFFF']}  background/> 
                <StyleImagen source={require('../img/header.webp')} imagen />

                <StyleContainer text>
                    <StyleText title >¡Hola! Bienvenid@</StyleText>

                    <Formik  
                    validationSchema={loginValidationSchema}
                    initialValues={{ user: '', password: ''}} 
                    onSubmit={handleSubmit}>
                    {({ handleChange, handleBlur, handleSubmit, values , errors }) => (
                       <View>
                            <StyleContainer content_input>
                                <StyleInput placeholder="Email" name="user" input secureTextEntry={false} value={values.user}  onBlur={handleBlur('user')} onChangeText={handleChange('user')} />
                                {errors.user &&
                                    <StyleText error>{errors.user}</StyleText>
                                }
                            </StyleContainer >

                            <StyleContainer content_input>
                            <StyleInput placeholder="Password" input value={values.password} secureTextEntry={true} onBlur={handleBlur('password')} onChangeText={handleChange('password')} />
                                {errors.password &&
                                    <StyleText error>{errors.password}</StyleText>
                                }
                            </StyleContainer >

                            <StyleContainer content_password>
                                <CheckBox checked={checked} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' center/>
                                <StyleText link_text>Recodar           </StyleText>

                                <StyleButton to="/register" button_sesion >
                                    <StyleText  link_password>Olvidate tu password?</StyleText>
                                </StyleButton>
                             </StyleContainer>

                            <StyleButtonForm onPress={handleSubmit} button text="Inicias sesión">
                            </StyleButtonForm>

                        </View>
                        )}
                    </Formik>  

                    <StyleContainer content_new_user>
                        <Text>No tienes usuario</Text>
                        <StyleButton to="/register" button_sesion >
                            <StyleText  link_register> ¡Regístrate!</StyleText>
                        </StyleButton>
                    </StyleContainer>

                    <StyleContainer  content_media_two>
                        <StyleButton to="/register" button_sesion >
                            <StyleImagen source={require('../img/google.png')} imagen />
                        </StyleButton>

                        <StyleButton to="/register" button_sesion >
                            <StyleImagen source={require('../img/facebook.png')} imagen />
                        </StyleButton>
                    </StyleContainer>

                   
                    
                </StyleContainer>


            </StyleContainerScroll>
      
    )
}
export default Home
