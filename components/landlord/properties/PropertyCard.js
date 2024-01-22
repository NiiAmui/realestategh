import React from "react";
import Image from "next/image";
import { MapPinIcon,HeartIcon } from "@heroicons/react/24/outline";

const PropertyCard = () => {
  return (
    <div className="p-4 shadow flex gap-4 rounded-md bg-white w-full">
      {/* image */}
      <div className="">
        <Image
          src={
            "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720"
          }
          alt="image"
          width={120}
          height={120}
          className="rounded-md"
        />
      </div>

      {/* rental Information */}
      <div className="rentalInfo w-full">
        {/* name of rental and amount per month */}
        <div className="flex justify-between">
          {/* name */}
          <p className="text-lg font-medium">3 bedroom House in Accra</p>
          {/* rent per month */}
          <p className="font-medium">$1,200</p>
        </div>
        {/* location */}
        <div className="text-gray-500 flex items-center gap-1  mt-2">
          {/* icon */}
          <MapPinIcon className="w-4" />
          {/* location Name */}
          <p className="text-xs">Accra, Central</p>
        </div>
          {/* Lower info cards */}
          <div className="lowerInfoCards mt-4">
            {/* wishlist */}
            <div className="flex gap-2 items-center">
                {/* icon */}
                <HeartIcon className="h-6"/>
                {/* Details */}
                <div className="details">
                    <p className="text-xs text-gray-400">In Wishlist of</p>
                    <p className="font-medium">20 Visitors</p>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default PropertyCard;
