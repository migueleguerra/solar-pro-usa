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
    <div className="bg-[#41526F] sm:rounded-lg call-to-action-wave bg-no-repeat bg-center bg-cover">
      <div className="flex flex-col p-8 md:p-[4rem] text-white items-center space-y-4 text-center">
        <div className="flex flex-col text-2xl font-bold space-x-2">
          <h3>
            {header} <span className="secondary-font-color">{headerColor}</span>
          </h3>
        </div>
        <p>{message}</p>
        {button ? (
          <button className="p-4 bg-white primary-font-color text-xs font-bold rounded-md">
            Finance Available
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
