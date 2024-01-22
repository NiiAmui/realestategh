import React from "react";

const BillCollected = () => {
  return (
    <div className="border p-4 h-full">
      {/* heading */}
      <div className="total">
        <p className="text-xl font-medium">Bill Collected</p>
        <p className="text-gray-500 text-sm">from 8 properties</p>
      </div>

      {/* amount */}
      <div className="mt-4">
        <div className="text-xl font-medium flex gap-1">
          <p>$4,345</p>
          <span>/</span>
          <p className="text-gray-300">$11,345</p>
        </div>
        <progress id="file" value="32" max="100" className="rounded-md mt-2">
          {" "}
          32%{" "}
        </progress>
      </div>
    </div>
  );
};

export default BillCollected;
