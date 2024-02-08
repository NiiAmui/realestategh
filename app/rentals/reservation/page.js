"use client";

import RentalSummary from "@/components/rentals/RentalSummary";
import React from "react";

import { useSelector } from "react-redux";
import { isLoggedIn } from "@/redux/features/auth";

import { property } from "@/redux/features/landlord";

const page = () => {
  const loginStatus = useSelector(isLoggedIn);
  const landlordProperty = useSelector(property)

  return (
    <div className="px-8">
      <p className="text-xl font-semibold mt-12">
        Request a tour or Send a Message
      </p>

      {/* content section */}
      <div className="grid grid-cols-2 gap-20 mt-10">
        {/* left section */}
        <section>
          {/* NOT LOGGED IN */}
          {!loginStatus && (
            <div className="flex flex-col border p-4 rounded">
              <p className="font-medium">Login or Sign up to book a tour</p>

              {/* Button */}
              <button className="bg-yellow-500 w-[60%] p-2 mt-4 rounded text-white">
                Continue
              </button>

              <p className="mt-2 text-xs">
                If you are already a member, you can login to your account.
              </p>
            </div>
          )}

          {/* LOGGED IN */}
          {loginStatus && <div className="loggedIn mt-10 border p-4 rounded">
            {/* send message */}
            <div className="sendMessage">
              <p className="text-sm italic">
                Send landlord a message | Request a tour
              </p>
              <textarea
                className="w-[60%] mt-1 border rounded p-2"
                placeholder="send landlord a short message"
              ></textarea>
              {/* Button */}
              <button className="bg-yellow-500 w-[60%] p-2 mt-4 rounded text-white">
                Send
              </button>
            </div>
          </div>}
        </section>

        {/* Right section */}
        <section>
          <RentalSummary />
        </section>
      </div>
    </div>
  );
};

export default page;
