import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import PropertyCard from "@/components/landlord/properties/PropertyCard";


const Properties = () => {
  return (
    <div className="p-4">
      {/* header */}
      <div className="flex justify-between">
        {/* title */}
        <p className="text-lg font-medium">My Properties</p>

        {/* Filters */}
        <div></div>

        {/* Add new btn */}
        <button className="bg-orange-500 text-white text-xs px-4 py-2 rounded-lg flex items-center justify-between gap-2">
            <PlusIcon className="w-4 text-white"/>
          <p>Add Property</p>
        </button>
      </div>

      {/* PROPERTIES */}
      <div className="propertiesContainer mt-4">
            <PropertyCard />
      </div>
    </div>
  );
};

export default Properties;
