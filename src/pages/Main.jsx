import React from "react";
import { Routes } from "react-router-native";
import { Route } from "react-router-native";

//*Pages
import Home from "./Home";

import Register from "./Register";
import Profile from "./Profile";
import ChangeEmail from "./ForgetPassword";
import ChangePass from "./ChangePassword";
import EmailOne from "./EmailOne";

const Main = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ForgetPassword' element={<ChangeEmail />} />
            <Route path='/ChangePassword' element={<ChangePass/>} />
            <Route path='/EmailOne' element={<EmailOne/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/profile' element={<Profile />} />
        </Routes>

    )
}

export default Main
