import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

interface HouseValues {
  monthlyUtilityPayments: string;
  monthlyConsumtion: string;
  systemSize: string;
  systemLosses: string;
  solarSystemTotalCost: string;
  fiveYearsAmount: string;
  tenYearsAmount: string;
  fifteenYearsAmount: string;
  twentyYearsAmount: string;
  twentyFiveYearsAmount: string;
}

const houseSizeTypes = {
  small: {
    monthlyUtilityPayments: "$ 100.00",
    monthlyConsumtion: "780",
    systemSize: "6.5",
    systemLosses: "14%",
    solarSystemTotalCost: "$ 20,000.00",
    fiveYearsAmount: "$ 292.72",
    tenYearsAmount: "$ 173.64",
    fifteenYearsAmount: "$ 130.86",
    twentyYearsAmount: "$ 121.42",
    twentyFiveYearsAmount: "$ 111.69",
  } as HouseValues,
  medium: {
    monthlyUtilityPayments: "$ 200.00",
    monthlyConsumtion: "1540",
    systemSize: "12.5",
    systemLosses: "14%",
    solarSystemTotalCost: "$ 37,000.00",
    fiveYearsAmount: "$ 541.54",
    tenYearsAmount: "$ 321.23",
    fifteenYearsAmount: "$ 242.10",
    twentyYearsAmount: "$ 224.63",
    twentyFiveYearsAmount: "$ 206.63",
  } as HouseValues,
  large: {
    monthlyUtilityPayments: "$ 350.00",
    monthlyConsumtion: "2500",
    systemSize: "20",
    systemLosses: "14%",
    solarSystemTotalCost: "$ 54,800.00",
    fiveYearsAmount: "$ 802.06",
    tenYearsAmount: "$ 475.77",
    fifteenYearsAmount: "$ 358.57",
    twentyYearsAmount: "$ 332.70",
    twentyFiveYearsAmount: "$ 306.04",
  } as HouseValues,
};

