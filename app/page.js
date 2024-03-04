"use client";

import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import {
  setSelectedRegion,
  setSelectedDuration,
} from "@/redux/features/tenant";

import { regionsOfGhana } from "@/components/auth/RegionTimeFilter";

import { useRouter } from "next/navigation";

import { useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const newUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (newUser?.role?.name == "TENANT") {
      router.push("rentals");
    } else if (newUser?.role?.name == "LANDLORD") {
      router.push("landlord");
    } else if (newUser?.role?.name == "ADMIN") {
      router.push("admin");
    } else {
      return;
    }

    return () => {};
  }, []);

  return (
    <div className="bg-[url('https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg')] bg-cover min-h-screen ">
      <div className="content  pt-20 px-8 min-h-screen flex items-center">
        <div className="px-16">
          {/* Large Heading  */}
          <div className="mt-20 text-8xl tracking-wide font-poppins font-bold text-white my-auto">
            <p>Rent</p>
            <p>An Apartment</p>
          </div>
          {/* Action section */}
          <div className="mt-4 text-white font-semibold">
            <p>Find your next home,</p>
            <p>In a lovely place...</p>

            {/* The search inputs */}
            <div className="searchInput bg-white h-[50px] mt-4 py-1 overflow-hidden grid grid-cols-3 items-center divide-x rounded-md text-gray-600 font-normal px-1">
              {/* Region */}
              <select
                name="cars"
                id="cars"
                className="h-full px-2 rounded-s rounded-e"
                placeholder="choose Region"
                onChange={(e) => {
                  dispatch(setSelectedRegion(e.target.value));
                }}
              >
                <option value="" disabled>
                  choose Region
                </option>
                {regionsOfGhana.map((region) => (
                  <option value={region?.name} key={region.name}>
                    {region?.name}
                  </option>
                ))}
              </select>
              {/* Duration */}
              <select
                name="cars"
                id="cars"
                className="h-full px-2"
                placeholder="choose Region"
                onChange={(e) => {
                  dispatch(setSelectedDuration(e.target.value));
                }}
              >
                <option value="" disabled>
                  choose Region
                </option>
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
              </select>

              {/* search Btn */}
              <button
                className="bg-yellow-500 ml-2 text-white h-full rounded"
                onClick={() => router.push("/rentals")}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
