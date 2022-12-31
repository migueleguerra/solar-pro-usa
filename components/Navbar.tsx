import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed py-4 z-[3] bg-white shadow-md">
      <div className="grid gap-4 grid-cols-8 items-center primary-font-color">
        <Link className="col-start-2 w-60" href="/">
          <img src="solar-pro-logo.png" alt="solar pro logo" />
        </Link>
        <ul className="hidden sm:flex items-center justify-end col-start-4 col-span-4">
          <li className="px-4 font-bold">
            <Link href="/aboutus">About Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link href="/services">Services</Link>
          </li>
          <li className="px-4 font-bold">
            <Link href="/benefits">Benefits</Link>
          </li>
          <li className="px-4 font-bold">
            <Link href="/warranty">Warranty</Link>
          </li>
          <li className="">
            <Link
              href="/contact"
              className="px-8 py-2 primary-bg-color text-white rounded-md"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu className="primary-font-color w-6 h-6" size={20} />
          )}
        </div>
        <div
          className={
            nav
              ? "sm:hidden absolute inset-0 flex justify-center items-center w-full h-screen bg-white text-center"
              : "sm:hidden absolute left-[-100%] flex justify-center items-center w-full h-screen bg-white text-center"
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
            <li className="p-4 text-4xl hover:text-orange-600">
              <Link href="/warranty">Warranty</Link>
            </li>
            <li className="p-4 text-4xl hover:text-orange-600">
              <button>Contact Us</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
