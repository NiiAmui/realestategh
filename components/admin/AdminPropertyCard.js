import React from "react";
import Image from "next/image";
import {
  MapPinIcon,
  HeartIcon,
  CalendarIcon,
  BanknotesIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

const PropertyCard = ({ rental }) => {
  return (
    <div className="p-4 flex gap-4 border rounded-md bg-white w-full">
      {/* image */}
      <div className="w-[150px] object-cover rounded-md overflow-hidden">
        {/* <Image
          src={
            rental?.images[0]?.blob
          }
          alt="image"
          width={120}
          height={120}
          className="rounded-md"
        /> */}

        <img
          alt="image"
          src={rental?.image}
          className="min-w-full object-cover rounded-md"
        />
      </div>

      {/* rental Information */}
      <div className="rentalInfo w-full">
        {/* name of rental and amount per month */}
        <div className="grid grid-cols-3 justify-between">
          {/* name */}
          <p className="text-lg font-medium">{rental?.name}</p>
          {/* rental status */}
          <div className="rentalStatus text-right">
            {rental.tenant && (
              <p className="bg-green-300 w-fit px-3 py-1 rounded-lg text-white text-xs">
                Occupied
              </p>
            )}
            {!rental.tenant && (
              <p className="bg-red-300 w-fit px-3 py-1 rounded-lg text-white text-xs">
                UnOccupied
              </p>
            )}
          </div>
          {/* rent per month */}
          <div className="text-right">
            <p className="font-medium">${rental.rent}</p>
            <p className="text-xs text-gray-400">per month</p>
          </div>
        </div>
        {/* location */}
        <div className="text-gray-500 flex items-center gap-1  mt-">
          {/* icon */}
          <MapPinIcon className="w-4" />
          {/* location Name */}
          <p className="text-xs">{rental.location}</p>
        </div>
        {/* Lower info cards */}
        <div className="lowerInfoCards mt-4 flex justify-between divide-x">
          {/* wishlist */}
          <div className="flex gap-2 items-center">
            {/* icon */}
            <HeartIcon className="h-6" />
            {/* Details */}
            <div className="details">
              <p className="text-xs text-gray-400">In Wishlist of</p>
              <p className="font-medium">20 Visitors</p>
            </div>
          </div>

          {/* down Payment */}
          <div className="flex gap-2 items-center pl-[10%]">
            {/* icon */}
            <BanknotesIcon className="h-6" />
            {/* Details */}
            <div className="details">
              <p className="text-xs text-gray-400">Down Payment</p>
              <p className="font-medium">20 %</p>
            </div>
          </div>
          {/* Tenant */}
          <div className="flex gap-2 items-center pl-[10%]">
            {/* icon */}
            <BuildingOfficeIcon className="h-6" />
            {/* Details */}
            <div className="details">
              <p className="text-xs text-gray-400">Tenant</p>
              <p className="font-medium text-xs">N/A</p>
            </div>
          </div>
          {/* End Date */}
          <div className="flex gap-2 items-center pl-[10%]">
            {/* icon */}
            <CalendarIcon className="h-6" />
            {/* Details */}
            <div className="details">
              <p className="text-xs text-gray-400">End Date</p>
              <p className="font-medium text-xs">N/A</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
