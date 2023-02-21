import Link from "next/link";
import React from "react";
import { BiError } from "react-icons/bi";

function errorform() {
  return (
    <section className="flex flex-col h-screen text-center items-center justify-center p-[2rem] primary-font-color contact-wave bg-no-repeat bg-cover">
      <BiError className="mb-[2rem]" size={100} color="#203456" />
      <h2 className="text-3xl font-bold">Internal Server Error</h2>
      <h3 className="text-lg font-semibold pb-[4rem]">
        Please try again later.
      </h3>
      <div className="transform transition duration-200 hover:scale-110">
        <Link
          href="/contact"
          className="px-8 py-2 primary-bg-color text-white rounded-md"
        >
          Back to quote
        </Link>
      </div>
    </section>
  );
}

export default errorform;
