import Link from "next/link";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef?.current?.play();
  }, []);

  return (
    <header className="col-[full-start/full-end] flex justify-start items-center h-screen relative overflow-hidden custom-img-gradient">
      <div className="sm:w-[30rem] xl:ml-[12rem] md:ml-[6rem] md:px-0 px-[2rem]">
        <h1 className="text-5xl font-bold primary-font-color">
          The time for <span className="secondary-font-color">solar</span> is
          now
        </h1>
        <p className="py-5 text-xl font-normal primary-font-color">
          Here at Solar Pro, we thrive on providing innovative solutions to our
          customers
        </p>
        <div className="transform transition duration-200 hover:scale-110 hover:translate-x-5">
          <Link
            href="contact"
            className="px-8 py-2 secondary-bg-color text-white rounded-md transform transition duration-200 hover:scale-110 hover:translate-x-5"
          >
            Get a Quote
          </Link>
        </div>
      </div>
      <video
        className="video absolute object-cover h-full z-[-1]"
        muted
        loop
        ref={videoRef}
      >
        <source src="hero/hero-mp4.mp4" type="video/mp4" />
        <source src="hero/hero-webm.webm" type="video/webm" />
      </video>
    </header>
  );
};
