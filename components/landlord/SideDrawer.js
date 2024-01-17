'use client'

import { CubeTransparentIcon } from "@heroicons/react/24/solid";
import React from "react";

import { useEffect } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SideDrawer = () => {
  const pathname = usePathname();

  useEffect(()=>{
    console.log(pathname)
  },[])

  return (
    <div className="py-4 px-8 border-r">
      {/* Logo and toggle*/}
      <div>LOGO</div>

      {/* Links */}
      <div className="mt-10 text-sm text-gray-700">
        <ul>
          <li className="">
            <Link href="/landlord">
              <div className={`linkContainer rounded flex gap-2 px-3 py-2 ${pathname==='/landlord'?'bg-gray-200':''}`}>
                {/* icon */}
                <CubeTransparentIcon className="w-4" />
                <p>Dashboard</p>
              </div>
            </Link>
          </li>
          <li className="mt-2">
            <Link href="/properties">
              <div className={`linkContainer rounded flex gap-2 px-3 py-2 ${pathname==='/properties'?'bg-gray-200':''}`}>
                {/* icon */}
                <CubeTransparentIcon className="w-4" />
                <p>Properties</p>
              </div>
            </Link>
          </li>
          <li className="mt-2">
            <Link href="/messages">
              <div className={`linkContainer rounded flex gap-2 px-3 py-2 ${pathname==='/messages'?'bg-gray-200':''}`}>
                {/* icon */}
                <CubeTransparentIcon className="w-4" />
                <p>Messages</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
