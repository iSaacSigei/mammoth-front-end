import React, { useEffect, useState } from "react";
import Home from "./components/Client/Home";
import Signup from "./components/Client/Signup";
import Login from "./components/Client/Login";
import LandForm from "./components/Client/LandForm";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/AdminDashboard"
import AdminLogin from './components/Admin/AdminLogin'
import LandPage from './components/Admin/LandPage'
import Users from './components/Admin/Users'
export default function App() {
  const [user, setUser]=useState({})
  const [admin, setAdmin]=useState({})
  console.log(admin)
  useEffect(()=>{
    fetch('/user')
    .then(r=>r.json())
    .then(user=>{
      console.log(user)
      setUser(user)
    })
  },[])
  
  useEffect(()=>{
    fetch('/admin')
    .then(r=>r.json())
    .then(user=>{
      console.log(user)
      setAdmin(user)
    })
  },[])

  return (
    <>
    <Routes>
      <Route path="/" element={<Home user={user}/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/user/login" element={<Login/>}/>
      <Route path="/user/landform" element={<LandForm user={user}/>}/>
      <Route path="/admin" element={<Admin admin={admin}/>}/>
      <Route path='/admin_signin' element={<AdminLogin/>}/>
      <Route path="/admin/give_quotation/:id" element={<LandPage admin={admin}/>}/>
      <Route path='/admins/users' element={<Users admin={admin}/>}/>
    </Routes>

    </>

  )

}
