import React from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

const HouseCard = ({el}) => {
  const router = useRouter();

  return (
    <div className="max-w-[200px]" onClick={()=>router.push(`/rentals/${el}`)}>
      {/* image */}
      <div className="image overflow-hidden max-w-fit">
        <Image
          src="https://a0.muscache.com/im/pictures/e17c7207-25e4-4824-a03b-d2b66847ebed.jpg?im_w=720"
          width={200}
          height={200}
          style={{ objectFit: "contain" }}
          alt="Picture of the author"
        />
      </div>

      {/* DETAILS */}
      <div className="mt-2 text-sm">
        {/* location */}
        <div className="font-medium underline">Location</div>
        {/* region */}
        {/* <div className="text-gray-500">Region</div> */}
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
