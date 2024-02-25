import LandLordCard from "@/components/admin/TenantCard";
import React from "react";


const someLandlords = [1, 2, 3, 4];

const page = () => {

  return (
    <div className="p-4">
      {/* header */}
      <p className="text-lg font-medium text-center">Available Tenants</p>

      {/* cards of landlords */}
      <div className="mt-10 max-w-fit flex gap-6">
        {someLandlords.map((el) => (
          <LandLordCard key={el} landlordId={el}/>
        ))}
      </div>
    </div>
  );
};

export default page;
