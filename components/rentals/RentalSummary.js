import Image from "next/image";
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const RentalSummary = () => {
  return (
    <div className="rentalReservation border w-[400px] p-4 rounded-md">
      {/* upper part */}
      <div className="flex gap-4">
        {/* image */}
        <Image
          src={
            "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720"
          }
          alt="image"
          width={80}
          height={80}
          className="rounded-md"
        />

        {/* text part */}
        <div className="textPart flex flex-col justify-between">
          {/* name */}
          <p className="font-medium text-md text-gray-700 text-sm">
            Kwamena Villa
          </p>

          {/* review and score */}
          <div className="reviewNScore flex gap-1 text-xs">
            <StarIcon className="w-4" />
            <p>5.00</p>
            <p className="text-gray-400 font-light">(1 review)</p>
          </div>
        </div>
      </div>

      <hr className="mt-4 mb-4" />

      {/* price details */}
      <div className="priceDetails">
        {/* heading */}
        <p className="text-lg font-medium">Price Details</p>

        <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
          {/* monthly */}
          <p>Monthly cost</p>
          {/* price */}
          <p>$ 500</p>
          {/* monthly */}
          <p>Yearly cost</p>
          {/* price */}
          <p>$ 6000</p>
        </div>
      </div>

      <hr className="mt-4 mb-4" />

      {/* total */}
      <div className="total font-semibold grid grid-cols-2">
        <p>Total Yearly cost</p>
        {/* price */}
        <p>$ 6000</p>
      </div>
    </div>
  );
};

export default RentalSummary;
