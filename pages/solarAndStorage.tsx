import Head from "next/head";
import Link from "next/link";
import { HeroServices } from "../components/HeroServices";
import { CallToAction } from "../components/CallToAction";
import { WarrantyDetails } from "../components/systems/WarrantyDetails";

const SolarAndStorage = () => {
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
          heading="Backup"
          headingColor="Protection"
          message="Say goodbye to the power outages, our integrated solutions will supply your CLEAN energy when the grid goes down.
          Your smart system will automatically supply you CLEAN energy in a matter of milliseconds that will keep all your appliances running for days. Your system will keep on feeding your home and recharging your battery bank with the sunlight and will produce a perpetual energy supply."
        />
      </section>

      {/* boucher section */}
      <section className="md:col-[center-start/center-end] col-[full-start/full-end] px-[2rem] grid lg:grid-cols-2 gap-[4rem] primary-font-color py-[4rem]">
        <div className="flex flex-col items-start space-y-4 text-lg">
          <p>
            Solar Pro selects the highest quality system components in the
            market to protect your investments.
          </p>
          <p>
            <span className="secondary-font-color">Enphase Energy</span> (Up to
            15 year or up to 4,000 cycles)
          </p>
          <p>
            <span className="secondary-font-color">Sonnen</span> (Up to 15 year
            or 15,000 cycles warranty)
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
            <p className="font-bold">A complete solar system</p>
            <p>
              A complete solar system engineered for maximum performance that is
              fully warranted by CertainTeed
            </p>
          </div>
          <div>
            <p className="font-bold">A CertainTeed installation warranty</p>
            <p>
              A CertainTeed installation warranty, which provides coverage on
              the installer's workmanship for up to 25 years when the Solstice
              system is installed by a CertainTeed-credentialed solar installer
            </p>
          </div>
          <div>
            <p className="font-bold">State-of-the-art flashing system</p>
            <p>
              State-of-the-art flashing system that weatherproofs the
              penetrations in your roof, selected by a roofing manufacturer with
              more than a century of roofing experience
            </p>
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

      <section className="col-[full-start/full-end] md:col-[center-start/center-end]">
        <div className="flex flex-col m-[8rem] space-y-[1rem] primary-font-color shadow-xl rounded-md p-[4rem]">
          <p className="secondary-font-color text-xl font-bold uppercase text-center pb-[2rem]">
            What's included
          </p>
          <div className="flex justify-between font-bold">
            <p>APOLLO II WARRANTY</p>
            <p className="mr-[4rem]">COVERAGE</p>
          </div>
          <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
          <div className="flex justify-between">
            <p>Solar Shingle Power Output*</p>
            <p className="mr-[5rem]">25 Years</p>
          </div>
          <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
          <div className="flex justify-between">
            <p>Inverter**</p>
            <p className="mr-[5rem]">10 years</p>
          </div>
          <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
          <div className="flex justify-between">
            <p>All other components supplied by CertainTeed</p>
            <p className="mr-[5rem]">25 Years</p>
          </div>
          <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
          <div className="flex justify-between">
            <p>110 mph wind warranty</p>
            <p className="mr-[5rem]">10 Years</p>
          </div>
          <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
          <div>
            <p className="secondary-font-color">
              When a Apollo II system is installed by a CertainTeed Solar
              Installer, the professional installation of the system is
              warranted as follows:
            </p>
          </div>
          <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
          <div className="flex justify-between">
            <p>Credentialed Solar Installer</p>
            <p className="mr-[5rem]">15 Years</p>
          </div>
          <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
          <div className="flex justify-between pb-[2rem]">
            <p>Master Solar Installer</p>
            <p className="mr-[5rem]">25 Years</p>
          </div>
          <Link
            className="px-8 py-3 secondary-bg-color text-white rounded-md font-semibold text-center"
            href="contact"
          >
            View Warranty
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SolarAndStorage;
