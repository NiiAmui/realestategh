"use client";

import "../globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import TopNavBar from "@/components/landlord/TopNavBar";

import { Providers } from "@/redux/provider";
import { usePathname } from "next/navigation";
import SideDrawer from "@/components/landlord/SideDrawer";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Providers >
          <di className="w-full flex min-h-screen">
            {/* left drawer */}
            <SideDrawer />
            {/* rightContents */}
            <div className="rightContents grow">
              {/* topNavbar */}
              <TopNavBar />
              {/* other child pages */}
              <div >{children}</div>
            </div>
          </di>
        </Providers>
      </body>
    </html>
  );
}
