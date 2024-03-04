"use client";

import "../globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import TopNavBar from "@/components/admin/TopNavbar.js";

import { Providers } from "@/redux/provider";
import { usePathname } from "next/navigation";
import SideDrawer from "@/components/admin/SideDrawer";

import { useEffect } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <div>
      <div>
        {/* <Providers > */}
        <div className="w-full flex min-h-screen">
          {/* left drawer */}
          <SideDrawer />
          {/* rightContents */}
          <div className="rightContents grow">
            {/* topNavbar */}
            <TopNavBar />
            {/* other child pages */}
            <div>{children}</div>
          </div>
        </div>
        {/* </Providers> */}
      </div>
    </div>
  );
}
