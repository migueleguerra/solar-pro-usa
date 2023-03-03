interface MinCardPromps {
  imgSrc: string;
  header: string;
  message: string;
}

export const MainCard = ({ imgSrc, header, message }: MinCardPromps) => {
  return (
    <div className="p-6 text-center">
      <div className="flex justify-center">
        <img className="p-4 shadow-md rounded-md" src={imgSrc} alt={imgSrc} />
      </div>
      <h3 className="p-4 font-bold secondary-font-color">{header}</h3>
      <p className="px-[5rem] sm:p-0 primary-font-color">{message}</p>
    </div>
  );
};
