"use client";

import React from "react";
import { usePathname } from 'next/navigation'
import { useState,useEffect } from "react";

import {
  UserCircleIcon,
  AdjustmentsHorizontalIcon,
  LifebuoyIcon,
  FireIcon, CakeIcon
} from "@heroicons/react/24/outline";
import ModalCard from "./ModalCard";
import RegionTimeFilter from "./RegionTimeFilter";

export const metadata = {
  title: "Ghana Realtor",
  description: "Best platform to find your next home",
};

import LogoToHome from "../LogoToHome";
import Link from "next/link";
import { useParams } from "next/navigation";

const TopNavBar = () => {
  const params = useParams()
  const pathname = usePathname()
  useEffect(()=>{
    console.log('router stuff', pathname)
  },[pathname])
  
  const [openFilter, setopenFilter] = useState(false);

  const closeFilter = () => {
    setopenFilter(false);
  };
  return (
    <>
      <div className="w-full flex justify-between lg:px-8 py-4 border-b items-center">
        {/* logo */}
        <LogoToHome />

        {/* MidSection */}
        <div className="p-2 flex  divide-x border rounded-lg">
          <p className="px-3 font-medium">Anywhere</p>
          <p className="px-3 font-medium">Any Time</p>
          <p className="px-3 font-medium">Anywhere</p>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-x-4">
          {/* login */}
          {true && (
            <Link href={'/auth'}>
            <div className="flex text-sm divide-x cursor-pointer" >
              <p className="px-2 font-medium">Sign In</p>
              <p className="px-2 font-medium">Sign Up</p>
            </div>
            </Link>
          )}
          <UserCircleIcon className="w-8 stroke-[1.5] cursor-pointer" />
        </div>
      </div>

      
      {!params?.id && pathname !== '/rentals/reservation' && pathname !== '/rentals/tour/rentals/rental' && pathname !== '/rentals/tour/rentals/rental/rental' && <div className="filters justify-between lg:px-8 py-4 mt-2 text-sm text-gray-600 flex gap-6">
        {/* AMENITIES OR FACILITIES */}
        <div className="filters flex gap-6">
          {/* swimming pool */}
          <div className="flex items-center gap-2 cursor-pointer">
            {/*  */}
            <p>Swimming Pool</p>
            <div>
              <LifebuoyIcon className="w-5" />
            </div>
          </div>
          {/* swimming pool */}
          <div className="flex items-center gap-2 cursor-pointer">
            {/*  */}
            <p>Gym</p>
            <div>
              <FireIcon className="w-5" />
            </div>
          </div>
          {/* swimming pool */}
          <div className="flex items-center gap-2 cursor-pointer">
            {/*  */}
            <p>Kitchen</p>
            <div>
              <CakeIcon className="w-5" />
            </div>
          </div>
        </div>

        {/* filter */}
        <div
          className="flex gap-2 items-center px-3 cursor-pointer py-2 border rounded-lg border-gray-400"
          onClick={() => setopenFilter(true)}
        >
          {/* icon */}
          <AdjustmentsHorizontalIcon className="w-5" />
          {/* text */}
          <p>Filter</p>
        </div>
      </div>}

      {openFilter && (
        <ModalCard close={() => closeFilter()}>
          <RegionTimeFilter />
        </ModalCard>
      )}
    </>
  );
};

export default TopNavBar;
