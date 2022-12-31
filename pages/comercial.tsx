import Head from "next/head";
import { CallToAction } from "../components/CallToAction";
import { HeroServices } from "../components/HeroServices";
import { VideoSection } from "../components/VideoSection";

const Comercial = () => {
  return (
    <div>
      <Head>
        <title>Solar Pro USA - Comercial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroServices
        imageUrl="https://images.unsplash.com/photo-1605639559140-c3cc865da9ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        heading="Comercial"
        headingColor="Solar Services"
        message="With a large portfolio of solar-powered, commercial clients, Solar Pro has a proven track record in providing customized, turnkey solar solutions to a wide variety of businesses, nonprofits, and government clients in Atlanta, and surrounding areas.
            From initial site survey through O & M, Solar Pro maintains 100% control over each project Insuring the most cost-effective energy-efficient and trouble-free system for each client."
      />

      <section className="grid grid-cols-8 relative">
        <div className="absolute -top-28 col-start-2 col-end-8 w-full">
          <CallToAction
            header="We can help you calculate"
            headerColor="financing!"
            button={true}
          />
        </div>
        <div className="col-start-1 col-end-9">
          <HeroServices
            imageUrl="https://images.unsplash.com/photo-1592833159155-c62df1b65634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            heading="Comercial"
            headingColor="Applications"
            message="Solar power is an excellent pro-business and pro-community option for commercial operation entities. We have an excellent track record providing expert consultation and solutions. Solar Pro provides you with excellent system option which decrease your carbon footprint and utility expenses.

                    Solar industry costs are at an all-time low allowing business such as yourself to see a high IRR with a low payback period. Solar Pro can save your company thousands by switching to renewable energy. This changes the question from why would I go solar? to why would I not?"
            reverse={true}
          />
        </div>
      </section>

      <section className="grid grid-cols-8 py-20 my-20">
        <div className="col-start-2 col-end-8">
          <VideoSection />
        </div>
      </section>
    </div>
  );
};

export default Comercial;
