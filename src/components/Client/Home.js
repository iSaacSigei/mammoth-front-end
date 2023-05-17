import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Testimonials from "../Testimonials";
import { Link } from "react-router-dom";
const Home = ({user}) => {
  console.log()
  return (
    <>
    <NavBar user={user}/>
      <div className="bg-gray-700">
        <div className=" py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Want to sell land?
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              we got you, fill in the form below
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {user===null?(<Link
                to="/signup"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </Link>):
              (<Link
                to="/user/landform"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </Link>)}
              
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
