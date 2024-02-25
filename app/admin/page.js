"use client";

import {
  ChatBubbleBottomCenterIcon,
  HomeModernIcon,
  UserGroupIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

import React from "react";

const page = () => {
  return (
    <div className="p-4 grid grid-cols-4 gap-10">
      {/* registered Properties */}
      <div className="border grid grid-cols-2 rounded-md px-5 py-3">
        {/* logo */}
        <BriefcaseIcon className="w-10" />
        {/* value */}
        <div className="text-2xl font-medium text-right">10</div>

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
        <div className="text-2xl font-medium text-right">10</div>
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
        <div className="text-2xl font-medium text-right">10</div>
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
        <div className="text-2xl font-medium text-right">10</div>
        {/* title */}
        <p className="col-span-2 mt-3 font-medium text-gray-600">
          Total Messages
        </p>
      </div>
    </div>
  );
};

export default page;
