import Head from "next/head";
import Link from "next/link";
import { CallToAction } from "../components/CallToAction";
import { HeroServices } from "../components/HeroServices";

const Residential = () => {
  return (
    <div className="container">
      <Head>
        <title>Solar Pro USA - Residencial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Services */}

      <section className="col-[full-start/full-end]">
        <HeroServices
          imageUrl="https://images.unsplash.com/photo-1655300283246-1ef0317a565d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
          heading="Residential"
          headingColor="Solar"
          message="Solar Pro provides best-in-class energy solutions to homeowners throughout the greater metro Atlanta area. By offering the leading equipment in the industry, we maximize our ability to fit any budget. We aim to give power back to the consumer, allowing them to maximize their energy savings and manage those savings from the comfort of their home. Gone are the days of bulky equipment and overpriced installations. Solar Pro offers a wide selection of products including solar shingles, tiles, conventional panels, and more! With a new federal tax incentive and the monthly energy savings possible through solar energy, a fast return on investment (ROI) is inevitable. Contact Solar Pro today and learn how to take your financial independence to a whole new level!"
        />
      </section>

      {/* Residential Services System */}

      <section className="py-[5rem] grid col-[full-start/full-end] lg:px-[12rem] gap-4 text-center primary-font-color gray-bg-color">
        <h2 className="text-3xl font-bold">What is the process?</h2>
        <p className="text-xl mb-10 p-8 lg:p-0 lg:text-center text-left">
          It's simple! After a brief consultation with a Solar Pro team member
          and one of your utility bills our experts will design a custom
          proposal for your home based on your needs and goals. We will give you
          options so you can pick the one that benefits you the most. Once
          everything is just right, we get to work!
        </p>
        <div className="grid md:grid-cols-4 lg:px-[6rem] md:px-0 gap-[4rem] md:gap-4 font-bold">
          <div className="flex flex-col">
            <img
              className="h-[6rem]"
              src="residential/collect.svg"
              alt="collect"
            />
            <p>Collect Utility Bill</p>
          </div>
          <div className="flex flex-col">
            <img
              className="h-[6rem]"
              src="residential/design.svg"
              alt="design"
            />
            <p>Custom Design</p>
          </div>
          <div className="flex flex-col">
            <img className="h-[6rem]" src="residential/pick.svg" alt="pick" />
            <p>Pick the best for you</p>
          </div>
          <div className="flex flex-col">
            <img className="h-[6rem]" src="residential/work.svg" alt="work" />
            <p>We get to work</p>
          </div>
        </div>
      </section>

      {/* Premium Solar Roof */}

      <section className="col-[full-start/full-end] container relative">
        <img
          className="absolute left-[-25rem] top-[10%] xl:block hidden"
          src="dots.svg"
          alt="dots"
        />
        <img
          className="absolute right-[-25rem] bottom-[-15%] xl:block hidden"
          src="dots.svg"
          alt="dots"
        />
        <div className="grid pb-[5rem] lg:pb-0 col-[full-start/full-end] md:col-[center-start/center-end] md:grid-rows-7 lg:grid-cols-2 primary-font-color gap-4 z-10">
          <div className="py-[4rem] text-3xl font-bold text-center px-[2rem] lg:col-start-1 lg:col-span-2">
            <h2>
              Premium Solar Roof Systems, Backed By The Industry's{" "}
              <span className="secondary-font-color">Best Warranty</span>
            </h2>
          </div>
          <div className="px-8">
            <img
              className="rounded-md shadow-xl w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1630608354129-6a7704150401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt="solar panels"
            />
          </div>
          <div className="p-8 flex flex-col space-y-[2rem] justify-center items-start">
            <h3 className="text-2xl font-bold">
              Solar and <span className="secondary-font-color">Storage</span>
            </h3>
            <p>
              Don't let bad weather and power outages put your life on hold. Ask
              about our solar storage options, and you can{" "}
              <span className="font-bold">ALWAYS</span> have clean energy to
              power your essentials.
            </p>
            <div className="transform transition duration-200 hover:scale-110">
              <Link
                className="px-8 py-2 secondary-bg-color text-white rounded-md"
                href="solarandstorage"
              >
                Know more
              </Link>
            </div>
          </div>
          <div className="p-8 flex flex-col space-y-[2rem] justify-center items-start lg:row-start-3">
            <h3 className="text-2xl font-bold">
              Solar{" "}
              <span className="secondary-font-color">Shingles & Tiles</span>
            </h3>
            <p>
              Take your home's aesthetic to the next level by installing our
              solar tiles and shingles and pairing them with our sleek ceramic,
              metal, or asphalt roofing materials
            </p>
            <div className="transform transition duration-200 hover:scale-110">
              <Link
                className="px-8 py-2 secondary-bg-color text-white rounded-md"
                href="shinglesandtiles"
              >
                Know more
              </Link>
            </div>
          </div>
          <div className="px-8 row-start-4 lg:row-start-3">
            <img
              className="rounded-md shadow-xl w-full h-full object-cover"
              src="https://www.cnet.com/a/img/resize/2044f5631e1ddfd77164c6332f0579c55ccf98ef/hub/2011/10/20/6975a085-fdc5-11e2-8c7c-d4ae52e62bcc/Dow_solar_shingles.jpg?auto=webp&fit=crop&height=675&width=1200"
              alt="solar panels"
            />
          </div>
          <div className="px-8">
            <img
              className="rounded-md shadow-xl w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1660330589827-da8ab7dd3c02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              alt="solar panels"
            />
          </div>
          <div className="p-8 flex flex-col space-y-[2rem] justify-center items-start">
            <h3 className="text-2xl font-bold">
              <span className="secondary-font-color">Premium</span> Solar
              Systems
            </h3>
            <p>
              We offer world class leading technology that will give you the
              peace of mind that you need. Solar panels paired with micro
              inverter technology will give you full monitoring system that will
              allow you to keep track of your savings.
            </p>
            <div className="transform transition duration-200 hover:scale-110">
              <Link
                className="px-8 py-2 secondary-bg-color text-white rounded-md"
                href="solarsystems"
              >
                Know more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:translate-y-[50%] col-[full-start/full-end] md:col-[center-start/center-end] w-full">
        <CallToAction
          header="We can help you calculate"
          headerColor="financing!"
          button={true}
        />
      </div>

      {/* How it works? */}

      <section className="grid col-[full-start/full-end] lg:col-[center-start/full-end] grid-cols-2 primary-font-color lg:py-0 py-[2rem]">
        <div className="flex flex-col lg:items-start items-center col-start-1 col-span-2 lg:col-span-1 justify-center space-y-[1rem] px-[2rem] pt-[4rem] lg:pr-[4rem] lg:pb-0 pb-[4rem]">
          <div className="text-3xl font-bold flex">
            <h2>
              How Solar <span className="secondary-font-color">works</span>
            </h2>
          </div>
          <p className="text-xl pb-[2rem] text-center lg:text-left">
            These are the essential steps for the solar energy production.
          </p>
          <div className="grid gap-5 lg:py-0">
            <div className="flex items-center space-x-4">
              <img src="residential/solarworks-sun.png" alt="sunlight" />
              <div>
                <h3 className="font-bold dark-gray-font-color">Sunlight</h3>
                <p className="text-sm">Activates the panels</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src="residential/solarworks-cells.png" alt="cells" />
              <div>
                <h3 className="font-bold dark-gray-font-color">The Cells</h3>
                <p className="text-sm">Produce electrical current</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="residential/solarworks-plug.png"
                alt="electrical energy"
              />
              <div>
                <h3 className="font-bold dark-gray-font-color">
                  The electrical Energy
                </h3>
                <p className="text-sm">Is converted</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src="residential/solarworks-converted.png" alt="converted" />
              <div>
                <h3 className="font-bold dark-gray-font-color">
                  The converted
                </h3>
                <p className="text-sm">Electricity powers your home</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src="residential/solarworks-ruler.png" alt="net meter" />
              <div>
                <h3 className="font-bold dark-gray-font-color">A net meter</h3>
                <p className="text-sm">Measure usage</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-start-2 lg:block hidden">
          <img
            className="h-screen"
            src="https://images.unsplash.com/photo-1542336391-ae2936d8efe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="how solar works"
          />
        </div>
      </section>
    </div>
  );
};

export default Residential;
