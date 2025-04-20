import React, { useRef } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products1 = [
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/81dsWgzXLrL._AC_UL450_SR450,320_.jpg",
    desc: "SOFTSPUN Microfiber Cloth - 4 pcs - 40x40 cms - 340 GSM Grey! Thick Lint & Streak-Free Multipurpose Cloths - Automotive Micro",
    rating: "4.3 out of 5 stars 95,528",
    price: "₹269.00",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/61a3ls6VP+L._AC_UL450_SR450,320_.jpg",
    desc: "Godrej aer O – Hanging Car Air Freshener – Assorted Pack of 3 (22.5g) | Gel Lasts up to 30 days | Car Accessories",
    rating: "4.3 out of 5 stars 95,528",
    price: "₹269.00",
  },
  // Add more if needed
];

const ProductCarousel = ({ title, products }) => {
  const scrollRef = useRef();

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="my-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <span className="text-blue-500 text-sm cursor-pointer">See more</span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="bg-gray-200 p-1 rounded-full">
            <FaChevronLeft />
          </button>
          <button onClick={() => scroll("right")} className="bg-gray-200 p-1 rounded-full">
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 mt-4 scroll-smooth scrollbar-hide"
      >
        {products.map((item, index) => (
          <div key={index} className="min-w-[200px] max-w-[200px] flex-shrink-0 border p-2 rounded shadow-sm bg-white">
            <img src={item.img} alt="" className="w-full h-40 object-contain" />
            <p className="text-sm mt-2 line-clamp-3">{item.desc}</p>
            <p className="text-xs text-gray-500">{item.rating}</p>
            <p className="font-semibold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const BestSellers = () => {
  return (
    <div className="px-4 max-w-screen-xl mx-auto">
      <nav className="border-b">
        <ul className="flex flex-wrap gap-4 py-3 text-sm">
          <li>Bestsellers</li>
          <li>Hot New Releases</li>
          <li>Movers and Shakers</li>
          <li>Most Wished For</li>
          <li>Most Gifted</li>
        </ul>
      </nav>

      <h1 className="font-semibold text-2xl mt-6">Amazon Bestsellers</h1>
      <p className="text-xs text-gray-500 mb-4">
        Our most popular products based on sales. Updated frequently.
      </p>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 border-r pr-4">
          <p className="font-semibold mb-2">Any Department</p>
          <ul className="text-sm space-y-1">
            {[
              "Amazon Launchpad", "Amazon Renewed", "Apps & Games", "Baby Products",
              "Bags, Wallets and Luggage", "Beauty", "Books", "Car & Motorbike",
              "Clothing & Accessories", "Computers & Accessories", "Electronics",
              "Garden & Outdoors", "Gift Cards", "Grocery & Gourmet Foods",
              "Health & Personal Care", "Home & Kitchen", "Home Improvement",
              "Industrial & Scientific", "Jewellery", "Kindle Store",
              "Movies & TV Shows", "Music", "Musical Instruments", "Office Products",
              "Pet Supplies", "Shoes & Handbags", "Software",
              "Sports, Fitness & Outdoors", "Toys & Games", "Video Games", "Watches"
            ].map((cat, idx) => (
              <li key={idx}>{cat}</li>
            ))}
          </ul>
        </aside>

        {/* Product Carousels */}
        <main className="flex-1">
          <ProductCarousel
            title="Bestsellers in Car & Motorbike"
            products={products1}
          />
          <ProductCarousel
            title="Bestsellers in Office Products"
            products={products1}
          />
        </main>
      </div>
    </div>
  );
};

export default BestSellers;
