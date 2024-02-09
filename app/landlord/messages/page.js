"use client";

import React from "react";
import Image from "next/image";

const demoConversation = [
  "Hello, the bou is going to school bla bla bla",
  "Hello, girls just wanna have fun, bla bla bla",
  "Hello, crazy people are interesting, bla bla bla",
];

import { useFetchMessagesQuery } from "@/redux/features/landlord/api";

import { useSelector } from "react-redux";
import { currentUser } from "@/redux/features/auth";

import { useState } from "react";

import {
  MagnifyingGlassIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";

const Messages = () => {
  const userProfile = useSelector(currentUser);
  const { data, isLoading } = useFetchMessagesQuery();

  const [selectedChat, setSelectedChat] = useState(null);

  if (isLoading) {
    return <p className="mt-6 text-center">Loading...</p>;
  }

  return (
    <div className="m-6 grid grid-cols-6 border h-[80vh]">
      {/* left sidebar */}
      <section className="col-span-2 border-r max-h-full">
        {/* chat sideBar */}
        <div className="headerSection p-4 border-b flex gap-4 items-center">
          {/* HEADER section */}
          {/* profile */}
          <div className="profile relative w-fit">
            {/* image */}
            <Image
              src={
                "https://a0.muscache.com/im/pictures/user/3816a6ef-5cc9-40ed-ae47-406646daa103.jpg?im_w=240"
              }
              alt="image"
              width={35}
              height={35}
              className="rounded-full max-h-[35px]"
            />
            {/* availability badge */}
            <div className="w-2 h-2 bg-green-500 rounded-full absolute bottom-0 right-0"></div>
          </div>

          {/* search */}
          <div className="border flex gap-2 grow rounded-full h-[40px] text-sm px-4">
            {/* search icon */}
            <MagnifyingGlassIcon className="w-4 text-gray-400" />
            <input
              type="text"
              placeholder="search"
              className="outline-none grow"
            />
          </div>
        </div>

        {/* CHATS */}
        <div className="mt-4 p-4">
          {/* header */}
          <p className="font-medium text-lg text-gray-800">Chats</p>

          {/* chat people if there are some chats people */}
          {data?.messages && (
            <div className="chatsWithPeople mt-8 flex flex-col gap-4">
              {data?.messages.map((el) => (
                <div
                  className="chatPeople"
                  key={el.id}
                  onClick={() => {
                    setSelectedChat(el);
                  }}
                >
                  {/* contact */}
                  <div className="contact flex gap-3 cursor-pointer">
                    {/* image */}
                    <Image
                      src={
                        "https://a0.muscache.com/im/pictures/user/3816a6ef-5cc9-40ed-ae47-406646daa103.jpg?im_w=240"
                      }
                      alt="image"
                      width={35}
                      height={35}
                      className="rounded-full object-cover max-h-[35px]"
                    />

                    {/* ContactInfo */}
                    <div className="contactInfo">
                      <p className="font-medium">{`${el.sender.first_name} ${el.sender.last_name}`}</p>

                      <p className="text-sm italic text-gray-500">
                        Last message
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* If there are no chats */}
          {!data?.messages && (
            <div className="There were no chats">
              <p className="italic text-gray-400">You have no Chats</p>
            </div>
          )}
        </div>
      </section>
      {/* conversation area */}
      <section className="col-span-4 max-h-full overflow-hidden relative">
        {/* if there is no selected chat */}
        {!selectedChat && (
          <div className="noChat object-cover h-full bg-[url('https://img.freepik.com/free-vector/love-mail-pattern_23-2147495663.jpg?w=1380&t=st=1705987828~exp=1705988428~hmac=8763899f71fdc0285442ecffac4a0c4bb5bbe766dd35ad949a815abf94d10bcc')]">
            {/* <Image
            src={
              "https://img.freepik.com/free-vector/love-mail-pattern_23-2147495663.jpg?w=1380&t=st=1705987828~exp=1705988428~hmac=8763899f71fdc0285442ecffac4a0c4bb5bbe766dd35ad949a815abf94d10bcc"
            }
            alt="image"
            width={500}
            height={500}
            className="w-full max-h-full"
          /> */}

            {/* no chat message */}
            <div className="noChatMessage absolute top-[35%] left-[42%]">
              <div className="p-4 bg-white rounded-full flex items-center justify-center">
                <ChatBubbleLeftIcon className="w-20 text-gray-600" />
              </div>
              
            </div>
          </div>
        )}

          {/* If there are no messages at all */}
        {!data?.messages && (
          <div className="noChat object-cover h-full bg-[url('https://img.freepik.com/free-vector/love-mail-pattern_23-2147495663.jpg?w=1380&t=st=1705987828~exp=1705988428~hmac=8763899f71fdc0285442ecffac4a0c4bb5bbe766dd35ad949a815abf94d10bcc')]">
            {/* <Image
            src={
              "https://img.freepik.com/free-vector/love-mail-pattern_23-2147495663.jpg?w=1380&t=st=1705987828~exp=1705988428~hmac=8763899f71fdc0285442ecffac4a0c4bb5bbe766dd35ad949a815abf94d10bcc"
            }
            alt="image"
            width={500}
            height={500}
            className="w-full max-h-full"
          /> */}

            {/* no chat message */}
            <div className="noChatMessage absolute top-[35%] left-[42%]">
              <div className="p-4 bg-white rounded-full flex items-center justify-center">
                <ChatBubbleLeftIcon className="w-20 text-gray-600" />
              </div>
              <p className="px-8 py-3 text-xl text-gray-600 font-medium bg-white rounded-full mt-4">
                No Messages yet
              </p>
            </div>
          </div>
        )}

        {/* if chat has been selected */}
        {selectedChat && (
          <div className="chatWindow p-4  h-full flex flex-col gap-3">
            {demoConversation.map((el, idx) => (
              <div key={idx} className="">
                <p
                  className={
                    idx / 2 == 0
                      ? "bg-gray-300 text-gray-900 w-fit px-2 py-1 rounded text-sm max-w-[50%]"
                      : "bg-emerald-700 w-[50%] float-right text-white max-w-fit px-2 py-1 rounded text-sm"
                  }
                >
                  {el}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Messages;
