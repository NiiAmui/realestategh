"use client";
import React, { useState } from "react";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";

import LogoToHome from "@/components/LogoToHome";

export function Auth() {
  const [currentView, setcurrentView] = useState(false);

  return (
    <div className="Authentication flex min-h-screen">
      {/* Form which has the login or registration details */}
      <section className="leftContainer  flex flex-col mt-[7%] mb-[10%] items-center w-full lg:w-[40%] lg:pl-[15px]">
         <LogoToHome />

        {/* the toggler between login and register */}
        <div
          onClick={() => setcurrentView((prev) => !prev)}
          className="selectorContainer w-[300px] rounded-[5px] flex justify-between bg-gray-200 p-2 relative mt-10"
        >
          <button
            className={`h-[47px] w-[142px] font-medium z-10 rounded-[5px] bg-white text-gray-700  transition-all duration-500 ease-in-out ${
              currentView && " translate-x-[100%]"
            }`}
          >
            {!currentView && (
              <p className="transition-all delay-300">Sign In</p>
            )}
            {currentView && <p className="transition-all delay-500">Sign Up</p>}
          </button>
          {/* Sign in Text */}
          <p className=" absolute top-[33%] left-8 font-medium text-gray-400 cursor-pointer">
            Sign In
          </p>
          {/* Sign Up Text */}
          <p className=" absolute top-[33%] font-medium right-8 text-gray-400 cursor-pointer">
            Sign Up
          </p>
        </div>
        {/* authentication forms */}
        <div className="mt-5 w-[70%] transition-all duration-500 ease-in-out">
          {!currentView && <LoginForm />}
          {currentView && <RegisterForm setcurrentView={setcurrentView}/>}
        </div>
      </section>

      {/* Hero section which has the hero images */}
      <div className="rightContainer bg-[url('https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg')] bg-cover backdrop-brightness-10 flex-col justify-center sticky top-0 h-screen hidden lg:flex w-full">
        <div className="content  flex flex-col items-center">
          {/* <div className="image">
            <Image src={HeroImage} className="w-[377px]" alt="heroImage" />
          </div> */}
          <div className="glassCard backdrop-brightness-10 mt-24 text-center flex items-center justify-center brightness- z-10">
            <p className="quote">
              Find your next home
              <br />
              <span className="font-[700] italic">Very easily</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
