"use client";

import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

import { regionsOfGhana } from "@/components/auth/RegionTimeFilter";

import React from "react";

const page = () => {
  return (
    <div className="p-4 testr grid grid-cols-7 gap-10">
      {/* left section - Property Details */}
      <section className="p-4 col-span-4 border rounded">
        {/* header */}
        <div className="header flex items-center justify-between">
          {/* title */}
          <p className="font-medium text-lg">Property Details</p>

          {/* Publish Property */}
          <button className="publishProperty flex items-center gap-2 px-3 py-2 bg-orange-500 text-white rounded text-sm">
            <CloudArrowUpIcon className="w-4" />
            <p>Publish Property</p>
          </button>
        </div>

        {/* PROPERTY DETAILS */}

        {/* Property Information */}
        <div className="propertyInformation mt-10 grid grid-cols-2 gap-4 testr">
          {/* title */}
          <p className="font-medium col-span-2">Property Information</p>

          {/* PropertyName */}
          <div className="mt-4 text-gray-600 col-span-2">
            <label className="text-sm ">Property Name</label>
            <input
              type="text"
              placeholder="Schiller Villa of Atlantis"
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
            />
          </div>
          {/* Address */}
          <div className="text-gray-600">
            <label className="text-sm ">Address</label>
            <input
              type="text"
              placeholder="East Legon Hills"
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
            />
          </div>
          {/* Unit Number */}
          <div className="text-gray-600">
            <label className="text-sm ">Unit Number</label>
            <input
              type="text"
              placeholder="RM 4"
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
            />
          </div>
          {/* City */}
          <div className="text-gray-600">
            <label className="text-sm ">City</label>
            <input
              type="text"
              placeholder="Schiller Villa of Atlantis"
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
            />
          </div>
          {/* region */}
          <div className="text-gray-600">
            <label className="text-sm ">Region</label>
            <select
              name="cars"
              id="cars"
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
              placeholder="choose Region"
            >
              <option value="" disabled>
                choose Region
              </option>
              {regionsOfGhana.map((region) => (
                <option value={region?.name} key={region.name}>
                  {region?.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* right section - Property Images */}
      <section className="p-4 col-span-3 border rounded"></section>
    </div>
  );
};

export default page;
