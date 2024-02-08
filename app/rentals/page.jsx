"use client";

import React from "react";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
import HouseCard from "@/components/user/HouseCard";

import Layout from "./layout";
import RootLayout from "../layout";

import { useFetchPropertiesQuery } from "@/redux/features/landlord/api";

import { useSelector } from "react-redux";
import { selectedDuration,selectedRegion } from "@/redux/features/tenant";

// function to limit the number of notifications shown at a time
// Array.prototype.filterRegionClient = function () {
//   let result = this;
//   if (region) {
//     result = this.filter(el=>el.region == region);
//   } else {
//     return result;
//   }
//   return result;
// };

function Home() {
  const { data, isLoading, } = useFetchPropertiesQuery();

  const region = useSelector(selectedRegion)
  const duration = useSelector(selectedDuration)

  const filterByRegion =(data)=>{
    if(region){
      const filteredRegion = data.filter(el=>el.region == region);
      console.log(('ffffff',filteredRegion));
    }else{
      return data;
    }
  }

  

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

      {!filterByRegion(data) && <div>No data can be found</div>}
    </div>
  );
}

export default Home;
