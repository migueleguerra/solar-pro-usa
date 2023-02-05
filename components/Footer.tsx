import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="container py-[4rem] sm:grid-row-5 primary-bg-color">
      <div className="col-[center-start/center-end] sm:row-start-2 flex sm:justify-start justify-center">
        <Link href="/">
          <img
            className="md:w-[12rem] w-[10rem]"
            src="solar-pro-logo-white.png"
            alt="solar pro logo"
          />
        </Link>
      </div>
      <div className="col-[center-start/center-end] sm:row-start-2 flex sm:flex-row flex-col sm:space-x-4 sm:justify-end sm:pt-0 pt-[2rem] text-center sm:space-y-0 space-y-4">
        <div className="transform transition duration-200 hover:scale-110">
          <Link
            className="text-sm secondary-font-color hover:text-white"
            href="#"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="transform transition duration-200 hover:scale-110">
          <Link
            className="text-sm secondary-font-color hover:text-white"
            href="#"
          >
            About Us
          </Link>
        </div>
        <div className="transform transition duration-200 hover:scale-110">
          <Link
            className="text-sm secondary-font-color hover:text-white"
            href="contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <hr className="col-[center-start/center-end] row-start-3 gray-bg-color my-[2rem]" />
      <div className="col-[center-start/center-end] sm:row-start-4 flex items-center sm:justify-start justify-center sm:pt-0 pt-[2rem]">
        <p className="text-xs text-white">copy right @ Solar Pro USA 2021.</p>
      </div>
      <div className="col-[center-start/center-end] row-start-4 flex items-center sm:justify-end justify-center">
        <p className="text-sm text-white">Follow us:</p>
        <div className="transform transition duration-200 hover:scale-110">
          <Link href="#">
            <img
              className="w-6 mx-2"
              src="footer/facebook.svg"
              alt="facebook"
            />
          </Link>
        </div>
        <div className="transform transition duration-200 hover:scale-110">
          <Link href="#">
            <img className="w-6 mx-2" src="footer/twitter.svg" alt="twitter" />
          </Link>
        </div>
        <div className="transform transition duration-200 hover:scale-110">
          <Link href="#">
            <img
              className="w-6 mx-2"
              src="footer/instagram.svg"
              alt="instagram"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
