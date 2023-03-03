import Head from "next/head";
import { HeroServices } from "../components/HeroServices";
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
          imageUrl="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
          heading="Apollo III"
          headingColor="Solar System"
          message="The Apollo II solar roofing system packs sleek yet powerful solar energy production into a low-profile roofing system. Featuring solar shingles that can be installed with a new OR existing asphalt shingle roof, the Apollo II system offers clean energy without the bulky look of racks and panels"
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
              The Apollo II solar roofing combines beauty with efficiency and
              durability.
            </p>
            <p>
              These all-black solar shingles and tiles not only blend into your
              roof line and provide a clean aesthetic, but also withstand all
              types of heavy weather with a 100% leakproof warranty.
            </p>
            <div className="transform transition duration-200 hover:scale-110">
              <a
                className="px-8 py-2 secondary-bg-color text-white rounded-md"
                href="files/Apollo-Tile-II-TDS-73W-e-2208ctr.pdf"
                target="_blank"
              >
                View Brochure
              </a>
            </div>
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
                The Apollo II system weighs about as much per square foot as a
                typical asphalt shingle roof.
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
          message="Considering that you should expect your solar system to generate electricity for 25 years or more, it is important to take the time to understand your warranty options and how CertainTeed protects your purchase with our comprehensive solar warranty. Here are a few things to consider"
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
              <p className="max-w-[14rem]">APOLLO II WARRANTY</p>
              <p className="md:mr-[2rem]">COVERAGE</p>
            </div>
            <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
            <div className="flex justify-between sm:text-base text-sm">
              <p className="max-w-[14rem]">Solar Shingle Power Output</p>
              <p className="md:mr-[3rem]">25 Years</p>
            </div>
            <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
            <div className="flex justify-between sm:text-base text-sm">
              <p className="max-w-[14rem]">Inverter</p>
              <p className="md:mr-[3rem]">10 years</p>
            </div>
            <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
            <div className="flex justify-between sm:text-base text-sm">
              <p className="max-w-[14rem]">
                All other components supplied by CertainTeed
              </p>
              <p className="md:mr-[3rem]">25 Years</p>
            </div>
            <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
            <div className="flex justify-between sm:text-base text-sm">
              <p className="max-w-[14rem]">110 mph wind warranty</p>
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
              <p className="max-w-[14rem]">Credentialed Solar Installer</p>
              <p className="md:mr-[3rem]">15 Years</p>
            </div>
            <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
            <div className="flex justify-between sm:text-base text-sm pb-[2rem]">
              <p className="max-w-[14rem]">Master Solar Installer</p>
              <p className="md:mr-[3rem]">25 Years</p>
            </div>
            <div className="flex justify-center transform transition duration-200 hover:scale-110">
              <a
                className="py-3 w-[95%] secondary-bg-color text-white rounded-md font-semibold text-center"
                href="files/solarwarranty.pdf"
                target="_blank"
              >
                View Warranty
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}

      <section className="col-[full-start/full-end] container relative">
        <div className="absolute gray-bg-color px-[15rem] lg:py-[18rem] rounded-l-lg right-0 top-[10%]" />
        <div className="absolute dots px-[10rem] lg:py-[18rem] right-0 top-[9.5%] bg-no-repeat bg-center" />
        <div className="col-[full-start/full-end] md:col-[center-start/center-end] py-[5rem] lg:py-[10rem] z-10">
          <VideoSection />
        </div>
      </section>
    </div>
  );
};

export default ShinglesAndTiles;
