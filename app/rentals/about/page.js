import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="px-16 pb-20">
      {/* Hero Section */}
      <div className="mt-10">
        {/* headline or title */}
        <p className="text-3xl text-center">
          We are here to make your search for a place <br />
          much easier
        </p>
        {/* hero image */}
        <div className="w-full flex justify-center mt-10">
          <Image
            src="/aboutHero.jpg"
            height={400}
            width={700}
            alt="hero image"
          />
        </div>

        {/* What we do */}
        <p className="title mt-10 text-center text-xl text-gray-800 font-medium">
          What we do
        </p>

        {/* section for what we do */}
        <section className="flex items-center flex-col mt-4 px-20">
          {/* what we do description */}
          <div className="">
            We provide affordable accommodation solutions to tenants with
            innovation solutions .
          </div>

          {/* contact us */}
          <div className="border flex flex-col p-4 mt-8 rounded text-gray-600">
            <p className="font-semibold">Contact us regarding any enquiries</p>
            {/* opening hours */}
            <p className="text-center mt-1 text-sm font-semibold">Opening hours</p>
            {/* opening hours values */}
            <div className="mt- text-sm itali flex justify-between gap-4">
              <p>Monday to Friday 08-6pm</p>
              <p>Saturday 09-4pm</p>
            </div>
            {/* contacts */}
            <div className="contacts mt-2 grid grid-cols-2 gap-2 justify-between text-[13px]">
              <div><div className="font-semibold">Email </div> info@realestategh.com</div>
              <div className="text-right"><div className="font-semibold">Phone</div> 00233244111222</div>
            </div>
          </div>
        </section>
      </div>

      {/* our Story Section */}
      <div></div>
    </div>
  );
};

export default page;
