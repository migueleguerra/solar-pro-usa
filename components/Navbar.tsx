import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed py-4 z-[3] bg-white shadow-md w-full">
      <div className="grid container items-center primary-font-color">
        <Link className="lg:col-[center-start] w-60" href="/">
          <img src="solar-pro-logo.png" alt="solar pro logo" />
        </Link>
        <ul className="grid gap-4 md:flex items-center justify-end col-start-5 text-xs lg:text-base lg:col-start-4 lg:col-span-7 col-span-7 pr-2 lg:pr-0 hidden">
          <li className="font-bold">
            <Link href="/aboutus">About Us</Link>
          </li>
          <li className="font-bold">
            <Link href="/services">Services</Link>
          </li>
          <li className="font-bold">
            <Link href="/benefits">Benefits</Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-4 py-2 primary-bg-color text-white rounded-md"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-4 py-2 secondary-bg-color text-white rounded-md"
            >
              Pay Service
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          onClick={handleNav}
          className="col-start-[center-end] flex justify-end pr-4 md:hidden z-10"
        >
          {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu className="primary-font-color w-6 h-6" size={20} />
          )}
        </div>
        <div
          className={
            nav
              ? "md:hidden absolute inset-0 flex justify-center items-center w-full h-screen bg-white text-center"
              : "md:hidden absolute left-[-100%] flex justify-center items-center w-full h-screen bg-white text-center"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-orange-600">
              <Link href="/aboutus">About Us</Link>
            </li>
            <li className="p-4 text-4xl hover:text-orange-600">
              <Link href="/services">Services</Link>
            </li>
            <li className="p-4 text-4xl hover:text-orange-600">
              <Link href="/benefits">Benefits</Link>
            </li>
            <li className="p-4 text-3xl">
              <Link
                href="/contact"
                className="px-8 py-2 primary-bg-color text-white rounded-md"
              >
                Contact Us
              </Link>
            </li>
            <li className="p-4 text-3xl">
              <Link
                href="/contact"
                className="px-8 py-2 secondary-bg-color text-white rounded-md"
              >
                Pay Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
