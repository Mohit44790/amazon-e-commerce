import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const fashionTabs = [
  'Women',
  'Men',
  'Kids',
  'Bags & Luggage',
  'Sportswear',
  'Sales & Deals',
];

const megaMenuData = {
  "Bags & Luggage": {
    columns: {
      "Bags & Backpacks": ["Backpacks", "Laptop Bags", "Briefcases", "Messenger Bags", "School Bags"],
      "Luggage": ["Suitcases", "Trolley Bags", "Travel Duffles", "Travel Accessories", "Handbags", "Totes", "Clutches", "Sling Bags"],
      "Stores": ["Leather Handbags", "Party Bags", "Work Bags", "College Bags", "Men's Wallets", "Women's Wallets"]
    },
    images: [
      { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/HB.jpg", title: "Handbags", desc: "40%-70% off" },
      { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/BP.jpg", title: "Backpacks", desc: "40%-70% off" },
      { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/BWL.jpg", title: "New Arrivals", desc: "Bags and Luggage" }
    ]
  },
  "Women": {
    columns: {
      "Bags & Backpacks": ["Backpacks", "Laptop Bags", "Briefcases", "Messenger Bags", "School Bags", "Suitcases", "Trolley Bags", "Travel Duffles", "Travel Accessories"],
      "Handbags & Clutches": ["Handbags", "Totes", "Clutches", "Sling Bags"],
      "Stores": ["Leather Handbags", "Party Bags", "Work Bags", "College Bags", "Men's Wallets", "Women's Wallets"]
    },
    images: [
      { src: "https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Women.jpg", title: "Handbags", desc: "40%-70% off" },
      { src: "https://m.media-amazon.com/images/G/31/img19/Jew/Feb/380-500.jpg", title: "Backpacks", desc: "40%-70% off" },
      { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/MAX/FLY_OUT/Sub-Nav-Women-2._CB439603748_.jpg", title: "New Arrivals", desc: "Bags and Luggage" }
    ]
  },
  "Men": {
    columns: {
      "Bags & Backpacks": ["Backpacks", "Laptop Bags", "Briefcases", "Messenger Bags", "School Bags", "Suitcases", "Trolley Bags", "Travel Duffles", "Travel Accessories"],
      "Handbags & Clutches": ["Handbags", "Totes", "Clutches", "Sling Bags"],
      "Stores": ["Leather Handbags", "Party Bags", "Work Bags", "College Bags", "Men's Wallets", "Women's Wallets"]
    },
    images: [
      { src: "https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Men.jpg", title: "Men Clothing", desc: "40%-70% off" },
      { src: "https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Running-Shoes.jpg", title: "Running Shoes", desc: "40%-70% off" },
      { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/MAX/FLY_OUT/Sub-Nav-men-2._CB439603748_.jpg", title: "New Arrivals", desc: "Bags and Luggage" }
    ]
  },
  "Kids": {
    columns: {
      "GIRLS": ["ALL CLOTHING", "Tops & Tees", "Dresses", "Jeans", "Pants", "Clothing Sets", "Baby Girl", "SHOES", "WATCHES", "SUNGLASSES", "JEWELLERY"],
      "BOYS": ["ALL CLOTHING", "T-Shirts", "Shirts", "Jeans", "Pants", "Clothing Sets", "Baby Boy", "SHOES", "WATCHES", "SUNGLASSES", "JEWELLERY"],
      "KIDS": ["Clothing", "Shoes", "Watches", "Jewellery", "Sunglasses", "School Bags", "BABY"]
    },
    images: [
      { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/MAX/FLY_OUT/Sub-Nav-Kids._CB1198675309_.jpg", title: "MAX | Just Launched", desc: "40%-70% off" },
      { src: "https://m.media-amazon.com/images/G/31/img19/Apparel/KA/GW/Sub-Nav/2._CB469401627_.jpg", title: "Boys' Clothing", desc: "40%-70% off" },
      { src: "https://m.media-amazon.com/images/G/31/img19/Apparel/KA/GW/Sub-Nav/girls._CB469401626_.jpg", title: "Girls' Clothing", desc: "Bags and Luggage" }
    ]
  },
  "Sportswear": {
    columns: {
      "Brands": ["Adidas", "Nike", "Puma", "Reebok", "Under Armour"],
      "Categories": ["Running", "Yoga", "Training", "Outdoor", "Accessories"]
    },
    images: [
      { src: "https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Sports_M._CB483839267_.jpg", title: "Men Sportswear", desc: "Up to 60% off" },
      { src: "https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Sports_W._CB483839267_.jpg", title: "Women Sportswear", desc: "Up to 60% off" }
    ]
  },
  "Sales & Deals": {
    columns: {},
    images: [
      { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/CL.jpg", title: "Clothes", desc: "40%-70% off" },
      { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/SH.jpg", title: "Shoes", desc: "40%-70% off" },
      { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/W.jpg", title: "Watches", desc: "40%-70% off" },
      { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/LG.jpg", title: "Bags & Luggage", desc: "40%-70% off" },
      { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/JW.jpg", title: "Jewelry", desc: "40%-70% off" },
      { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/SG.jpg", title: "Sunglasses", desc: "40%-70% off" }
    ]
  }
};

const AmazonFashionNavbar = () => {
  const [hoveredTab, setHoveredTab] = useState(null);

  return (
    <div className="z-50">
      {/* Top Bar */}
      <div className="flex flex-wrap justify-between items-center text-sm py-3 border-b px-4 md:px-6 bg-white ">
        <h1 className="text-xl md:text-2xl font-semibold mb-2 md:mb-0">Amazon Fashion</h1>
        {/* <div className="flex flex-wrap gap-4 md:gap-6"> */}
          {fashionTabs.map((tab) => (
            <div
              key={tab}
              className="relative group cursor-pointer pb-1"
              onMouseEnter={() => setHoveredTab(tab)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <p className={`pb-1 ${hoveredTab === tab ? "border-b-2 border-black" : ""}`}>
                {tab}
              </p>
              {hoveredTab === tab && (
                <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-0.5">
                  <IoIosArrowUp size={20} className="text-gray-200 bg-white" />
                </span>
              )}
            </div>
          ))}
        {/* </div> */}
      </div>

      {/* Mega Menu */}
      {hoveredTab && megaMenuData[hoveredTab] && (
        <div
          onMouseEnter={() => setHoveredTab(hoveredTab)}
          onMouseLeave={() => setHoveredTab(null)}
          className="absolute left-0 w-full bg-white shadow-lg border-t px-4 md:px-10 py-6"
        >
          <div className="grid grid-cols-6 gap-6">
            {(() => {
              const columns = Object.entries(megaMenuData[hoveredTab].columns || {});
              const images = megaMenuData[hoveredTab].images || [];
              const totalSlots = 6;

              const trimmedColumns = columns.slice(0, Math.min(columns.length, totalSlots));
              const remainingSlots = totalSlots - trimmedColumns.length;
              const trimmedImages = images.slice(0, remainingSlots);

              return (
                <>
                  {/* Text Columns */}
                  {trimmedColumns.map(([heading, items]) => (
                    <div key={heading} className="col-span-1">
                      <h4 className="font-semibold text-sm mb-2">{heading}</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        {items.map((item) => (
                          <li key={item} className="hover:underline cursor-pointer">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Image Cards */}
                  {trimmedImages.map((img, index) => (
                    <div key={index} className="col-span-1 text-center text-sm">
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-56 object-cover rounded-md shadow"
                      />
                      <h5 className="mt-2 font-semibold">{img.title}</h5>
                      <p className="text-gray-600">{img.desc}</p>
                    </div>
                  ))}
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default AmazonFashionNavbar;