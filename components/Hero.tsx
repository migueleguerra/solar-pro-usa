import Link from "next/link";

interface HeroParams {
  heading: string;
  headingColor: string;
  message: string;
}

export const Hero = ({ heading, headingColor, message }: HeroParams) => {
  return (
    <header className="grid col-[full-start/full-end] relative items-center h-screen bg-fixed bg-center bg-cover custom-img">
      <div className="absolute inset-0 custom-img-gradient" />
      <div className="w-full p-10 z-[1] xl:pl-[12rem] lg:w-1/2 md:w-3/4 md:pl-[6rem]">
        <h1 className="text-5xl font-bold primary-font-color">
          {heading} <span className="secondary-font-color">{headingColor}</span>
        </h1>
        <p className="py-5 text-xl font-normal primary-font-color">{message}</p>
        <Link
          href="/contact"
          className="px-8 py-2 secondary-bg-color text-white rounded-md"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
};
