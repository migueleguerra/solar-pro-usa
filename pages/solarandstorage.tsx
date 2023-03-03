import Head from "next/head";
import Link from "next/link";
import { HeroServices } from "../components/HeroServices";
import { CallToAction } from "../components/CallToAction";
import { VideoSection } from "../components/VideoSection";

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
          imageUrl="https://images.unsplash.com/photo-1630608354129-6a7704150401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          heading="Backup"
          headingColor="Protection"
          message="Say goodbye to the power outages! Our integrated solutions will supply your clean energy if the grid goes down. Your smart system will automatically supply you with clean energy in a matter of milliseconds that will keep all your appliances running for days. Your system will keep on feeding your home and recharging your battery bank with sunlight to produce a perpetual energy supply."
        />
      </section>

      {/* boucher section */}

      <section className="col-[full-start/full-end] container what-you-get-wave bg-no-repeat bg-cover">
        <div className="md:col-[center-start/center-end] col-[full-start/full-end] px-[2rem] grid lg:grid-cols-2 gap-[4rem] primary-font-color py-[4rem]">
          <div className="flex flex-col items-start space-y-4 text-lg">
            <p>
              Solar Pro selects the highest quality system components in the
              market to protect your investments.
            </p>
            <p>
              <span className="secondary-font-color">Enphase Energy</span> (Up
              to 15 year or up to 4,000 cycles)
            </p>
            <p>
              <span className="secondary-font-color">Sonnen</span> (Up to 15
              year or 15,000 cycles warranty)
            </p>
            <div className="transform transition duration-200 hover:scale-110">
              <Link
                className="px-8 py-2 secondary-bg-color text-white rounded-md"
                href=""
              >
                View Brochure
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <p className="font-bold">Complete Solar system</p>
              <p>
                Solar pro provides you with a completely customized solar system
                design. From shingles to batteries, our Engineers create a
                top-of-line solar energy system to tailor your individual needs
              </p>
            </div>
            <div>
              <p className="font-bold">Solar Pro Installation</p>
              <p>
                Each Solar Pro installation comes with a power production
                warranty and a no leak guarantee. Since we are licensed roofers
                and solar installers, we bring you the best of both worlds with
                a warranty that is safe backed by our licensing board
              </p>
            </div>
            <div>
              <p className="font-bold">State of the art solar system:</p>
              <p>
                By working with the top household solar brands our work is not
                only backed by us but also the leading manufacturers in the
                industry
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

export default SolarAndStorage;
