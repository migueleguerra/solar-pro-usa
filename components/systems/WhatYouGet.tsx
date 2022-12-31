interface WhatYouGetParams {
  heading: string;
  headerColor: string;
  message: string;
}

export const WhatYouGet = ({
  heading,
  headerColor,
  message,
}: WhatYouGetParams) => {
  return (
    <section className="grid grid-cols-8 primary-font-color">
      <div className="col-start-2 col-end-5 flex flex-col gap-5 items-start justify-center">
        <h3 className="text-3xl font-bold">
          {heading} <span className="secondary-font-color">{headerColor}</span>
        </h3>
        <p className="text-lg">{message}</p>
        <button className="px-8 py-2 secondary-bg-color text-white rounded-md">
          View Broacher
        </button>
      </div>
      <div className="col-start-5 col-end-8 p-10 flex flex-col gap-5">
        <h4 className="text-lg font-bold">A Complete solar system</h4>
        <p>
          A complete solar system engineered for maximum performance that is
          fully warranted by CertainTeed
        </p>
        <h4 className="text-lg font-bold">
          A CertainTeed installation warranty
        </h4>
        <p>
          A CertainTeed installation warranty, which provides coverage on the
          installer's workmanship for up to 25 years when the Solstice system is
          installed by a CertainTeed-credentialed solar installer
        </p>
        <h4 className="text-lg font-bold">State-of-the-art flashing system</h4>
        <p>
          State-of-the-art flashing system that weatherproofs the penetrations
          in your roof, selected by a roofing manufacturer with more than a
          century of roofing experience
        </p>
        <h4 className="text-lg font-bold">High-efficiency solar modules</h4>
        <p>The option of high-efficiency solar modules made in the US*</p>
      </div>
    </section>
  );
};
