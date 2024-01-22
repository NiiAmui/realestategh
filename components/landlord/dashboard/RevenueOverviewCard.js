import React from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import IncomeExpenseBarChart from '@/components/landlord/dashboard/IncomeExpenseBarChart'

const RevenueOveviewCard = () => {
  return (
    <div className="border">
      {/* header */}
      <div className="p-4 border-b">
        <p className="text-lg font-medium">Revenue Overview</p>
        <p className="text-sm text-gray-500">
          Your property finance report Jan 21 - Dec 21
        </p>
      </div>

      {/* graph and stats */}
      <div className="grid grid-cols-3">
        {/* graph */}
        <div className="col-span-2 p-4">
          <IncomeExpenseBarChart />
        </div>

        {/* stats */}
        <div className="p-4">
          {/* total */}
          <div className="total">
            <p className="text-xl font-medium">$124,345.00</p>
            <p className="text-gray-500 text-sm">Total balance</p>
          </div>

          {/* Income */}
          <div className="mt-6 flex items-center gap-2">
            {/* icon */}
            <div className="bg-green-200 p-2 rounded-full max-w-fit !max-h-fit">
              <CurrencyDollarIcon className="w-4" />
            </div>
            {/* value */}
            <div>
              <p className="font-medium">$1,345.00</p>
              <p className="text-gray-500 text-sm">Total Income</p>
            </div>
          </div>

          {/* Expense */}
          <div className="mt-4 flex items-center gap-2">
            {/* icon */}
            <div className="bg-red-200 p-2 rounded-full max-w-fit !max-h-fit">
              <CurrencyDollarIcon className="w-4" />
            </div>
            {/* value */}
            <div>
              <p className="font-medium">$1,345.00</p>
              <p className="text-gray-500 text-sm">Total Expense</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueOveviewCard;
