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
    <div className="primary-bg-color sm:rounded-lg flex flex-col p-8 sm:p-[5rem] text-white items-center space-y-4 text-center">
      <div className="flex flex-col text-2xl font-bold space-x-2">
        <h3>{header}</h3>
        <h3 className="secondary-font-color">{headerColor}</h3>
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
  );
};
