"use client";

import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

import ImageUpload from "@/components/landlord/properties/ImageUpload";

import { regionsOfGhana } from "@/components/auth/RegionTimeFilter";

import { useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const facilities = [
  "Swimming Pool",
  "Gym",
  "Kitchen",
  "Parking Lot",
  "Home Office",
  "Storage Units",
  'Recreational Space',
  'Furnish',
  'Air Conditioning',
];

import React from "react";

const page = () => {
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [region, setregion] = useState('')
  const [address, setaddress] = useState('')
  const [unitNumber, setunitNumber] = useState(null)
  const [city, setcity] = useState('')
  const [facilitites, setfacilitites] = useState([])
  const [bedRooms, setbedRooms] = useState(null)
  const [kitchens, setkitchens] = useState(null)
  const [livingRooms, setlivingRooms] = useState(null)
  const [bathrooms, setbathrooms] = useState(null)
  const [price, setprice] = useState(null)
  const [duration, setduration] = useState(null)
  const [availableDate, setavailableDate] = useState(null)
  const [images, setimages] = useState([])
  




  return (
    <div className="p-4 grid grid-cols-7 gap-10">
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
        <div className="propertyInformation mt-10 grid grid-cols-2 gap-6">
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

          {/* property Description */}
          <div className="mt-4 text-gray-600 col-span-2">
            <label className="text-sm ">Property Description</label>
            <textarea
              placeholder="Description"
              className="border w-full rounded px-2 py-1 mt-1"
              rows={4}
            />
          </div>
        </div>

        {/* Property Specification */}
        <div className="propertyInformation mt-10 grid grid-cols-2 gap-6">
          {/* title */}
          <p className="font-medium col-span-2">Property Specification</p>

          {/* facilities */}
          <div className="mt-4 text-gray-600 col-span-2">
            <p className="text-sm ">Facilities</p>
            {/* facilities */}
            <div className="grid grid-cols-3 flex-wrap gap-3 mt-1 text-sm">
              {facilities.map((el) => (
                <div
                  className="regionContainer flex items-center gap-2"
                  key={el}
                >
                  <input type="checkbox" id={el} />
                  <label htmlFor={el}>{el}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Number of bed rooms */}
          <div className="text-gray-600">
            <label className="text-sm ">Number of Bed Rooms</label>
            <select
              name="livingRooms"
              id="livingRooms"
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
              placeholder="choose Region"
            >
              <option value="" disabled>
                choose bed room number
              </option>
              {numbers.map((el) => (
                <option value={el} key={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>
          {/* Number of living rooms */}
          <div className="text-gray-600">
            <label className="text-sm ">Number of Kitchens</label>
            <select
              name="kitchens"
              id="kitchens"
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
              placeholder="choose Region"
            >
              <option value="" disabled>
                choose number of kitchens
              </option>
              {numbers.map((el) => (
                <option value={el} key={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>
          {/* Number of living rooms */}
          <div className="text-gray-600">
            <label className="text-sm ">Number of Living Rooms</label>
            <select
              name="livingRooms"
              id="livingRooms"
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
              placeholder="choose Region"
            >
              <option value="" disabled>
                choose Living room number
              </option>
              {numbers.map((el) => (
                <option value={el} key={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>
          {/* Bathrooms */}
          <div className="text-gray-600">
            <label className="text-sm ">Number of Bathrooms</label>
            <select
              name="cars"
              id="cars"
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
              placeholder="choose Region"
            >
              <option value="" disabled>
                choose Bathrooms
              </option>
              {numbers.map((el) => (
                <option value={el} key={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>
        </div>

                {/* Property Pricing */}
        <div className="propertyInformation mt-10 grid grid-cols-2 gap-6">
          {/* title */}
          <p className="font-medium col-span-2">Property Pricing</p>

          {/* Annual Payment or price */}
          <div className="mt-4 text-gray-600">
            <label className="text-sm ">Annual Payment</label>
            <input
              type="number"
              placeholder="12000"
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
            />
          </div>
          {/* Monthly Payment */}
          <div className="mt-4 text-gray-600">
            <label className="text-sm ">Monthly Installment</label>
            <input
              type="number"
              placeholder="12000"
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
            />
          </div>
          {/* rental duration */}
          <div className="text-gray-600">
            <label className="text-sm ">Minimum Rental Duration</label>
            <input
              type="number"
              placeholder="2"
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
            />
          </div>
          {/* Date available */}
          <div className="text-gray-600">
            <label className="text-sm ">Available Date</label>
            <input
              type="date"
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
            />
          </div>
        </div>
      </section>

      {/* right section - Property Images */}
      <section className="p-4 col-span-3 border rounded">
        {/* title */}
        <p className="text-lg font-medium">Property Images</p>

        {/* IMAGES */}
        {/* first Image */}
        <div className="mt-10">
          <ImageUpload />
        </div>
      </section>
    </div>
  );
};

export default page;
