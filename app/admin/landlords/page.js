"use client";

import LandLordCard from "@/components/landlord/admin/LandLordCard";
import React from "react";

import { useFetchLandlordsQuery } from "@/redux/features/admin/api";

const someLandlords = [1, 2, 3, 4];

const LandlordsPage = () => {
  const { data, isLoading } = useFetchLandlordsQuery();

  console.log('data from landlords :>> ', data);

  return (
    <>
      {/* when loading */}
      {isLoading && (
        <div className="p-4 text-center text-lg font-medium ">Loading...</div>
      )}
      {!isLoading && (
        <div className="p-4">
          {/* header */}
          <p className="text-lg font-medium text-center">Available Landlords</p>

          {/* cards of landlords */}
          <div className="mt-10 max-w-fit flex gap-6">
            {data?.map((el) => (
              <LandLordCard key={el.id} landlord={el} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default LandlordsPage;
