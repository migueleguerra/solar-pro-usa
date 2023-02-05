import Link from "next/link";

interface ServiceCardParams {
  imageUrl: string;
  header: string;
  message: string;
  linkHref: string;
}

export const ServiceCard = ({
  imageUrl,
  header,
  message,
  linkHref,
}: ServiceCardParams) => {
  return (
    <div className="grid gap-4 shadow-lg rounded-md overflow-hidden">
      <img
        className="h-[max(10rem,30vh)] w-full object-cover"
        src={imageUrl}
        alt={imageUrl}
      />
      <h3 className="primary-font-color uppercase font-bold">{header}</h3>
      <p className="h-full lg:h-[max(8rem,10vh)] flex items-center px-4 primary-font-color">
        {message}
      </p>
      <div className="flex justify-center m-4 transform transition duration-200 hover:scale-110">
        <Link
          href={linkHref}
          className="w-[90%] py-2 primary-bg-color text-white rounded-md"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};
