"use client";

import {
  ChatBubbleBottomCenterIcon,
  HomeModernIcon,
  UserGroupIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

import { useFetchStatisticsQuery } from "@/redux/features/admin/api";

import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const page = () => {
  const { data, isLoading } = useFetchStatisticsQuery();
  const newUser = useSelector((state) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (newUser?.role?.name == "TENANT") {
      router.push("rentals");
    } else if (newUser?.role?.name == "LANDLORD") {
      router.push("landlord");
    } else {
      router.push("admin");
    }
  }, []);

  return (
    <>
      {/* when loading */}
      {isLoading && (
        <div className="p-4 text-center text-lg font-medium ">Loading...</div>
      )}
      {/* when not loading */}
      {!isLoading && (
        <div className="p-4 grid grid-cols-4 gap-10">
          {/* registered Properties */}
          <div className="border grid grid-cols-2 rounded-md px-5 py-3">
            {/* logo */}
            <BriefcaseIcon className="w-10" />
            {/* value */}
            <div className="text-2xl font-medium text-right">{data?.propertyCount}</div>

            {/* title */}
            <p className="col-span-2 mt-3 font-medium text-gray-600">
              Registered Properties
            </p>
          </div>
          {/* registered Tenants */}
          <div className="border grid grid-cols-2 rounded-md px-5 py-3">
            {/* logo */}
            <UserGroupIcon className="w-10" />
            {/* value */}
            <div className="text-2xl font-medium text-right">
              {data?.tenantCount}
            </div>
            {/* title */}
            <p className="col-span-2 mt-3 font-medium text-gray-600">
              Registered Tenants
            </p>
          </div>
          {/* registered Landlords */}
          <div className="border grid grid-cols-2 rounded-md px-5 py-3">
            {/* logo */}
            <HomeModernIcon className="w-10" />
            {/* value */}
            <div className="text-2xl font-medium text-right">
              {data?.landlordCount}
            </div>
            {/* title */}
            <p className="col-span-2 mt-3 font-medium text-gray-600">
              Registered Landlords
            </p>
          </div>
          {/* Total Chats */}
          <div className="border rounded-md px-5 grid grid-cols-2 py-3">
            {/* logo */}
            <ChatBubbleBottomCenterIcon className="w-10" />
            {/* value */}
            <div className="text-2xl font-medium text-right">
              {data?.messageCount}
            </div>
            {/* title */}
            <p className="col-span-2 mt-3 font-medium text-gray-600">
              Total Messages
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
