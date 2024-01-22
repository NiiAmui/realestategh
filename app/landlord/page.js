import React from "react";
import LandlordStatSummaryCard from "@/components/landlord/dashboard/LandlordStatSummaryCard";
import LandlordPlansCard from "@/components/landlord/dashboard/LandlordPlansCard";

import { ClipboardDocumentCheckIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const page = () => {
  return (
    <div className="p-4">
      {/* rental stats section*/}
      <div className="rentalStats grid grid-cols-3 gap-14">
        {/* stats cards */}
        <div className="statsCards col-span-2">
          <LandlordStatSummaryCard />

          {/* action cards */}
          <div className="actionCards grid grid-cols-3 gap-4 mt-4">

            {/* new applicant */}
            <div className="newApplicant border p-4">
              {/* header */}
              <div className="flex gap-2 items-center">
                {/* icon */}
                <div className="bg-green-200  max-w-fit p-2 rounded-full">
                  <ClipboardDocumentCheckIcon className="w-5"/>
                </div>
                {/* title */}
                <p className="text-sm font-medium">New Applicants</p>
              </div>

              {/* values */}
              <div className="flex items-center mt-4 justify-between">
                {/* value */}
                <div className="text-3xl font-medium">
                  16
                </div>
                {/* arrow */}
                <div className="rightArrow">
                  <ChevronRightIcon className="h-5"/>
                </div>
              </div>
            </div>
            {/* new applicant */}
            <div className="newApplicant border p-4">
              {/* header */}
              <div className="flex gap-2 items-center">
                {/* icon */}
                <div className="bg-green-200  max-w-fit p-2 rounded-full">
                  <ClipboardDocumentCheckIcon className="w-5"/>
                </div>
                {/* title */}
                <p className="text-sm font-medium">New Applicants</p>
              </div>

              {/* values */}
              <div className="flex items-center mt-4 justify-between">
                {/* value */}
                <div className="text-3xl font-medium">
                  16
                </div>
                {/* arrow */}
                <div className="rightArrow">
                  <ChevronRightIcon className="h-5"/>
                </div>
              </div>
            </div>
            {/* new applicant */}
            <div className="newApplicant border p-4">
              {/* header */}
              <div className="flex gap-2 items-center">
                {/* icon */}
                <div className="bg-green-200  max-w-fit p-2 rounded-full">
                  <ClipboardDocumentCheckIcon className="w-5"/>
                </div>
                {/* title */}
                <p className="text-sm font-medium">New Applicants</p>
              </div>

              {/* values */}
              <div className="flex items-center mt-4 justify-between">
                {/* value */}
                <div className="text-3xl font-medium">
                  16
                </div>
                {/* arrow */}
                <div className="rightArrow">
                  <ChevronRightIcon className="h-5"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* landLordPlans */}
        <LandlordPlansCard />
      </div>
    </div>
  );
};

export default page;
