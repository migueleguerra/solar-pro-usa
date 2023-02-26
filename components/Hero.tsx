import Link from "next/link";

export const Hero = () => {
  return (
    <header className="grid col-[full-start/full-end] relative items-center h-screen bg-fixed bg-center bg-cover custom-img">
      <div className="absolute inset-0 custom-img-gradient" />
      <div className="w-full p-10 z-[1] xl:pl-[12rem] lg:w-1/2 md:w-3/4 md:pl-[6rem]">
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
            className="px-8 py-2 secondary-bg-color text-white rounded-md"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};