function financing() {
  const [houseType, setHouseType] = useState<HouseValues>(houseSizeTypes.small);

  const onChangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    switch (value) {
      case "small":
        setHouseType(houseSizeTypes.small);
        break;
      case "medium":
        setHouseType(houseSizeTypes.medium);
        break;
      case "large":
        setHouseType(houseSizeTypes.large);
        break;
      default:
        setHouseType(houseSizeTypes.small);
        break;
    }
  };

  return (
    <div className="container primary-font-color">
      <Head>
        <title>Solar Pro USA - Financing</title>
      </Head>

      <section className="col-[full-start/full-end]">
        <div className="col-[full-start/full-end] container gap-4 financing-wave bg-no-repeat bg-cover bg-center secondary-bg-color pt-[10rem] pb-[5rem] text-white">
          <div className="sm:col-[center-start/center-end] col-[full-start/full-end] sm:px-0 px-[2rem] grid gap-4">
            <h1 className="text-3xl font-bold">Financing Available</h1>
            <p>
              At Solar Pro, we understand that financial planning is an
              important part of your life. Our financial simulation tool
              provides you with projected costs based on the plan you select,
              however, please note that these projections are subject to change
              based on a number of variables such as market conditions, economic
              trends, and other factors.
            </p>
          </div>
        </div>
      </section>

      <section className="col-[full-start/full-end] container pt-[5rem] pb-[2rem]">
        <div className="sm:col-[center-start/center-end] col-[full-start/full-end] px-[2rem] grid gap-4">
          <p>
            The data in this table is provided for simulation purposes and is
            based on cost projections supplied by the funder. You can use it as
            a guide to estimate potential costs.
          </p>
          <p className="text-sm">
            By using our financial simulation tool, you agree to the{" "}
            <Link
              className="secondary-font-color font-bold"
              href="/privacypolicy"
            >
              terms of this policy
            </Link>
            .
          </p>
          <div className="flex flex-col space-y-2 mb-[2rem]">
            <label className="font-semibold">Choose residential size:</label>
            <select
              className="py-1 px-2 border w-[13rem] rounded-md primary-font-color"
              defaultValue="small"
              onChange={onChangeOption}
            >
              <option value="small">Small Size House</option>
              <option value="medium">Medium Size House</option>
              <option value="large">Large Size House</option>
            </select>
          </div>

          <div className="text-sm">
            {/* Information table */}

            <table className="rounded-t-md rounded-b-md overflow-hidden mb-[4rem] shadow-md">
              <thead>
                <tr>
                  <th className="p-2 primary-bg-color border border-white text-white font-semibold">
                    House Average Information
                  </th>
                  <th className="p-2 primary-bg-color border border-white text-white font-semibold">
                    House Values
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-white bg-[#F2F4F4] font-semibold">
                    Monthly Utility Payment
                  </td>
                  <td className="p-2 border border-white bg-[#F9FAFA]">
                    {houseType.monthlyUtilityPayments}
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="p-2 border border-white bg-[#F2F4F4] font-semibold">
                    Monthly Consumption (kWh)
                  </td>
                  <td className="p-2 border border-white bg-[#F9FAFA]">
                    {houseType.monthlyConsumtion}
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="p-2 border border-white bg-[#F2F4F4] font-semibold">
                    System Size (kW DC)
                  </td>
                  <td className="p-2 border border-white bg-[#F9FAFA]">
                    {houseType.systemSize}
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="p-2 border border-white bg-[#F2F4F4] font-semibold">
                    System Losses
                  </td>
                  <td className="p-2 border border-white bg-[#F9FAFA]">
                    {houseType.systemLosses}
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="p-2 border border-white bg-[#F2F4F4] font-bold">
                    Solar System Total Cost
                  </td>
                  <td className="p-2 border border-white bg-[#F9FAFA] font-bold">
                    {houseType.solarSystemTotalCost}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Payment table */}

            <table className="rounded-t-md rounded-b-md overflow-hidden shadow-md mb-[4rem]">
              <thead>
                <tr>
                  <th className="p-2 primary-bg-color border border-white text-white">
                    Lowest Loan Monthly Payment
                  </th>
                  <th className="p-2 primary-bg-color border border-white text-white">
                    Amount to pay per month
                  </th>
                  <th className="p-2 primary-bg-color border border-white text-white">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-white bg-[#F2F4F4] font-semibold">
                    5 years
                  </td>
                  <td className="p-2 border border-white bg-[#F9FAFA]">
                    {houseType.fiveYearsAmount}
                  </td>
                  <td className="p-2 border border-white bg-[#F9FAFA]">
                    8.99%
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="p-2 border border-white bg-[#F2F4F4] font-semibold">
                    10 years
                  </td>
                  <td className="p-2 border border-white bg-[#F9FAFA]">
                    {houseType.tenYearsAmount}
                  </td>
                  <td className="p-2 border border-white bg-[#F9FAFA]">
                    2.99%
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="p-2 border border-white bg-[#F2F4F4] font-semibold">
                    15 years
                  </td>
                  <td className="p-2 border border-white bg-[#F9FAFA]">
                    {houseType.fifteenYearsAmount}
                  </td>
                  <td className="p-2 border border-white bg-[#F9FAFA]">
                    2.99%
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="p-2 border border-white bg-[#F2F4F4] font-semibold">
                    20 years
                  </td>
                  <td className="p-2 border border-white bg-[#F9FAFA]">
                    {houseType.twentyYearsAmount}
                  </td>
                  <td className="p-2 border border-white bg-[#F9FAFA]">
                    7.99%
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="p-2 border border-white bg-[#F2F4F4] font-semibold">
                    25 years
                  </td>
                  <td className="p-2 border border-white bg-[#F9FAFA]">
                    {houseType.twentyFiveYearsAmount}
                  </td>
                  <td className="p-2 border border-white bg-[#F9FAFA]">
                    6.49%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="md:col-[center-start/center-end] col-[full-start/full-end] md:mx-0 mx-[2rem] flex md:flex-row flex-col md:space-y-0 space-y-4 items-center space-x-2 gray-bg-color mb-[4rem] p-4 rounded-md shadow-md text-sm">
        <p className="font-semibold">
          Our team of hands-on professionals will safely design, install, and
          maintain the right system For you, get a quote with the chosen
          simulation.
        </p>
        <Link
          className="primary-bg-color px-8 py-2 primary-bg-color text-white shadow-md rounded-md whitespace-nowrap transform transition duration-200 hover:scale-110"
          href="/contact"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}

export default financing;
