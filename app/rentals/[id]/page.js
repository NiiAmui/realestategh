"use client";

import React from "react";
import Image from "next/image";

const imagesURL = [
  "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/008adf9e-6b52-45bb-924b-38617885b489.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/7da9fd6a-8d6c-4954-88b0-1fc52abc9cfd.jpeg?im_w=1200",
  "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/41cbfe4c-56b1-4a67-8365-47a5894816a4.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/51c80bae-8e9d-4d9e-8ac9-6d46de035cb3.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/070adfcb-5350-4ddf-afb0-368f963c38f0.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/af013622-1a9d-4746-9a0c-f76a0dc67eca.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/2ae76019-9b9a-4b05-a40f-d1ed945b0761.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-649243239350739668/original/46f36758-f188-44ef-aba5-2b379e004c6d.jpeg?im_w=1200",
  "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/ddae3557-35e9-4ac9-9b32-cd5c71aebf9e.jpeg?im_w=720",
];

// function to limit the number of notifications shown at a time
Array.prototype.restrictQuantity = function () {
  let result = this;
  if (this.length > 5) {
    result = this.slice(0, 5);
  } else {
    return result;
  }
  return result;
};

const Page = ({ params }) => {
  return (
    <div className="px-8 mt-6 mb-20">
      {/* header or title */}
      <p className="text-xl font-semibold">The name of the place</p>
      {/* <p>{params.id}</p> */}

      {/* images of the place and ability to view all images*/}
      <div className="seeAllBtnNList flex items-center mt-4">
        <div className="imagesOfPlace max-w-fit columns-2 md:columns-3 space-y-4">
          {imagesURL.restrictQuantity().map((image, index) => (
            // <img src={image} alt="image" key={index} />
            <Image
              src={image}
              alt="image"
              key={index}
              width={500}
              height={500}
              className="rounded-md"
            />
          ))}
        </div>

        {/* see all images section */}
        <div className=" w-[300px] min-h-full flex justify-center">
          {/* Btn to see all images */}
          <button className="btn rounded border-[1.5px] px-4 py-2 text-gray-600 cursor-pointer">See all images</button>
        </div>
      </div>

      {/* rent meta data */}
      <div className="rentMetaData flex items-center divide-x gap-2 mt-4 text-gray-500 text-sm">
            {/* bedrooms */}
            <p>{3} bedroom{true && 's'}</p>
            {/* Meter */}
            <p className="pl-2">{'Personal'} Meter</p>
            {/* Bathrooms */}
            <p className="pl-2">{2} bathrooms</p>
      </div>

      
    </div>
  );
};

export default Page;