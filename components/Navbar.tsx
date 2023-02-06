import Link from "next/link";
import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed py-4 z-30 bg-white shadow-md w-full">
      <div className="grid container items-center primary-font-color">
        <Link className="lg:col-[center-start] w-60" href="/">
          <img src="solar-pro-logo.png" alt="solar pro logo" />
        </Link>
        <ul className="gap-2 md:flex items-center justify-end col-start-5 text-xs lg:text-base lg:col-start-4 lg:col-span-7 col-span-7 pr-2 lg:pr-0 hidden">
          <li className="font-bold">
            <Link
              className="p-2 rounded-md hover:bg-[#f26622] hover:text-white"
              href="#"
            >
              About Us
            </Link>
          </li>
          <Menu as="li" className="relative">
            <Menu.Button className="p-2 rounded-md font-bold hover:bg-[#f26622] hover:text-white">
              Services
            </Menu.Button>

            <Transition
              enter="transform transition duration-200 ease-in"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transform transition duration-200 ease-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items className="absolute bg-white rounded-md mt-3 shadow-lg focus:outline-none text-xs lg:text-sm">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`flex px-4 py-2 ${
                        active ? "bg-[#f26622] text-white" : "text-[#203456]"
                      }`}
                      href="residential"
                    >
                      Residential
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`flex px-4 py-2 ${
                        active ? "bg-[#f26622] text-white" : "text-[#203456]"
                      }`}
                      href="comercial"
                    >
                      Comercial
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`flex px-4 py-2 ${
                        active ? "bg-[#f26622] text-white" : "text-[#203456]"
                      }`}
                      href="maintenance"
                    >
                      Maintenance
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="li" className="Relative">
            <Menu.Button className="p-2 rounded-md font-bold hover:bg-[#f26622] hover:text-white">
              Systems
            </Menu.Button>

            <Transition
              enter="transform transition duration-200 ease-in"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transform transition duration-200 ease-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items className="absolute bg-white rounded-md mt-3 w-[13rem] shadow-lg focus:outline-none text-xs lg:text-sm">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`flex px-4 py-2 ${
                        active ? "bg-[#f26622] text-white" : "text-[#203456]"
                      }`}
                      href="solarandstorage"
                    >
                      Solar & Storage
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`flex px-4 py-2 ${
                        active ? "bg-[#f26622] text-white" : "text-[#203456]"
                      }`}
                      href="shinglesandtiles"
                    >
                      Solar Shingles & Tiles
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`flex px-4 py-2 ${
                        active ? "bg-[#f26622] text-white" : "text-[#203456]"
                      }`}
                      href="solarsystems"
                    >
                      Premium Solar Systems
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <li>
            <div className="transform transition duration-200 hover:scale-110">
              <Link
                href="contact"
                className="px-4 py-2 primary-bg-color text-white rounded-md"
              >
                Contact Us
              </Link>
            </div>
          </li>
          <li>
            <div className="transform transition duration-200 hover:scale-110">
              <Link
                href="#"
                className="px-4 py-2 secondary-bg-color text-white rounded-md"
              >
                Pay Service
              </Link>
            </div>
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
              ? "md:hidden absolute inset-0 flex justify-center items-center w-full h-screen bg-white"
              : "md:hidden absolute left-[-100%] flex justify-center items-center w-full h-screen bg-white text-center"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-orange-600">
              <Link onClick={handleNav} href="/">
                Home
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-orange-600">
              <Link onClick={handleNav} href="#">
                About Us
              </Link>
            </li>
            <li className="p-4 border-1 border-blue-900 rounded-lg">
              <p className="text-4xl">Services</p>
              <div className="flex flex-col space-y-[.5rem] text-2xl pl-[2rem] pt-[1rem]">
                <Link
                  onClick={handleNav}
                  className="hover:text-orange-600"
                  href="residential"
                >
                  Residential
                </Link>
                <Link
                  onClick={handleNav}
                  className="hover:text-orange-600"
                  href="comercial"
                >
                  Comercial
                </Link>
                <Link
                  onClick={handleNav}
                  className="hover:text-orange-600"
                  href="maintenance"
                >
                  Maintenance
                </Link>
              </div>
            </li>
            <li className="p-4 border-1 border-blue-900 rounded-lg mb-[1rem]">
              <p className="text-4xl">Systems</p>
              <div className="flex flex-col space-y-[.5rem] text-2xl pl-[2rem] pt-[1rem]">
                <Link
                  onClick={handleNav}
                  className="hover:text-orange-600"
                  href="solarandstorage"
                >
                  Solar & Storage
                </Link>
                <Link
                  onClick={handleNav}
                  className="hover:text-orange-600"
                  href="shinglesandtiles"
                >
                  Solar Shingles & Tiles
                </Link>
                <Link
                  onClick={handleNav}
                  className="hover:text-orange-600"
                  href="solarsystems"
                >
                  Premium Solar Systems
                </Link>
              </div>
            </li>
            <li className="p-4 text-3xl">
              <Link
                onClick={handleNav}
                href="contact"
                className="px-8 py-2 primary-bg-color text-white rounded-md"
              >
                Contact Us
              </Link>
            </li>
            <li className="p-4 text-3xl">
              <Link
                href="#"
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
