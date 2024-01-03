"use client";

import React from "react";
import Link from "next/link";

import LogoToHome from "./LogoToHome";

const LandingPageNavBar = () => {
  return (
    <div className="px-8 absolute min-w-full text-gray-500">
      <div className="w-full flex justify-between py-4 items-center">
        {/* logo */}
        <LogoToHome />

        {/* MidSection */}
        <div className="p-2 flex  divide-x divide-gray-500 border border-gray-500 rounded-lg cursor-pointer">
          <p className="px-3 font-medium">LandLords</p>
          <Link href={'/rentals'}>
          <p className="px-3 font-medium">Find a Place</p>
          </Link>
          {/* <p className="px-3 font-medium">Anywhere</p> */}
        </div>

        {/* Profile */}
        <div className="flex items-center gap-x-4">
          {/* login */}
          {true && (
            <Link href={"/auth"}>
              <div className="flex text-sm divide-x divide-gray-500 cursor-pointer">
                <p className="px-2 font-medium">Sign In</p>
                <p className="px-2 font-medium">Sign Up</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPageNavBar;
