interface FeedbackCardProms {
  heading: string;
  message: string;
  name: string;
  jobTitle: string;
}

export const FeedbackCard = ({
  heading,
  message,
  name,
  jobTitle,
}: FeedbackCardProms) => {
  return (
    <div className="grid">
      <div className="shadow-md rounded-md p-4 my-10 bg-white dark-gray-font-color">
        <p className="p-4 font-bold">{heading}</p>
        <p className="p-2">{message}</p>
      </div>
      <div className="primary-font-color">
        <p className="font-bold">{name}</p>
        <p>{jobTitle}</p>
      </div>
    </div>
  );
};
