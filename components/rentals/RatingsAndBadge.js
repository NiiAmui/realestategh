import React from "react";
import IconBadge from "../svgs/Badge";
import IconStar from "../svgs/FullStar";

const RatingsAndBadge = () => {
  return (
    <div className="reviewsAndRatingsCard border p-4 rounded-md grid grid-cols-6 gap-5 divide-x">
      <div className="flex justify-between col-span-5">
        {/* badge */}
        <div className="rounded-md w-fit h-fit py-1 flex items-center gap-2">
          <IconBadge className="h-10 text-green-800" />
          <div className="textDescription font-semibold text-sm italic">
            <p>Tenants</p>
            <p>Favorite</p>
          </div>
        </div>
        {/* Best review message */}
        <p className="mt-4 font-medium italic">
          one of the best loved homes on realestate Gh.
        </p>

        {/* current Ratings */}
        <div className="currentRatings flex flex-col justify-center items-center">
          {/* number */}
          <p className="text-lg font-semibold">4.5</p>
          {/* stars */}
          <div className="flex items-center">
            {[...Array(5)].map((star, index) => (
              <IconStar key={index} className="h-3"/>
            ))}
          </div>
        </div>
      </div>

      {/* number of available ratings */}
      <div className=" flex flex-col justify-center items-center cursor-pointer">
        {/* number */}
        <p>
            {41}
        </p>
        {/* text */}
        <p className="text-sm underline">Reviews</p>
      </div>
    </div>
  );
};

export default RatingsAndBadge;
