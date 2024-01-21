import React from "react";

import { HomeModernIcon } from "@heroicons/react/24/outline";

const LandlordStatSummaryCard = () => {
  return (
    <div className="landLordStatSummary p-3 pt-5 border flex gap-10">
      {/* header */}
      <div className="header ">
        <p className="font-medium">Welcome back, Samson</p>
        <p className="text-gray-500 text-sm">
          This is your property portfolio report
        </p>

        {/* details and svg for houses */}
        <div className="detailsNSvG mt-4 ">
          {/* details */}
          <div className="flex items-center gap- divide-x-2 ">
            {/* left */}
            <div className="right pr-8 ">
              <p>Property Total</p>
              <p className="text-4xl font-semibold">126</p>
            </div>
            {/* right  */}
            <div className="right pl-8 flex  flex-col gap-2 ">
              {/* vacant */}
              <div className="flex pl-2 gap-1 border-l-2 border-l-green-700">
                <p>63</p>
                <p>Vacant</p>
              </div>
              {/* occupied */}
              <div className="flex pl-2 gap-1 border-l-2 border-l-orange-700">
                <p>32</p>
                <p>Occupied</p>
              </div>
              {/* unlisted */}
              <div className="flex pl-2 gap-1 border-l-2 border-l-blue-700">
                <p>31</p>
                <p>Unlisted</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* svg image of house */}
      <div className="homeContainer p-4 border-2 rounded-full h-fit ">
        <HomeModernIcon className="h-24 w-24 text-gray-600" />
      </div>
    </div>
  );
};

export default LandlordStatSummaryCard;
