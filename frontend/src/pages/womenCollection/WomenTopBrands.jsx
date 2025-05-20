import React, { useEffect, useState } from "react";
import AmazonFashionNavbar from "../MensCollection/AmazonFashionNavbar";
import { womenTopBrand } from "../../Data/AllTypesAcccessories";

const SkeletonCard = () => {
  return (
    <div className="border p-2 animate-pulse space-y-2">
      <div className="bg-gray-300 h-56 w-full rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-3 bg-gray-300 rounded w-5/6"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      <div className="bg-gray-300 h-6 w-28 rounded"></div>
      <div className="flex gap-2">
        <div className="h-4 bg-gray-300 rounded w-20"></div>
        <div className="h-4 bg-gray-300 rounded w-24"></div>
        <div className="h-4 bg-gray-300 rounded w-16"></div>
      </div>
    </div>
  );
};

const WomenTopBrands = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // simulate 1.5s load time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      <AmazonFashionNavbar  />
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-72 border-r">
          <h1 className="text-sm font-semibold mx-4">Delivery Day</h1>
          <div className="mx-4  text-sm">
            <label className="flex gap-2">
              <input type="checkbox" />
              <span>Get It Today</span>
            </label>
            <label className="flex gap-2">
              <input type="checkbox" />
              <span>Get It by Tomorrow</span>
            </label>
            <label className="flex gap-2">
              <input type="checkbox" />
              <span>Get It in 2 Days</span>
            </label>
          </div>
          {/* Amazon Fashion */}
          <h1 className="text-sm font-semibold mt-2 mx-4">Amazon Fashion</h1>
          <div className="mx-4   text-sm">
            <label className="flex gap-2">
              <input type="checkbox" />

              <span>Top Brands</span>
            </label>
            <label className="flex gap-2">
              <input type="checkbox" />

              <span>Made for Amazon</span>
            </label>
            <label className="flex gap-2">
              <input type="checkbox" />

              <span>Premium Brands</span>
            </label>
          </div>
          {/* Women's Clothing Size */}
          <h1 className="text-sm font-semibold mt-2 mx-4">
            Women's Clothing Size
          </h1>
        </div>

        {/* Right Content */}
        <div className="w-full px-4">
          <h1 className="text-xl font-semibold mt-4">Results</h1>
          <p className="text-sm text-gray-700 mb-4">
            Check each product page for other buying options. Price and other
            details may vary based on product size and colour.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {loading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))
              : womenTopBrand.map((items, index) => (
                  <div className="border p-2 " key={index}>
                    <div className="h-56 w-full bg-gray-100 flex  items-center justify-center">
                      <img
                        src={items.image}
                        alt={items.name}
                        className="h-full object-contain mix-blend-multiply"
                      />
                    </div>
                    <p className="font-semibold">{items.brand}</p>
                    <p>{items.description?.slice(0, 30)}...</p>
                    <p>{items.ratings}</p>
                    <p className="bg-red-600 py-1 text-sm text-white w-28 px-2 font-semibold">
                      Limited Deal
                    </p>
                    <div className="flex gap-1">
                      <p className="text-lg font-semibold">₹ {items.price}</p>
                      <p>
                        M.R.P :{" "}
                        <span className="line-through">₹ {items.MRP}</span>
                      </p>
                      <p>({items.discount}% off)</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenTopBrands;
