import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import clsx from "clsx";

const menuData = [
  {
    category: "Trending",
    items: [
      
      { label: "Best Sellers", path: "/bestsellers" },
      { label: "New Release", path: "/newrelease" },
      { label: "Movers and Shakers", path: "/movers" },
     
    ],
  },
  {
    category: "Digital Content and Devices",
    items: [
      { label: "Amazon Mini TV - Free entertainment", path: "/miniTV" },
      {
        label: "Echo & Alexa",
        submenu: [
          {
            category: "Echo & Alexa",
            items: [{ label: "See all devices with Alexa", path: "/alexa" }],
          },
          {
            category: "Content & Resources",
            items: [
              { label: "Meet Alexa", path: "/alexa/meet" },
              { label: "Alexa Skills", path: "/alexa/skills" },
            ],
          },
        ],
      },
      { label: "Books", path: "/books" },
    ],
  },
  {
    category: "Shop by Category",
    items: [
      {
        label: "Mobile & Computers",
        submenu: [
          { label: "Smartphones", path: "/mobiles/smartphones" },
          { label: "Laptops", path: "/mobiles/laptops" },
          { label: "Tablets", path: "/mobiles/tablets" },
        ],
      },
      { label: "Mens Fasions", 
        submenu:[
          {category:"Men,s Clothing",items:[
            {label:"clothing",path:"/clothing"},
            {label:"T-Shirts & Polos",path:"/t-Shirts"},
            {label:"Shirts",path:"/shirts"},
            {label:"Jeans",path:"/jeans"},
          ]},
          
            {category:"Accessories",items:[
              {label:"Watchs",path:"/clothing"},
              {label:"Bags & Luggage",path:"/t-Shirts"},
              {label:"Sunglasses",path:"/shirts"},
              {label:"Jewellery",path:"/jewellery"},
              {label:"Wallets",path:"/wallets"},
            ]},
          
        ]
       },
      { label: "Women's Fasions",  submenu:[
        {category:"Women,s Clothing",items:[
          {label:"Clothing",path:"/clothing"},
          {label:"Western Wear",path:"/western-Wear"},
          {label:"Ethic Wear",path:"/shirts"},
          {label:"Top Brands",path:"/jeans"},
        ]},
        
          {category:"Accessories",items:[
            {label:"Watchs",path:"/clothing"},
            {label:"HandBags & Cluthes",path:"/t-Shirts"},
            {label:"Gold & Diamond Jewellery",path:"/jewellery"},
            {label:"Fashion & Sliver Jewellery",path:"/jewellery"},
            {label:"Wallets",path:"/wallets"},
            {label:"Sunglasses",path:"/shirts"},
          ]},
        
      ] },
      { label: "Home & Kitchen", path: "/home-kitchen" },
      { label: "Books", path: "/books" },
    ],
  },
  {
    category: "Program Features",
    items: [
      { label: "Subscribe & Save", path: "/subscribe" },
      { label: "Amazon Pay", path: "/amazon-pay" },
    ],
  },
  {
    category: "Help & Settings",
    items: [
      { label: "Your Account", path: "/account" },
      { label: "Customer Service", path: "/customer" },
      { label: "Sign Out", path: "/login" },
    ],
  },
];

const SidebarMenu = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [submenuTitle, setSubmenuTitle] = useState("");

  const openSubmenu = (submenu, title) => {
    setActiveSubmenu(submenu);
    setSubmenuTitle(title);
  };

  const closeSubmenu = () => {
    setActiveSubmenu(null);
    setSubmenuTitle("");
  };

  return (
    <>
      {/* Hamburger Trigger */}
      <div
        className="flex items-center gap-1 min-w-fit cursor-pointer"
        onClick={() => setSidebarOpen(true)}
      >
        <RxHamburgerMenu /> All
      </div>

      {/* Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300",
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => {
          setSidebarOpen(false);
          closeSubmenu();
        }}
      />

      {/* Sidebar Wrapper */}
      <div
        className={clsx(
          "fixed top-0 left-0 h-full w-80 bg-white  text-black shadow-md z-50  overflow-y-auto transition-transform duration-300",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="bg-gray-800 flex justify-between text-white text-lg px-3 py-2">
          <h2 className="text-lg font-bold">
            {activeSubmenu ? submenuTitle : "Hello, User"}
          </h2>
          <button
            className="text-red-500 font-semibold"
            onClick={() => {
              setSidebarOpen(false);
              closeSubmenu();
            }}
          >
            ✕
          </button>
        </div>

        {/* Animated Panels */}
        <div className="relative h-full w-full p-4 overflow-hidden">
          {/* Main Menu Panel */}
          <div
            className={clsx(
              "absolute top-0 left-0 w-full transition-transform duration-300",
              activeSubmenu ? "-translate-x-full" : "translate-x-0"
            )}
          >
            <div className="space-y-1">
              {menuData.map((section, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold mt-2 text-sm mx-4 uppercase">
                    {section.category}
                  </h3>
                  <ul className="space-y-2 border-b py-2">
                    {section.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between mx-4 items-center text-sm"
                      >
                        {item.submenu ? (
                          <button
                            onClick={() => openSubmenu(item.submenu, item.label)}
                            className="flex-1 text-left hover:text-blue-600"
                          >
                            {item.label}
                          </button>
                        ) : (
                          <Link
                            to={item.path}
                            onClick={() => setSidebarOpen(false)}
                            className="flex-1 hover:text-blue-600"
                          >
                            {item.label}
                          </Link>
                        )}
                        {item.submenu && <IoIosArrowForward />}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Submenu Panel */}
          <div
            className={clsx(
              "absolute top-0 left-0 w-full p-4 transition-transform duration-300",
              activeSubmenu ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div>
              <button
                className="flex items-center gap-1 text-sm mb-4"
                onClick={closeSubmenu}
              >
                <IoIosArrowBack /> Main Menu
              </button>
              <ul className="space-y-3">
                {Array.isArray(activeSubmenu) &&
                  activeSubmenu.map((item, idx) =>
                    item.items ? (
                      <div key={idx}>
                        <h4 className="text-lg font-bold mx-3   mb-1">
                          {item.category}
                        </h4>
                        <ul className="ml-3 border-b py-2 space-y-2">
                          {item.items.map((subItem, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                to={subItem.path}
                                className="hover:text-blue-600 text-sm"
                                onClick={() => setSidebarOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <li key={idx}>
                        <Link
                          to={item.path}
                          className="hover:text-blue-600 text-sm"
                          onClick={() => setSidebarOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
