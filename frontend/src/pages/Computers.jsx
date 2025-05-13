import React, { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { computer } from "../Data/AllTypesAcccessories";
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
    <div className="px-4 md:px-2 py-2">
      {/* Top Tabs */}
      <nav className="flex  whitespace-nowrap pb-4 border-b border-gray-200">
        {categories.map((item, index) => {
          const path = `/category/${slugify(item)}`;
          const isActive = currentPath === path;

          return (
            <NavLink
              key={index}
              to={path}
              className={`px-3  rounded-full text-sm transition whitespace-nowrap ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item}
            </NavLink>
          );
        })}
      </nav>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-4 mt-4">
        {/* Sidebar */}
        <aside className="w-full md:w-72 lg:w-60 border-r border-gray-200 pr-4 text-sm">
          <h2 className="font-semibold mb-2">Category</h2>
          {[
            "Computers & Accessories",
            "Accessories & Peripherals",
            "Components",
            "Desktops",
            "External Devices & Data Storage",
            "Laptops",
            "Monitors",
            "Networking Devices",
            "Printers, Inks & Accessories",
            "Scanners",
            "Tablets",
            "Warranties",
          ].map((cat, i) => (
            <p key={i} className="mx-2 py-1 hover:underline cursor-pointer">
              {cat}
            </p>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:w-96">
          <img
            src="https://m.media-amazon.com/images/G/31/img22/pcacc/bau/COMPUTERACC.png"
            alt="Computers Banner"
            className="w-full h-auto rounded-lg mb-4"
          />

          <div className="bg-[#1f1e1e] rounded-xl py-3 relative">
            <h1 className="text-xl text-white font-semibold px-4 mb-2">
              Deals on Gaming Accessories
            </h1>

            {/* Scroll Buttons (hidden on small screens) */}
            <button
              aria-label="Scroll Left"
              onClick={scrollLeft}
              className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 bg-gray-100 p-2 rounded-l z-10 shadow-md"
            >
              <IoIosArrowBack size={20} />
            </button>
            <button
              aria-label="Scroll Right"
              onClick={scrollRight}
              className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 bg-gray-100 p-2 rounded-r z-10 shadow-md"
            >
              <IoIosArrowForward size={20} />
            </button>

            {/* Scrollable Products */}
            <div
              className="flex gap-4 overflow-x-auto p-4 scroll-smooth scrollbar-hide"
              ref={scrollRef}
            >
              {computer.map((item, idx) => (
                <img
                  key={idx}
                  src={item.img}
                  alt={item.name}
                  className="w-60 h-72 object-cover rounded-lg shrink-0"
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Computers;
