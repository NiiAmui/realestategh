import React from "react";
import Image from "next/image";

import { MagnifyingGlassIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

const page = () => {
  return (
    <div className="m-6 grid grid-cols-6 border h-[80vh]">
      {/* left sidebar */}
      <section className="col-span-2 border-r">
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
              width={30}
              height={30}
              className="rounded-full"
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
        </div>
      </section>
      {/* conversation area */}
      <section className="col-span-4 max-h-full overflow-hidden relative">
        {/* if there is no selected chat */}
        <div className="noChat">
          {/* <img
            alt="image"
            src="https://img.freepik.com/free-vector/love-mail-pattern_23-2147495663.jpg?w=1380&t=st=1705987828~exp=1705988428~hmac=8763899f71fdc0285442ecffac4a0c4bb5bbe766dd35ad949a815abf94d10bcc"
            className="min-w-full"
          /> */}

          <Image
            src={
              "https://img.freepik.com/free-vector/love-mail-pattern_23-2147495663.jpg?w=1380&t=st=1705987828~exp=1705988428~hmac=8763899f71fdc0285442ecffac4a0c4bb5bbe766dd35ad949a815abf94d10bcc"
            }
            alt="image"
            width={500}
            height={500}
            className="min-w-full"
          />

          {/* no chat message */}
          <div className="noChatMessage absolute top-[35%] left-[42%]">
            <div className="p-4 bg-white rounded-full flex items-center justify-center">
              <ChatBubbleLeftIcon className="w-20 text-gray-600"/>
            </div>
              <p className="px-8 py-3 text-xl text-gray-600 font-medium bg-white rounded-full mt-4">No Messages yet</p>
          </div>
        </div>

        {/* if chat has been selected */}
      </section>
    </div>
  );
};

export default page;
