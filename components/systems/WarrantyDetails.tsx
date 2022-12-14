interface WarrantyDetailsParams {
  heading: string;
  message: string;
}

export const WarrantyDetails = ({
  heading,
  message,
}: WarrantyDetailsParams) => {
  return (
    <div className="grid grid-cols-8 gap-5 primary-font-color">
      <h3 className="col-start-1 col-end-9 text-center text-3xl font-bold">
        {heading}
      </h3>
      <p className="col-start-2 col-end-8 text-center text-lg">{message}</p>
      <div className="col-start-2 col-end-8 p-10 grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 font-bold">
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
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 font-bold">
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
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 font-bold">
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
      <div className="col-start-1 col-end-9 text-md flex justify-center gap-2">
        <p className="font-bold">Have a CertainTeed roof?</p>
        <p>
          You could have both your solar and roof covered by the same company.
        </p>
      </div>
    </div>
  );
};
