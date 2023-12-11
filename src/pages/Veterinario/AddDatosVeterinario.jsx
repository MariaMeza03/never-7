
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
    specialty: Yup.string()
    .required('Campo abligatorio *'),
    address: Yup.string()
    .required('Campo obligatorio *'),
    schedule: Yup.string()
    .required('Campo abligatorio *'),
})


const AddDatosVeterinario= ({checked}) =>{

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

     <HeaderVeterinarioChangeImagen
     title="Perfil Veterinario"/>
           
           <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ name: '', specialty: '', schedule:'', phone:''}} 
            onSubmit={handleSubmit}>
                {({ handleChange, handleBlur, handleSubmit, values , errors }) => (

                    <StyleContainer content_form_form_formik >

                        <StyleContainer content_input>
                            <StyleInput placeholder="Jhon" name="name" secureTextEntry={false} value={values.name} onBlur={handleBlur('name')} onChangeText={handleChange('name')} input/>
                                {errors.name &&
                                    <StyleText error>{errors.name}</StyleText>
                                }
                        </StyleContainer>

                        <StyleContainer content_input>
                            <StyleInput placeholder="Especialidad" secureTextEntry={true} name="specialty" vale={values.specialty} onBlur={handleBlur('specialty')} onChangeText={handleChange('specialty')} input/>
                                {errors.specialty &&
                                    <StyleText error>{errors.specialty}</StyleText>
                                }
                        </StyleContainer>

                        <StyleContainer content_input>
                            <StyleInput placeholder="Telefono" name="phone" secureTextEntry={true} value={values.phone} onBlur={handleBlur('phone')} onChangeText={handleChange('phone')} input/>
                                {errors.phone &&
                                    <StyleText error>{errors.phone}</StyleText>
                                }
                        </StyleContainer>

                        <StyleContainer content_input>
                            <StyleInput placeholder="Horario" name="schedule" secureTextEntry={false} value={values.schedule} onBlur={handleBlur('schedule')} onChangeText={handleChange('schedule')} input/>
                                {errors.schedule &&
                                    <StyleText error>{errors.schedule}</StyleText>
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
export default AddDatosVeterinario