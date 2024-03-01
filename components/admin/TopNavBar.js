"use client";

import React from "react";
import OtherNotifications from "../landlord/OtherNotifications";
import AdminProfile from './AdminProfile'
import { usePathname } from "next/navigation";

import dayjs from "dayjs";

import { useRouter } from "next/navigation";

const AdminTopNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="px-8 min-w-full text-gray-500 border-b">
      <div className="w-full grid grid-cols-3 py-4 items-center text-sm">
        {/* page title */}
        <p className="">
          {pathname.includes("landlords")
            ? "Landlords"
            : pathname.includes("tenants")
            ? "Tenants"
            : "Dashboard"}
        </p>

        {/* Current Date */}
        <p className="text-center">{dayjs().format("DD MMM YYYY")}</p>

        {/* Notifications and profile */}
        <div className="flex items-center gap-2.5 justify-end">
          <OtherNotifications />
          <AdminProfile /> 
        </div>
      </div>
    </div>
  );
};

export default AdminTopNavbar;
