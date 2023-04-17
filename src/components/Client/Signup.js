import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Logo from '../images/woolly-mammoth-drawing-elephant-clip-art-png-favpng-DvwsEH9iK0Cdqa7LLSPm6PD83-removebg-preview (2).png'
import "react-toastify/dist/ReactToastify.css";
export default function Signup() {
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState('')
    const [password_confirmation, setPasswordConfirmatio]=useState('')
    const [username, setUsername]=useState("")
    const [errors, setErrors] = useState([]);

    const nav=useNavigate()
    const showToastMessage = () => {
        toast("Signup Successfull!", {
          position: toast.POSITION.TOP_CENTER,
          className: 'toast-message'    
        });
      };

      function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        fetch("https://mammoth-backend-app-production.up.railway.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            username,
            password,
            password_confirmation
          }),
        }).then((r) => {
          if (r.ok){
            showToastMessage();
              nav("/user/login");
          } else {
            r.json().then((err) => {
              setErrors(err.errors);
              console.log(errors);
            });
          }
        });
      }
    return (
      <>
      <ToastContainer/>
        <div className="flex min-h-full flex-col justify-center py-3 sm:px-6 lg:px-6">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-12 w-auto"
              src={Logo}
              alt="Logo"
            />
            <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-indigo-900">Create your account</h2>
            <p className="text-center text-sm font-sm pt-2 ">Alreay have an account?<Link to='/user/login' className="text-indigo-900 pl-1.5">Login here</Link></p>
     
          </div>

          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
              <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e)=>setEmail(e.target.value)}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      onChange={(e)=>setPassword(e.target.value)}
                      name="password"
                      type="password"
                      required
                      className="block w-full rounded-md border-0 py-1 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password_confirmation" className="block text-sm font-medium leading-6 text-gray-900">
                   Confirm Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password_confirmation"
                      onChange={(e)=>setPasswordConfirmatio(e.target.value)}
                      name="password_confirmation"
                      type="password"
                      required
                      className="block w-full rounded-md border-0 py-1 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      onChange={(e)=>setUsername(e.target.value)}
                      name="username"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-1 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
  