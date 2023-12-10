import React from "react";
import Image from "next/image";

const HouseCard = () => {
  return (
    <div>
      {/* image */}
      <div className="image rounded-lg overflow-hidden max-w-fit">
        <Image
          src="https://a0.muscache.com/im/pictures/e17c7207-25e4-4824-a03b-d2b66847ebed.jpg?im_w=720"
          width={300}
          height={500}
          style={{ objectFit: "contain" }}
          alt="Picture of the author"
        />
      </div>

      {/* DETAILS */}
      <div className="mt-4">
        {/* location */}
        <div className="font-medium">Location</div>
        {/* region */}
        <div className="text-gray-500">Region</div>
        {/* available time */}
        <div className="text-gray-500">Available time</div>
        {/* duration */}
        <div className="text-gray-500">Duration time</div>
        {/* amount/price */}
        <div className="italic font-medium">Price</div>
      </div>
    </div>
  );
};

export default HouseCard;
