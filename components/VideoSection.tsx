import Link from "next/link";

export const VideoSection = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-8 gap-12 md:px-0 px-8">
      <div className="flex flex-col justify-center items-start primary-font-color lg:h-[25rem] space-y-[1rem]">
        <p className="text-xl">Hey you!</p>
        <h3 className="text-3xl font-bold">
          Contact Us for more{" "}
          <span className="secondary-font-color">Information!</span>
        </h3>
        <p>
          If you have any questions and want to talk to one of our experts feel
          free to reach out to us.
        </p>
        <Link
          href="/quickContact"
          className="px-6 py-2 primary-bg-color text-white rounded-md transform transition duration-200 hover:scale-110"
        >
          Quick contact
        </Link>
      </div>
      <div className="w-full h-[25rem] lg:h-full flex flex-col justify-center">
        <iframe
          className="w-full h-[80%] rounded-xl shadow-md"
          src="https://www.youtube.com/embed/wjeIQBQQ1p8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
};
