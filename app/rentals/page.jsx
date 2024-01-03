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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el) => (
          <HouseCard key={el}  el={el}/>
        ))}
      </div>
    </div>
  );
}

export default Home;
