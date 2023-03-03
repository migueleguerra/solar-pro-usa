import Head from "next/head";
import { HeroServices } from "../components/HeroServices";
import { VideoSection } from "../components/VideoSection";

const Commercial = () => {
  return (
    <div className="container">
      <Head>
        <title>Solar Pro USA - Commercial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="col-[full-start/full-end]">
        <HeroServices
          imageUrl="https://images.unsplash.com/photo-1605639559140-c3cc865da9ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          heading="Commercial"
          headingColor="Solar Services"
          message="With a large portfolio of solar-powered, commercial clients, Solar Pro has a proven track record in providing customized, turnkey solar solutions to a wide variety of businesses, nonprofits, and government clients in Atlanta, and surrounding areas.
            From initial site survey through O & M, Solar Pro maintains 100% control over each project Insuring the most cost-effective energy-efficient and trouble-free system for each client."
        />
      </section>

      <section className="col-[full-start/full-end] lg:col-[full-start/full-end]">
        <HeroServices
          imageUrl="https://images.unsplash.com/photo-1592833159155-c62df1b65634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          heading="Commercial"
          headingColor="Applications"
          message="Solar power is an excellent pro-business and pro-community option for commercial operation entities. We have an excellent track record providing expert consultation and solutions. Solar Pro provides you with excellent system options which decrease your carbon footprint and utility expenses. Solar industry costs are at an all-time low, allowing businesses such as yours to see a high ROI with a low payback period. Solar Pro can save your company thousands by switching to renewable energy. This changes the question from, “Why would I go solar?” to, “Why would I not?”"
          reverse={true}
        />
      </section>

      <section className="col-[full-start/full-end] container relative py-[4rem] bg-[#f9fafb]">
        <div className="absolute gray-bg-color px-[15rem] lg:py-[18rem] rounded-l-lg right-0 top-[10%]" />
        <div className="absolute dots px-[10rem] lg:py-[18rem] right-0 top-[9.5%] bg-no-repeat bg-center" />
        <div className="col-[full-start/full-end] md:col-[center-start/center-end] lg:py-[10rem] z-10">
          <VideoSection />
        </div>
      </section>
    </div>
  );
};

export default Commercial;
