"use client";

import { useEffect } from "react";

import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { Providers } from "@/redux/provider";
import TopNavBar from "@/components/auth/TopNavBar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    console.log("the pathname is " + pathname);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {!pathname.includes("auth") && <TopNavBar />}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
