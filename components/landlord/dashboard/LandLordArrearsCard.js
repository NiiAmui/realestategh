import React from "react";

const LandLordArrearsCard = () => {
  return (
    <div className="border p-4 h-full">
      {/* heading */}
      <div className="total">
        <p className="text-xl font-medium">Rent Arrears</p>
        <p className="text-gray-500 text-sm">from 12 properties</p>
      </div>

      {/* amount */}
      <div className="mt-4">
        <p className="text-xl font-medium">$4,345</p>
        <p className="text-sm text-gray-400">vs last month</p>
      </div>
    </div>
  );
};

export default LandLordArrearsCard;
