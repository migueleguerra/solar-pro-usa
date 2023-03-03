import Link from "next/link";

interface CallToActionParams {
  header: string;
  headerColor?: string;
  message?: string;
  button?: boolean;
}

export const CallToAction = ({
  header,
  headerColor = "",
  message,
  button = false,
}: CallToActionParams) => {
  return (
    <div className="gray-blue-bg-color sm:rounded-lg call-to-action-wave bg-no-repeat bg-center bg-cover">
      <div className="flex flex-col py-[4rem] md:px-[4rem] px-[2rem] text-white items-center space-y-4 text-center">
        <div className="flex flex-col text-2xl font-bold space-x-2">
          <h3>
            {header} <span className="secondary-font-color">{headerColor}</span>
          </h3>
        </div>
        <p>{message}</p>
        {button ? (
          <div className="transform transition duration-200 hover:scale-110">
            <Link
              href="/financing"
              className="px-8 py-3 bg-white primary-font-color font-bold rounded-md"
            >
              Financing Available
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
