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
      <p className="h-full lg:h-[max(8rem,10vh)] flex items-center px-4 primary-font-color my-2 xl:my-0">
        {message}
      </p>
      <Link
        href={linkHref}
        className="py-2 m-4 justify-end primary-bg-color text-white rounded-md"
      >
        Learn More
      </Link>
    </div>
  );
};
