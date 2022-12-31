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
    <div className="shadow-md rounded-md flex flex-col overflow-hidden">
      <img className="w-full h-1/2 mb-4" src={imageUrl} alt={imageUrl} />
      <h3 className="primary-font-color uppercase font-bold">{header}</h3>
      <p className="px-4 py-6 primary-font-color">{message}</p>
      <Link
        href={linkHref}
        className="p-2 mx-4 justify-end primary-bg-color text-white rounded-md"
      >
        Learn More
      </Link>
    </div>
  );
};
