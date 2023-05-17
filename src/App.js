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
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  console.log(user);
  console.log(admin);
  
  useEffect(() => {
    fetch('/user', {
      credentials: 'include'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(user => {
        setUser(user);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
        // Handle error state here
      });
  }, []);
  
  useEffect(() => {
    fetch('/admin', {
      credentials: 'include'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(admin => {
        setAdmin(admin);
      })
      .catch(error => {
        console.error('Error fetching admin:', error);
        // Handle error state here
      });
  }, []);
  
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
