import React from "react";
import NavBar from "./components/Client/NavBar";
import Home from "./components/Client/Home";
import Signup from "./components/Client/Signup";
import Login from "./components/Client/Login";
import LandForm from "./components/Client/LandForm";
import { Route, Routes } from "react-router-dom";
export default function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/user/signup" element={<Signup/>}/>
      <Route path="/user/login" element={<Login/>}/>
      <Route path="/user/landform" element={<LandForm/>}/>
    </Routes>

    </>

  )

}
