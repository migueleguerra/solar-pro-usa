import Head from "next/head";
import Link from "next/link";
import React from "react";

function aboutus() {
  return (
    <div className="container primary-font-color">
      <Head>
        <title>Solar Pro USA - About Us</title>
      </Head>

      <section className="col-[full-start/full-end] container pt-[15rem] primary-bg-color aboutus-wave bg-no-repeat bg-cover bg-center text-white">
        <div className="sm:col-[center-start/center-end] col-[full-start/full-end] sm:px-0 px-[2rem] md:w-[34rem] flex flex-col space-y-[2rem] pb-[4rem]">
          <h1 className="text-3xl font-bold">Solar Roof Experts</h1>
          <p>
            Solar Pro is an Atlanta, GA based company operating throughout the
            southeast of the United States.
          </p>
          <p>
            Solar Pro was initially founded to give something back to our
            community and most importantly to our home, EARTH.
          </p>
        </div>
      </section>

      <section className="col-[full-start/full-end] container py-[4rem] gray-bg-color">
        <div className="sm:col-[center-start/center-end] col-[full-start/full-end] lg:flex-row flex-col flex items-center space-y-[2rem] lg:space-x-[2rem] px-[2rem]">
          <ul className="sm:list-outside list-inside list-disc space-y-[2rem] font-semibold">
            <li>
              Our mission is to bring to our community clean energy using high
              quality products at a low cost.
            </li>
            <li>
              Solar Pro strives for excellence in our industry, and we bring it
              to your door with over 15 years of solar experience.
            </li>
            <li>
              Together we will achieve a better world for our future
              generations. We are also proud to say that Solar Pro is a minority
              own company.
            </li>
          </ul>
          <div>
            <img
              className="sm:w-[60rem] rounded-md shadow-md"
              src="https://images.unsplash.com/flagged/photo-1566838634698-48b165cb0a9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="about us solar"
            />
          </div>
        </div>
      </section>

      <div className="md:col-[center-start/center-end] col-[full-start/full-end] md:mx-0 mx-[2rem] flex md:flex-row justify-between flex-col md:space-y-0 space-y-4 items-center space-x-2 gray-bg-color mb-[4rem] p-4 rounded-md shadow-md text-sm">
        <p className="font-semibold">
          Our team of hands-on professionals will safely design, install, and
          maintain the right system For you
        </p>
        <Link
          className="primary-bg-color px-8 py-2 primary-bg-color text-white shadow-md rounded-md whitespace-nowrap transform transition duration-200 hover:scale-110"
          href="/contact"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}

export default aboutus;
