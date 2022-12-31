import Head from "next/head";
import { CallToAction } from "../components/CallToAction";
import { HeroServices } from "../components/HeroServices";
import { WarrantyDetails } from "../components/systems/WarrantyDetails";
import { WhatYouGet } from "../components/systems/WhatYouGet";

const SolarPanels = () => {
  return (
    <div>
      <Head>
        <title>Solar Pro USA - Solar Panels</title>
      </Head>
      <HeroServices
        heading="Solstice"
        headingColor="Solar System"
        message="CertainTeeds Solstice photovoltaic system is where smart design and operational excellence converge. The same depth of knowledge and rigorous standards that make our roofing and building systems best-in-class also apply to each Solstice component. This is why we confidently back our Solstice systems with the best warranty in the industry."
        imageUrl="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        reverse={true}
      />
      <div className="mt-20 mb-60 gray-bg-color">
        <WhatYouGet
          heading="What"
          headerColor="you get"
          message="CertainTeed's Solstice solar system combines the efficiency and affordability of traditional solar products with the unique value of CertainTeed's comprehensive warranty, which covers the full system, as well as its professional installation, for up to 25 years. We've selected the highest quality system components and paired them with our solar modules for a seamless solar experience."
        />
      </div>
      <div className="grid grid-cols-8 relative">
        <div className="col-start-2 col-end-8 absolute -top-40 w-full">
          <CallToAction
            header="We can help you calculate"
            headerColor="financing!"
            button={true}
          />
        </div>
        <div className="mt-40 col-start-1 col-end-9">
          <WarrantyDetails
            heading="Warranty Details"
            message="Considering that you should expect your solar system to generate electricity 25 years or more, it is important to take the time to understand your warranty options, and how CertainTeed protects your purchase with our comprehensive solar warranty. Here are a few things to consider:"
          />
        </div>
      </div>
    </div>
  );
};

export default SolarPanels;
