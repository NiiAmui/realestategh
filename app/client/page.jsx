"use client";

import React from "react";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
import HouseCard from "@/components/user/HouseCard";

import Layout from "./layout";
import RootLayout from "../layout";

function Home() {
  return (
    <div className="px-8 mb-20">
      {/* the container for all the available houses */}
      <div className="allContainerClasses grid grid-cols-6 justify-center gap-x-2 gap-y-8">
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
    </div>
  );
}

export default Home;
