import Link from "next/link";

export const VideoSection = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-4 md:px-0 px-8">
      <div className="flex flex-col justify-center primary-font-color h-[25rem]">
        <p className="text-xl">Hey you!</p>
        <h3 className="text-3xl font-bold">Contact Us for more</h3>
        <h3 className="text-3xl secondary-font-color font-bold">
          Information!
        </h3>
        <p className="py-4">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua
          ad ad non deserunt sunt.{" "}
        </p>
        <div className="py-4">
          <input
            className="border pl-2 md:w-2/3 lg:w-1/2 2xl:w-2/3 py-2 mr-4 rounded-md"
            placeholder="Enter your email"
          ></input>
          <button className="px-6 py-2 primary-bg-color text-white rounded-md">
            Contact Us
          </button>
        </div>
      </div>
      <div className="w-full h-[25rem] lg:h-full flex flex-col justify-center">
        <iframe
          className="w-full h-[80%] rounded-xl shadow-md"
          src="https://www.youtube.com/embed/sM4eAo3vNR8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};
