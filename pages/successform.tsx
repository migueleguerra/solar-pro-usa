import Link from "next/link";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

function successform() {
  return (
    <section className="flex flex-col h-screen text-center items-center justify-center p-[2rem] primary-font-color contact-wave bg-no-repeat bg-cover">
      <AiOutlineCheckCircle className="mb-[2rem]" size={100} color="#203456" />
      <div className="md:flex md:space-x-2 items-end">
        <h2 className="text-3xl font-bold">Message Received.</h2>
        <h2 className="text-2xl font-bold secondary-font-color">
          Thanks for choosing us!
        </h2>
      </div>
      <h3 className="text-lg font-semibold pb-[4rem]">
        One of our representatives will be in touch with you shortly.
      </h3>
      <div className="transform transition duration-200 hover:scale-110">
        <Link
          href="/"
          className="px-8 py-2 secondary-bg-color text-white rounded-md"
        >
          Back Home
        </Link>
      </div>
    </section>
  );
}

export default successform;
