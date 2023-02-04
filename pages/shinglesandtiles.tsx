import Head from "next/head";
import { HeroServices } from "../components/HeroServices";
import Link from "next/link";
import { CallToAction } from "../components/CallToAction";
import { WarrantyDetails } from "../components/systems/WarrantyDetails";
import { VideoSection } from "../components/VideoSection";

const ShinglesAndTiles = () => {
  return (
    <div className="container">
      <Head>
        <title>Solar Pro USA - Solar and Storage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Services */}

      <section className="col-[full-start/full-end]">
        <HeroServices
          imageUrl="https://images.unsplash.com/photo-1605980413988-9ff24c537935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          heading="Apollo III"
          headingColor="Solar System"
          message="The Apollo II solar roofing system packs sleek yet powerful solar energy production into a low-profile roofing system. Featuring solar shingles that are capable of being installed with either a new or existing asphalt shingle roof, an Apollo II system offers clean energy without the bulky look of racks and panels"
        />
      </section>

      {/* boucher section */}

      <section className="col-[full-start/full-end] container what-you-get-wave bg-no-repeat bg-cover">
        <div className="md:col-[center-start/center-end] col-[full-start/full-end] px-[2rem] grid lg:grid-cols-2 gap-[4rem] primary-font-color py-[4rem]">
          <div className="flex flex-col items-start space-y-4 text-lg">
            <h3 className="text-3xl font-bold">
              What <span className="secondary-font-color">you get</span>
            </h3>
            <p>
              The Apollo II solar roofing combined beauty with efficiency and
              durability.
            </p>
            <p>
              Even though this all-black solar shingles or tiles blends into
              your roofline and provide a clean aesthetic, will also withstand
              all type of heavy weather with a 100% leakproof warranty.
            </p>
            <Link
              className="px-8 py-2 secondary-bg-color text-white rounded-md"
              href=""
            >
              View Brochure
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <p className="font-bold">Beauty</p>
              <p>
                The all-black solar shingles blend into your roof line and
                provide a clean aesthetic.
              </p>
            </div>
            <div>
              <p className="font-bold">Efficiency</p>
              <p>
                14 high-efficiency monocrystalline silicon solar cells provide a
                power rating of 63 watts per solar shingle.
              </p>
            </div>
            <div>
              <p className="font-bold">Simple to Install</p>
              <p>
                No need to find rafters or flash penetrations in the roofing
                system. Solar shingles are installed directly into the roof
                sheathing using standard deck screws. Fastening points are
                covered by subsequent solar shingles, the same way that asphalt
                shingles are installed.
              </p>
            </div>
            <div>
              <p className="font-bold">Lightweight</p>
              <p>
                The Apollo II system weighs about as many pounds per square foot
                as a typical asphalt shingle roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="col-[full-start/full-end] md:col-[center-start/center-end] w-full">
        <CallToAction
          header="We can help you calculate"
          headerColor="financing!"
          button={true}
        />
      </div>

      {/* Warranty Details */}

      <section className="col-[full-start/full-end] md:col-[center-start/center-end] py-[4rem]">
        <WarrantyDetails
          heading="Warranty Details"
          message="Considering that you should expect your solar system to generate electricity 25 years or more, it is important to take the time to understand your warranty options, and how CertainTeed protects your purchase with our comprehensive solar warranty. Here are a few things to consider"
        />
      </section>

      {/* What Includes */}

      <section className="col-[full-start/full-end] container whats-included-wave bg-no-repeat bg-cover">
        <div className="col-[full-start/full-end] md:col-[center-start/center-end]">
          <div className="flex flex-col lg:m-[8rem] mx-[2rem] my-[4rem] space-y-[1rem] primary-font-color shadow-xl rounded-md md:p-[4rem] p-[2rem] bg-white">
            <p className="secondary-font-color text-xl font-bold uppercase text-center pb-[2rem]">
              What's included
            </p>
            <div className="flex justify-between font-bold sm:text-base text-sm">
              <p>APOLLO II WARRANTY</p>
              <p className="md:mr-[2rem]">COVERAGE</p>
            </div>
            <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
            <div className="flex justify-between sm:text-base text-sm">
              <p>Solar Shingle Power Output*</p>
              <p className="md:mr-[3rem]">25 Years</p>
            </div>
            <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
            <div className="flex justify-between sm:text-base text-sm">
              <p>Inverter**</p>
              <p className="md:mr-[3rem]">10 years</p>
            </div>
            <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
            <div className="flex justify-between sm:text-base text-sm">
              <p>All other components supplied by CertainTeed</p>
              <p className="md:mr-[3rem]">25 Years</p>
            </div>
            <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
            <div className="flex justify-between sm:text-base text-sm">
              <p>110 mph wind warranty</p>
              <p className="md:mr-[3rem]">10 Years</p>
            </div>
            <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
            <div>
              <p className="secondary-font-color sm:text-base text-sm">
                When a Apollo II system is installed by a CertainTeed Solar
                Installer, the professional installation of the system is
                warranted as follows:
              </p>
            </div>
            <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
            <div className="flex justify-between sm:text-base text-sm">
              <p>Credentialed Solar Installer</p>
              <p className="md:mr-[3rem]">15 Years</p>
            </div>
            <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
            <div className="flex justify-between sm:text-base text-sm pb-[2rem]">
              <p>Master Solar Installer</p>
              <p className="md:mr-[3rem]">25 Years</p>
            </div>
            <Link
              className="px-8 py-3 secondary-bg-color text-white rounded-md font-semibold text-center"
              href="contact"
            >
              View Warranty
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}

      <section className="col-[full-start/full-end] md:col-[center-start/center-end]">
        <div className="lg:my-[8rem] my-[4rem]">
          <VideoSection />
        </div>
      </section>
    </div>
  );
};

export default ShinglesAndTiles;
