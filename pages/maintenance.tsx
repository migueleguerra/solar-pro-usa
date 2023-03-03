import Head from "next/head";
import { CallToAction } from "../components/CallToAction";
import { HeroServices } from "../components/HeroServices";
import { VideoSection } from "../components/VideoSection";

const Maintenance = () => {
  return (
    <div className="container">
      <Head>
        <title>Solar Pro USA - Maintenance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="col-[full-start/full-end]">
        <HeroServices
          imageUrl="https://images.unsplash.com/photo-1660330590022-9f4ff56b63f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          heading="Solar Maintenance"
          headingColor="Services"
          message="These systems can last for decades and provide your home with an abundant source of energy. Over time, however, dust accumulation, bird droppings, squirrels chewing through cables and other things can cause the panels to lose efficiency. We want to ensure our products run at peak performance. If you ever notice a loss in output - or if you just want to confirm that everything is in top working condition - contact us and we'll check it out for you!"
        />
      </section>

      <div className="lg:translate-y-[-50%] z-[2] col-[full-start/full-end] md:col-[center-start/center-end]">
        <CallToAction
          header="We can help you calculate"
          headerColor="financing!"
          button={true}
        />
      </div>

      {/* Maintenance Services */}

      <section className="lg:translate-y-[-30%] grid col-[full-start/full-end] grid-cols-2 primary-font-color lg:py-0">
        <div className="xl:ml-[30%] lg:ml-[20%] ml-0 xl:translate-y-[2rem] lg:translate-y-[4rem] flex flex-col lg:items-start items-center col-start-1 col-span-2 lg:col-span-1 justify-center space-y-[1rem] lg:pr-[4rem] px-[2rem] lg:px-0 lg:pt-0 py-[4rem]">
          <div className="text-3xl font-bold flex">
            <h2>
              Maintenance <span className="secondary-font-color">Service</span>
            </h2>
          </div>
          <p className="text-xl pb-4 text-center lg:text-left">
            We offer a variety of services for your Operation and maintenance
            needs. These services are but not limited to:
          </p>
          <div className="grid gap-8 py-[2rem] lg:py-0 lg:px-0 px-[4rem]">
            <div className="flex items-center space-x-4">
              <img src="maintenance/maintenance-ac.png" alt="converted" />
              <div>
                <h3 className="font-bold dark-gray-font-color">
                  AC system maintenance
                </h3>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src="maintenance/maintenance-dc.png" alt="converted" />
              <div>
                <h3 className="font-bold dark-gray-font-color">
                  DC system maintenance
                </h3>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src="maintenance/maintenance-data.png" alt="net meter" />
              <div>
                <h3 className="font-bold dark-gray-font-color">
                  Data system maintenance
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-span-1 lg:block hidden">
          <img
            className="h-screen"
            src="https://images.unsplash.com/photo-1542336391-ae2936d8efe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="how solar works"
          />
        </div>
      </section>

      <section className="col-[full-start/full-end] container relative lg:translate-y-[-30%] py-[4rem] bg-[#f9fafb]">
        <div className="absolute gray-bg-color px-[15rem] lg:py-[18rem] rounded-l-lg right-0" />
        <div className="absolute dots px-[10rem] lg:py-[18rem] right-0 top-[2%] bg-no-repeat bg-center" />
        <div className="col-[full-start/full-end] md:col-[center-start/center-end] z-10">
          <VideoSection />
        </div>
      </section>
    </div>
  );
};

export default Maintenance;
