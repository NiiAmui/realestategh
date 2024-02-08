import React from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

import { setProperty } from "@/redux/features/landlord";
import { useDispatch } from "react-redux";

const HouseCard = ({ rental }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleOpenRental = () => {
    dispatch(setProperty(rental));
    router.push(`/rentals/${rental.id}`);
  };

  return (
    <div
      className="w-64 overflow-hidden border pb-4"
      onClick={() => handleOpenRental()}
    >
      {/* image */}
      <div className="image h-64 w-64 overflow-hidden">
        {/* <Image
          src="https://a0.muscache.com/im/pictures/e17c7207-25e4-4824-a03b-d2b66847ebed.jpg?im_w=720"
          width={200}
          height={200}
          style={{ objectFit: "contain" }}
          alt="Picture of the author"
        /> */}

        {/* if theres an image */}
        {rental?.images[0] && (
          <img
            alt="image"
            src={
              rental?.images[0]?.blob !== "string"
                ? rental?.images[0]?.blob
                : "https://a0.muscache.com/im/pictures/e17c7207-25e4-4824-a03b-d2b66847ebed.jpg?im_w=720"
            }
            className="min-h-full object-cover rounded-md"
          />
        )}

        {/* if theres no image */}
        {!rental?.images[0] && (
          <img
            alt="image"
            src="https://a0.muscache.com/im/pictures/e17c7207-25e4-4824-a03b-d2b66847ebed.jpg?im_w=720"
            className="min-w-full object-cover rounded-md"
          />
        )}
      </div>

      {/* DETAILS */}
      <div className="mt-2 text-sm w-full px-2">
        {/* location */}
        <div className="font-medium  grid grid-cols-2 gap-1">
          <p>Location:</p>
          <p className="text-right min-w-fit text-ellipsis">{rental.address}</p>
        </div>
        {/* region */}
        {/* <div className="text-gray-500">Region</div> */}
        {/* available time */}
        <div className="text-gray-500 grid grid-cols-2 gap-1">
          <p>Available Time:</p>
          <p className="text-right min-w-fit text-ellipsis">{rental.available_time}</p>
        </div>
        {/* duration */}
        <div className="text-gray-500 grid grid-cols-2 gap-1">
          <p>Duration:</p>
          <p className="text-right min-w-fit text-ellipsis">{rental.duration_time} years</p>
        </div>
        {/* amount/price */}
        <div className="text-gray-500 grid grid-cols-2 gap-1">
          <p>Price:</p>
          <p className="text-right min-w-fit text-ellipsis">{rental.price}</p>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
