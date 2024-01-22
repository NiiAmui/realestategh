import React from "react";

const LandlordPlansCard = () => {
  return (
    <div className="border  pt-8">
      {/* header */}
      <p className="font-medium p-6 border-b">My Plans</p>

      {/* plans */}
      <div className="plansContainer p-4 flex flex-col gap-4">
        {/* plan */}
        <div className="border p-4 grid grid-cols-5 divide-x">
          {/* left */}
          <div>
            {/* time */}
            <p className="font-medium">5:00</p>
            {/* remaining time */}
            <p className="text-gray-400 text-xs">30 min</p>
          </div>
          {/* right */}
          <div className="col-span-4 pl-4 max-w-full overflow-hidden">
            {/* title */}
            <p className="text-sm font-medium">Renew Tenancy</p>
            {/* description */}
            <p className=" text-sm whitespace-nowrap text-ellipsis max-w-full">Do property maintenance on Miss Mendez's rooms and things</p>
          </div>
        </div>
        {/* plan */}
        <div className="border p-4 grid grid-cols-5 divide-x">
          {/* left */}
          <div>
            {/* time */}
            <p className="font-medium">5:00</p>
            {/* remaining time */}
            <p className="text-gray-400 text-xs">30 min</p>
          </div>
          {/* right */}
          <div className="col-span-4 pl-4 max-w-full overflow-hidden">
            {/* title */}
            <p className="text-sm font-medium">Renew Tenancy</p>
            {/* description */}
            <p className=" text-sm whitespace-nowrap text-ellipsis max-w-full">Do property maintenance on Miss Mendez's rooms and things</p>
          </div>
        </div>
        {/* plan */}
        <div className="border p-4 grid grid-cols-5 divide-x">
          {/* left */}
          <div>
            {/* time */}
            <p className="font-medium">5:00</p>
            {/* remaining time */}
            <p className="text-gray-400 text-xs">30 min</p>
          </div>
          {/* right */}
          <div className="col-span-4 pl-4 max-w-full overflow-hidden">
            {/* title */}
            <p className="text-sm font-medium">Renew Tenancy</p>
            {/* description */}
            <p className=" text-sm whitespace-nowrap text-ellipsis max-w-full">Do property maintenance on Miss Mendez's rooms and things</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandlordPlansCard;
