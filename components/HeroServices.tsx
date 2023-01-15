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
    <div className="grid grid-cols-8 gap-5">
      {reverse ? (
        <>
          <div className="col-start-2 col-end-5 flex flex-col justify-center space-y-6 items-center">
            <h1 className="text-4xl font-bold primary-font-color">
              {heading}{" "}
              <span className="secondary-font-color">{headingColor}</span>
            </h1>
            <p className="py-5 text-lg font-normal primary-font-color">
              {message}
            </p>
          </div>
          <div className="col-start-5 col-span-4">
            <img className="w-full h-screen" src={imageUrl} alt="residential" />
          </div>
        </>
      ) : (
        <>
          <div className="col-start-1 col-end-9 lg:col-start-1 lg:col-span-4 lg:h-screen h-[30rem] overflow-hidden">
            <img
              className="w-screen md:w-full object-cover md:h-screen lg:translate-y-0 translate-y-[-10rem]"
              src={imageUrl}
              alt="residential"
            />
          </div>
          <div className="col-start-1 col-end-9 lg:col-start-5 lg:col-span-4 flex flex-col justify-center lg:pl-10 p-8 space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-bold primary-font-color">
              {heading}{" "}
              <span className="secondary-font-color">{headingColor}</span>
            </h1>
            <p className="py-5 text-lg font-normal primary-font-color">
              {message}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
