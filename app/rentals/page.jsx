"use client";

import React from "react";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
import HouseCard from "@/components/user/HouseCard";

import Layout from "./layout";
import RootLayout from "../layout";

import { useFetchPropertiesQuery } from "@/redux/features/landlord/api";



function Home() {
  const { data, isLoading, } = useFetchPropertiesQuery();

  if (isLoading){
    return <div className="w-full text-center h-full">Loading...</div>
  }

  return (
    <div className="px-8 mb-20">
      {/* the container for all the available houses */}
      {data && <div className="allContainerClasses flex gap-10 flex-wrap">
        {data.map((el) => (
          <HouseCard key={el.id}  rental={el} />
        ))}
      </div>}
    </div>
  );
}

export default Home;
