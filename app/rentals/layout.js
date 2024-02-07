"use client";

import "../globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { Providers } from "@/redux/provider";
import TopNavBar from "@/components/auth/TopNavBar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <section>
      <div className={inter.className}>
        <Providers>
          {!pathname.includes("auth") && <TopNavBar />}
          {children}
        </Providers>
      </div>
    </section>
  );
}
