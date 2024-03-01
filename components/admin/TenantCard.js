"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Bars2Icon } from "@heroicons/react/24/outline";

const TenantCard = ({ tenant }) => {
  const componentRef = useRef(null);
  const router = useRouter();

  const [showMenu, setshowMenu] = useState(false);

  const handleClickOutside = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      // Pass onClickOutside prop for callback
      setshowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <Bars2Icon
        className="text-orange-500 w-6 cursor-pointer  stroke-[3px]"
        onClick={() => setshowMenu((prev) => !prev)}
      />
      {/* drop down */}
      {showMenu && (
        <div
          className="px-4 py-1 bg-white shadow absolute top-7 z-10 cursor-pointer"
          ref={componentRef}
          onClick={() => {
            console.log("make inactive");
          }}
        >
          Make Inactive
        </div>
      )}

      <div
        className="w-[200px] border relative"
      >
        {/* options */}

        {/* user inage */}
        <Image
          src="/realEstateTenant.jpg"
          width={200}
          height={100}
          alt="landlord image"
        />
        {/* landlord's name */}
        <div className="text-center mt-2 font-medium">{tenant.first_name} {tenant.last_name}</div>
        {/* description */}
        <div className="p-2 text-sm text-center">{tenant.email}</div>
      </div>
    </div>
  );
};

export default TenantCard;
