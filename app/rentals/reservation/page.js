"use client";

import RentalSummary from "@/components/rentals/RentalSummary";
import React from "react";

import { useSelector } from "react-redux";
import { isLoggedIn } from "@/redux/features/auth";
import { useState } from "react";

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import { property } from "@/redux/features/landlord";
import { useSendMessageMutation } from "@/redux/features/tenant/api";
import { useRouter } from "next/navigation";

const Reservation = () => {
  const router = useRouter();

  const loginStatus = useSelector(isLoggedIn);
  const landlordProperty = useSelector(property);

  const [message, setMessage] = useState("");

  const [sendMessage, { isLoading, error }] = useSendMessageMutation();

  const handleSendMessage = async () => {
    if (message) {
      sendMessage({ message, receiver: landlordProperty.owner.id })
        .unwrap()
        .then(() => {
          router.push("/rentals");
        });
    }
  };

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
          {loginStatus && (
            <div className="loggedIn mt-10 border p-4 rounded">
              {/* send message */}
              <div className="sendMessage">
                <p className="text-sm italic">
                  Send landlord a message | Request a tour
                </p>
                <textarea
                  className="w-[60%] mt-1 border rounded p-2"
                  placeholder="send landlord a short message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {/* Button */}
                <button
                  className="bg-yellow-500 w-[60%] p-2 mt-4 rounded text-white"
                  onClick={handleSendMessage}
                >
                  {isLoading && (
                    <Spin
                      indicator={
                        <LoadingOutlined
                          style={{
                            fontSize: 24,
                            color: "white",
                          }}
                          spin
                        />
                      }
                    />
                  )}
                  {!isLoading && <p>Send</p>}
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Right section */}
        <section>
          <RentalSummary />
        </section>
      </div>
    </div>
  );
};

export default Reservation;
