import React from "react";
import { Routes } from "react-router-native";
import { Route } from "react-router-native";

//*Pages
import Home from "./Home";

import Register from "./Login/Register";
import Profile from "./Profile";
import ChangeEmail from "./Login/ForgetPassword";
import ChangePass from "./Login/ChangePassword";
import EmailOne from "./Login/EmailOne";

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
