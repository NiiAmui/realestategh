"use client";

import React from "react";
import LandlordProfile from "./LandlordProfile";
import MessageNotification from "./MessageNotification";
import OtherNotifications from "./OtherNotifications";

import dayjs from "dayjs";

import { useRouter } from "next/navigation";

const TopNavBar = () => {
  const router = useRouter();

  return (
    <div className="px-8 min-w-full text-gray-500 border-b">
      <div className="w-full flex justify-between py-4 items-center text-sm">
        {/* page title */}
        <p className="">Dashboard</p>

        {/* Current Date */}
        <p>{dayjs().format('DD MMM YYYY')}</p>

        {/* Notifications and profile */}
        <div className="flex items-center gap-2.5">
          <div className="" onClick={()=>{router.push('/landlord/messages')}}>
            <MessageNotification />
          </div>
          <OtherNotifications />
          <LandlordProfile />
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
