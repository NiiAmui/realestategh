'use client'

import TenantCard from "@/components/admin/TenantCard";
import React from "react";

import { useFetchTenantsQuery } from "@/redux/features/admin/api";


const page = () => {
  const { data, isLoading } = useFetchTenantsQuery();

  return (
    <div className="p-4">
      {/* header */}
      <p className="text-lg font-medium text-center">Available Tenants</p>

      {/* cards of landlords */}
     {!isLoading && <div className="mt-10 max-w-fit flex gap-6">
        {data.map((el) => (
          <TenantCard key={el.id} tenant={el} />
        ))}
      </div>}

      {/* if there are no properties */}
      {!data && !isLoading && (
          <div className="mt-10 text-center">
            This Landlord has no Properties uploaded yet...
          </div>
        )}

      {/* if is loading */}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default page;
