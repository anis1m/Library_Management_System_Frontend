import React from "react";
import Login from "./user/Login";
import Register from "./user/Register";
import { Outlet } from "react-router-dom";

const HomePage = () => {

    
    return (
       <>
           <div className="bg-[url('/images/banner.jpg')]
             bg-cover bg-center bg-no-repeat flex items-center justify-end  min-h-screen p-4">     
               <Outlet/>
             </div>
       </>
    );
};

export default HomePage;
