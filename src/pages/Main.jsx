import React from "react";
import { Routes } from "react-router-native";
import { Route } from "react-router-native";

//*Pages
import Home from "./Home";
import Form from "./Form";
import Quoter from "./Quoter";
import Result from "./Result";
import Register from "./Register";
import Profile from "./Profile";
import ChangeEmail from "./ForgetPassword";
import ChangePass from "./ChangePassword";
import EmailOne from "./EmailOne";

const Main = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/form' element={<Form/>} />
            <Route path='/ForgetPassword' element={<ChangeEmail />} />
            <Route path='/ChangePassword' element={<ChangePass/>} />
            <Route path='/EmailOne' element={<EmailOne/>} />
            <Route path='/quoter' element={<Quoter/>} />
            <Route path='/result' element={<Result/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/profile' element={<Profile />} />
        </Routes>

    )
}

export default Main
