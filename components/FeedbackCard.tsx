interface FeedbackCardProms {
  heading: string;
  message: string;
  name: string;
}

export const FeedbackCard = ({ heading, message, name }: FeedbackCardProms) => {
  return (
    <div className="grid">
      <div className="relative shadow-xl rounded-md p-4 my-10 bg-white dark-gray-font-color feedback-speech">
        <p className="p-4 font-bold">{heading}</p>
        <p className="p-2 h-full 2xl:h-[max(12rem,25vh)] xl:h-[max(15rem,35vh)]">
          {message}
        </p>
      </div>
      <p className="font-bold secondary-font-color">{name}</p>
    </div>
  );
};
