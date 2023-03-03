import type { NextPage } from "next";
import Head from "next/head";
import { CallToAction } from "../components/CallToAction";
import { FeedbackCard } from "../components/FeedbackCard";
import { Hero } from "../components/Hero";
import { MainCard } from "../components/MainCard";
import { ServiceCard } from "../components/ServiceCard";
import { VideoSection } from "../components/VideoSection";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Solar Pro USA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero section */}

      <Hero />

      {/* Buisness Goals section */}

      <div className="translate-y-[-25%] col-[full-start/full-end] md:col-[center-start/center-end]">
        <CallToAction
          header="Generate your own solar energy and  obtain energy dependability"
          message="Our team of solar roof experts are here to help you save BIG! Our job is to provide  the perfect solution based on your financial goals"
        />
      </div>

      <section className="grid col-[full-start/full-end] md:col-[center-start/center-end] pb-[5rem]">
        <h2 className="primary-font-color text-3xl font-bold text-center py-[4rem] px-8 md:px-0">
          Our approach to reach your business goals
        </h2>
        <div className="relative">
          <img
            className="absolute left-[25%] hidden md:block md:w-[15%] md:top-[25%] lg:top-[30%]"
            src="line-down.svg"
            alt="line-down"
          />
          <img
            className="absolute left-[60%] hidden md:block md:w-[15%] md:top-[10%] lg:top-[20%]"
            src="line-up.svg"
            alt="line-up"
          />
          <div className="grid sm:grid-cols-3 sm:gap-8">
            <MainCard
              imgSrc="shield.svg"
              header="Reliability"
              message="We offer maximum expertise and the leading material in the market"
            />
            <MainCard
              imgSrc="wallet.svg"
              header="Financial Gain"
              message="Generate your own energy and save. Take advantage of the solar incentives to achieve a quick return on investment (ROI)"
            />
            <MainCard
              imgSrc="eco.svg"
              header="Eco Friendly"
              message="Environmental - Produce trusted clean energy and reduce your carbon footprint"
            />
          </div>
        </div>
      </section>

      {/* Services section */}

      <section className="grid col-[full-start/full-end] md:col-[center-start/center-end] px-2 md:px-0 text-center">
        <h2 className="text-3xl font-bold primary-font-color pb-[4rem]">
          Our Services
        </h2>
        <div>
          <div className="grid lg:grid-cols-3 gap-12 xl:gap-6 lg:gap-4 px-8 lg:px-0">
            <ServiceCard
              imageUrl="https://images.unsplash.com/flagged/photo-1566838803980-56bfa5300e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              header="Residential"
              message="A skilled solar technician will provide you with a custom photovoltaic (PV) solar system design, proposal and advice..."
              linkHref="residential"
            />
            <ServiceCard
              imageUrl="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              header="Commercial"
              message="With a large portfolio of solar-powered, commercial clients, Solar Pro has a proven track record in providing customized..."
              linkHref="commercial"
            />
            <ServiceCard
              imageUrl="https://images.unsplash.com/photo-1660330589257-813305a4a383?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              header="Maintenance"
              message="These systems can last for decades and provide your home with an abundant source of energy, but panels can lose efficiency..."
              linkHref="maintenance"
            />
          </div>
        </div>
      </section>

      {/* Feedback section */}

      <div className="col-[full-start/full-end] md:col-[center-start/center-end] translate-y-[50%] z-[1]">
        <CallToAction
          header="We can help you calculate"
          headerColor="financing!"
          button={true}
        />
      </div>

      <section className="col-[full-start/full-end] pt-[14rem] pb-[4rem] container text-center feedback-wave bg-no-repeat bg-center bg-cover">
        <div className="grid col-[full-start/full-end] md:col-[center-start/center-end] px-8 md:px-0 gap-8">
          <h2 className="text-3xl primary-font-color font-bold">
            Our Clients Speak
          </h2>
          <p className="primary-font-color text-xl">
            Giving the best service and experience to our customers
          </p>
          <div className="relative">
            <div className="grid xl:grid-cols-3 gap-8 sm:px-10 xl:p-0 sm:gap-4">
              <FeedbackCard
                heading="Highly Recommend"
                message="We are so pleased with our choice to go with Solar Pro to install our new system. 
                From start to finish this company was a true pleasure to work with. 
                Their sales team was amazing, and gave us straight forward honest advice and helped us design a system that worked for our situation. 
                Highly recommend to anyone looking to go solar"
                name="Ansley Benjamin"
              />
              <FeedbackCard
                heading="Intuitive Design"
                message="Solar Pro was fantastic! They answered all of our questions and kept us up to date on the progress of our project. 
                They were very patient with us while getting ready to close. 
                I would definately recommend Solar Pro for any installation in Georgia. 
                They had the best customer service!"
                name="Julis Melo"
              />
              <FeedbackCard
                heading="Mindblowing Service"
                message="I am very proud of my new solar panels. 
                Solar Pro was very professional throughout the entire process. 
                Jim was very prompt and knowledgeable which made my experience a pleasant one. 
                I never felt pressured and Jim took the time to really listen to me. 
                He answered all of my questions. Im so happy I called Solar Pro!"
                name="Kelly Smith"
              />
            </div>
          </div>
        </div>
      </section>

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

export default Home;
