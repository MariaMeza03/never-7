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

const Main = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/form' element={<Form/>} />
            <Route path='/quoter' element={<Quoter/>} />
            <Route path='/result' element={<Result/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/profile' element={<Profile />} />
        </Routes>

    )
}

export default Main
