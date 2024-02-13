import React from "react";
import Link from "next/link";
import dayjs from "dayjs";

const ReserveActionCard = ({price,availableDate}) => {
  return (
    <div className="card border p-4 rounded-md shadow">
      {/* title */}
      <div className="flex items-center text-lg font-semibold">
        <p className="">{price}</p>/
        <p className="text-gray-500 italic font-normal text-sm">month</p>
      </div>
      {/* date Pickers */}
      <div className="border rounded mt-2 grid grid-cols-2 divide-x">
        {/* date available */}
        <div className="checkInDate text-left p-3">
          <p className="font-normal text-xs">Date Available</p>
          <p className="mt-1 font-medium">{dayjs(availableDate).format('DD MMM YYYY')}</p>
        </div>
        {/* date available */}
        <div className="checkInDate text-left p-3 text-right">
          <p className="font-normal text-xs">Down Payment</p>
          <p className="mt-1 font-medium">{(price * 12)*.20}</p>
        </div>
      </div>

      {/* Reservation Button */}
      <div className="reserve mt-4">
        <Link href="/rentals/reservation">
          <button className="bg-orange-500 w-full text-white p-2.5 rounded-md">
            Reserve
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReserveActionCard;
