"use client";

import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

import {
  UserCircleIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import ModalCard from "./ModalCard";
import RegionTimeFilter from "./RegionTimeFilter";

export const metadata = {
  title: "Ghana Realtor",
  description: "Best platform to find your next home",
};

const TopNavBar = () => {
    const [openFilter, setopenFilter] = useState(false)

    const closeFilter=()=>{
        console.log('closing 2222');
        setopenFilter(false)
    }
  return (
    <>
      <div className="w-full flex justify-between lg:px-8 py-4 border-b items-center">
        {/* logo */}
        <div className="cursor-pointer testr">Logo</div>

        {/* MidSection */}
        <div className="p-2 flex  divide-x border rounded-lg">
          <p className="px-3 font-medium">Anywhere</p>
          <p className="px-3 font-medium">Any Time</p>
          <p className="px-3 font-medium">Anywhere</p>
        </div>

        {/* Profile */}
        <div>
          {/* login */}
          {false && (
            <div className="flex text-sm divide-x">
              <p className="px-2 font-medium">Sign In</p>
              <p className="px-2 font-medium">Sign Up</p>
            </div>
          )}
          <UserCircleIcon className="w-8 stroke-[1.5] cursor-pointer" />
        </div>
      </div>
      <div className="filters justify-between lg:px-8 py-4 mt-2 text-sm text-gray-600 flex gap-6">
        {/* AMENITIES OR FACILITIES */}
        <div className="filters flex gap-6">
          {/* swimming pool */}
          <div className="flex items-center gap-2 testr">
          {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
            <label htmlFor="swimming">Swimming Pool</label>
          </div>
          {/* swimming pool */}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="gym" />
            <label htmlFor="gym">Gym</label>
          </div>
          {/* swimming pool */}
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label>Swimming Pool</label>
          </div>
        </div>

        {/* filter */}
        <div className="flex gap-2 items-center px-3 cursor-pointer py-2 border rounded-lg border-gray-400" onClick={()=>setopenFilter(true)}>
          {/* icon */}
          <AdjustmentsHorizontalIcon className="w-5" />
          {/* text */}
          <p>Filter</p>
        </div>
      </div>

      {openFilter && <ModalCard close={()=>closeFilter()}>
        <RegionTimeFilter />
      </ModalCard>}
    </>
  );
};

export default TopNavBar;
