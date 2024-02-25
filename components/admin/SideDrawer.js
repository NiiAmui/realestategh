'use client'

import { CubeTransparentIcon,HomeModernIcon,EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";

import { useEffect } from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const SideDrawer = () => {
  const pathname = usePathname();
  const router = useRouter()

  useEffect(()=>{
  },[])

  return (
    <div className="py-4 px-8 border-r sticky h-screen top-0">
      {/* Logo and toggle*/}
      <div onClick={()=>{router.push('/admin')}} className="cursor-pointer">LOGO</div>

      {/* Links */}
      <div className="mt-10 text-sm text-gray-700">
        <ul>
          <li className="">
            <Link href="/landlord">
              <div className={`linkContainer rounded flex gap-2 px-3 py-2 ${pathname==='/admin'?'bg-gray-200':''}`}>
                {/* icon */}
                <CubeTransparentIcon className="w-4" />
                <p>Dashboard</p>
              </div>
            </Link>
          </li>
          <li className="mt-2">
            <Link href="/landlord/properties">
              <div className={`linkContainer rounded flex gap-2 px-3 py-2 ${pathname==='/landlord/properties'?'bg-gray-200':''}`}>
                {/* icon */}
                <HomeModernIcon className="w-4" />
                <p>Landlords</p>
              </div>
            </Link>
          </li>
          <li className="mt-2">
            <Link href="/landlord/messages">
              <div className={`linkContainer rounded flex gap-2 px-3 py-2 ${pathname==='/landlord/messages'?'bg-gray-200':''}`}>
                {/* icon */}
                <EnvelopeIcon className="w-4" />
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
