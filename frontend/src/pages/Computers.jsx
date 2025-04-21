import React, { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { computer } from "../Data/AllTypesAcccessories";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const categories = [
  "Electronics",
  "Mobiles & Accessories",
  "Laptops & Accessories",
  "TV & Home Entertainment",
  "Audio",
  "Cameras",
  "Computer Peripherals",
  "Smart Technology",
  "Musical Instruments",
  "Office & Stationery",
];

const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

const Computers = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      <div className="text-sm justify-between px-4 md:px-8">
        {/* Top Tabs */}
        <nav className="flex overflow-x-auto gap-2 justify-start whitespace-nowrap pb-2">
          {categories.map((item, index) => {
            const path = `/category/${slugify(item)}`;
            const isActive = currentPath === path;

            return (
              <NavLink
                key={index}
                to={path}
                className={`px-1 py-2 rounded-full transition text-nowrap ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-800 hover:text-gray-500"
                }`}
              >
                {item}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="text-sm mx-4 mt-2 w-full lg:w-60 border-r border-gray-200">
          <h2 className="font-semibold text-sm mb-2">Category</h2>
          <p className="mx-2 font-semibold">Computers & Accessories</p>
          <p className="mx-2">Accessories & Peripherals</p>
          <p className="mx-2">Components</p>
          <p className="mx-2">Desktops</p>
          <p className="mx-2">External Devices & Data Storage</p>
          <p className="mx-2">Laptops</p>
          <p className="mx-2">Monitors</p>
          <p className="mx-2">Networking Devices</p>
          <p className="mx-2">Printers, Inks & Accessories</p>
          <p className="mx-2">Scanners</p>
          <p className="mx-2">Tablets</p>
          <p className="mx-2">Warranties</p>
        </div>

        {/* Main Content */}
        <div className="mx-2 mb-2 flex-1">
          <img
            src="https://m.media-amazon.com/images/G/31/img22/pcacc/bau/COMPUTERACC.png"
            alt="Banner"
            className="w-full rounded-lg"
          />

          <div className="bg-[#1f1e1e] rounded-xl py-3 mt-4 relative">
            <h1 className="text-xl text-white mx-4 font-semibold">
              Deals on gaming accessories
            </h1>

            {/* Scroll Buttons */}
            <button
              onClick={scrollLeft}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-100  px-2 py-2 rounded-l z-10 shadow-md"
            >
              <IoIosArrowBack  size={20}/>
            </button>
            <button
              onClick={scrollRight}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-100 text-black px-2 py-2 rounded-r z-10 shadow-md"
            >
              <IoIosArrowForward size={20} />
            </button>

            {/* Scrollable Image Row */}
            <div
              className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth p-4"
              ref={scrollRef}
            >
              {computer.map((items, id) => (
                <img
                  key={id}
                  src={items.img}
                  alt={items.name}
                  className="w-60 h-72 object-cover rounded-lg shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Computers;
