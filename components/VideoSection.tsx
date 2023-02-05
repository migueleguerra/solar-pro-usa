import Link from "next/link";

export const VideoSection = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-4 md:px-0 px-8">
      <div className="flex flex-col justify-center primary-font-color h-[25rem] space-y-[1rem]">
        <p className="text-xl">Hey you!</p>
        <h3 className="text-3xl font-bold">
          Contact Us for more{" "}
          <span className="secondary-font-color">Information!</span>
        </h3>
        <p>
          If you have any questions and want to talk to one of our experts feel
          free to reach out to us.
        </p>
        <div className="grid md:grid-cols-3 gap-[1rem] grid-cols-1">
          <input
            className="border p-2 rounded-md col-start-1 col-span-2"
            placeholder="Enter your email"
          ></input>
          <div className="transform transition duration-200 hover:scale-110 hover:translate-x-5 hover:md:translate-x-0">
            <button className="px-6 py-2 md:w-full w-[50%] primary-bg-color text-white rounded-md">
              Contact Us
            </button>
          </div>
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
