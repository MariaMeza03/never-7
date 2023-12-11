
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

//*Css
import StyleContainer from "../../../css/ContainerStyle";
import StyleContainerScroll from "../../../css/ScrollViewStyle";
import StyleText from "../../../css/TextStyle";
import StyleInput   from "../../../css/InputStyle";
import StyleButtonForm from "../../../css/ButtonStyleForm";
import StyleButton from "../../../css/ButtonStyle";
import HeaderVeterinarioChangeImagen from "../../components/layouts/HeaderVeterinarioTwo";
import Listenbutton from "../../components/layouts/Listenbutton";

const loginValidationSchema = Yup.object().shape({
    name: Yup.string()
    .required('Campo obligatorio *'),
    email: Yup.string()
    .email("Ingrese un email valido")
    .required('Campo abligatorio *'),
    address: Yup.string()
    .required('Campo obligatorio *'),
    phone: Yup.string()
    .required('Campo abligatorio *'),
})


const AddDatosClinica= ({checked}) =>{

    const [user, setuser] = useState({})
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        setuser(values)

        //*Unicamente prueba, la idea es conectarlo al back

        if(values.name !== ''){
            navigate('/addDatosVeterinario')
        }else{
            alert('Todos los datos son necesarios, te agredecemos que ingreses la información correcta')
        }
	}

    return(

    <StyleContainerScroll container>       

     <HeaderVeterinarioChangeImagen
     title="Perfil Veterinario"/>
           
           <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ name: '', email: '', password:'', phone:''}} 
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
                            <StyleInput placeholder="Direccion" secureTextEntry={true} name="address" vale={values.address} onBlur={handleBlur('address')} onChangeText={handleChange('address')} input/>
                                {errors.address &&
                                    <StyleText error>{errors.address}</StyleText>
                                }
                        </StyleContainer>

                        <StyleContainer content_input>
                            <StyleInput placeholder="Telefono" name="phone" secureTextEntry={true} value={values.phone} onBlur={handleBlur('phone')} onChangeText={handleChange('phone')} input/>
                                {errors.phone &&
                                    <StyleText error>{errors.phone}</StyleText>
                                }
                        </StyleContainer>

                        <StyleContainer content_input>
                            <StyleInput placeholder="Email" name="email" secureTextEntry={false} value={values.email} onBlur={handleBlur('email')} onChangeText={handleChange('email')} input/>
                                {errors.email &&
                                    <StyleText error>{errors.email}</StyleText>
                                }
                        </StyleContainer>


                        <StyleButtonForm onPress={handleSubmit} button text="Guardar">
                        </StyleButtonForm>

                    </StyleContainer>

                )}
            </Formik>
       
        <Listenbutton/>


    </StyleContainerScroll>
      
    )
}
export default AddDatosClinica