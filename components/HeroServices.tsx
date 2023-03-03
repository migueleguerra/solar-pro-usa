interface HeroServicesParams {
  heading: string;
  headingColor: string;
  message: string;
  imageUrl: string;
  reverse?: boolean;
}

export const HeroServices = ({
  heading,
  headingColor,
  message,
  imageUrl,
  reverse = false,
}: HeroServicesParams) => {
  return (
    <div className="grid grid-cols-2">
      {reverse ? (
        <>
          <div className="col-start-1 col-end-9 xl:ml-[23%] lg:ml-[10%] lg:col-start-1 lg:col-span-1 flex flex-col justify-center lg:pl-10 p-8 space-y-6 xl:pt-8 lg:pt-[10rem] lg:text-left primary-font-color">
            <h1 className="text-4xl font-bold">
              {heading}
              <span className="secondary-font-color"> {headingColor}</span>
            </h1>
            <p className="pt-5 lg:pb-0 pb-[4rem] text-lg font-normal">
              {message}
            </p>
          </div>
          <div className="col-start-2 col-span-1">
            <img
              className="w-full h-screen lg:block hidden"
              src={imageUrl}
              alt="residential"
            />
          </div>
        </>
      ) : (
        <>
          <div className="col-start-1 col-end-9 lg:col-start-1 lg:col-span-1 lg:h-screen h-[30rem] overflow-hidden">
            <img
              className="w-screen md:w-full object-cover md:h-screen h-[max(30rem,30vh)]"
              src={imageUrl}
              alt="residential"
            />
          </div>
          <div className="col-start-1 col-end-9 lg:mr-[20%] lg:col-start-2 lg:col-span-1 flex flex-col justify-center lg:pl-10 p-8 space-y-6 primary-font-color lg:py-0 py-[4rem]">
            <h1 className="text-4xl font-bold">
              {heading}
              <span className="secondary-font-color"> {headingColor}</span>
            </h1>
            <p className="py-5 text-lg font-normal">{message}</p>
          </div>
        </>
      )}
    </div>
  );
};
