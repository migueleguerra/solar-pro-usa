interface WarrantyDetailsParams {
  heading: string;
  message: string;
}

export const WarrantyDetails = ({
  heading,
  message,
}: WarrantyDetailsParams) => {
  return (
    <div className="flex flex-col space-y-[4rem] primary-font-color lg:px-0 px-[2rem]">
      <h3 className="text-center text-3xl font-bold">{heading}</h3>
      <p className="lg:text-center text-lg">{message}</p>
      <div className="grid lg:grid-cols-3 lg:gap-4 lg:px-[4rem] gap-[4rem]">
        <div className="flex flex-col space-y-[1rem]">
          <div className="flex items-center space-x-[1rem] font-bold">
            <img src="system/system-solar.png" alt="solar systems" />
            <h4>Typical solar systems</h4>
          </div>
          <p>
            utilize components from several different manufacturers, so you may
            have multiple different product warranties and installation
            workmanship warranties from your solar installer (if they offer
            one). CertainTeed offers an all-in-one warranty solution.
          </p>
        </div>
        <div className="flex flex-col space-y-[1rem]">
          <div className="flex items-center space-x-[1rem] font-bold">
            <img src="system/system-manufacturers.png" alt="manufacturers" />
            <h4>Most solar equipment manufacturers</h4>
          </div>
          <p>
            and installers have not been in business for as long as the warranty
            that they are offering. Will they be around to take care of any
            issues? CertainTeed has been in business since 1904 and covers
            products and workmanship even if the original provider is no longer
            in business.
          </p>
        </div>
        <div className="flex flex-col space-y-[1rem]">
          <div className="flex items-center space-x-[1rem] font-bold">
            <img src="system/system-warranties.png" alt="warranties" />
            <h4>Typical solar warranties provide</h4>
          </div>
          <p>
            for a replacement product, but do not cover the cost of evaluating
            the system to determine the cause of the issue, shipping a
            replacement product, or removing and replacing the faulty product.
          </p>
        </div>
      </div>
      <div className="text-md flex lg:flex-row lg:space-x-[1rem] flex-col justify-center">
        <p className="font-bold">Have a CertainTeed roof?</p>
        <p>
          You could have both your solar and roof covered by the same company.
        </p>
      </div>
    </div>
  );
};
