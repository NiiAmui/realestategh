"use client";

import React from "react";
import { useEffect } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import PropertyCard from "@/components/landlord/properties/PropertyCard";

import { useRouter } from "next/navigation";
import { useFetchPropertiesQuery } from "@/redux/features/landlord/api";
import { currentUser } from "@/redux/features/auth";
import { useSelector } from "react-redux";

const rentals = [
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
    location: "Kumasi, Ahodwo",
    name: "Single room self Contain",
    rent: 500,
    downPayment: 3500,
    tenant: "Stephen Smith",
    endDate: "01-3-2025",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
    location: "Accra, Central",
    name: "3 Bedroom House in Accra",
    downPayment: 5600,
    rent: 1000,
    tenant: "Kojo Amankwah",
    endDate: "20-7-2029",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
    location: "Cape Coast, Tantri",
    name: "Single Room Self Contain",
    downPayment: 3500,
    rent: 200,
    tenant: "Kojo Amankwah",
    endDate: "20-7-205",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
    location: "Accra, East Legon",
    name: "Condo",
    rent: 700,
    downPayment: null,
    tenant: null,
    endDate: null,
  },
];

const Properties = () => {
  const router = useRouter();

  const user = useSelector(currentUser)

  const { data, isLoading, } = useFetchPropertiesQuery();

  console.log('data',data)
  console.log('isLoading',isLoading)

  return (
    <div className="p-4">
      {/* header */}
      <div className="flex justify-between">
        {/* title */}
        <p className="text-lg font-medium">My Properties</p>

        {/* Filters */}
        <div></div>

        {/* Add new btn */}
        <button
          className="bg-orange-500 text-white text-xs px-4 py-2 rounded-lg flex items-center justify-between gap-2"
          onClick={() => {
            router.push("/landlord/properties/add");
          }}
        >
          <PlusIcon className="w-4 text-white" />
          <p>Add Property</p>
        </button>
      </div>

      {/* PROPERTIES */}
      <div >
        {/* if there are properties */}
        {data && <div className="propertiesContainer mt-4 flex flex-col gap-4">
          {data.filter(el=>el.owner.id==user.id).map((rental, idx) => (
            <PropertyCard rental={rental} key={idx} />
          ))}
        </div>}
        {/* if there are no properties */}
        {(!data && !isLoading) && <div>There are no properties uploaded</div>}
        {/* if is loading */}
        {isLoading && <div>Loading...</div>}
      </div>

      {/* test area */}
      <p>
      </p>
    </div>
  );
};

export default Properties;
