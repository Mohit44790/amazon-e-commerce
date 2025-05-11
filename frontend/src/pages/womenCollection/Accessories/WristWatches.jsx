import React, { useEffect, useState } from 'react';
import { wristWatches } from '../../../Data/AllTypesAcccessories';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

// Skeleton Loader
const SkeletonCard = () => {
  return (
    <div className="border p-2 animate-pulse space-y-2 rounded">
      <div className="bg-gray-300 h-56 w-full rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-3 bg-gray-300 rounded w-5/6"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      <div className="bg-gray-300 h-6 w-28 rounded"></div>
    </div>
  );
};

const WristWatches = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-4 py-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Sidebar */}
        <div className="lg:w-72 border-r pr-4">
          <h1 className="text-sm font-semibold mt-2">Delivery Day</h1>
          <div className="text-sm space-y-2 mt-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Get It by Tomorrow</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Get It in 2 Days</span>
            </label>
          </div>

          <h1 className="text-sm font-semibold mt-4">Category</h1>
          <div className="flex items-center gap-1 mt-2 text-sm">
            <IoIosArrowBack />
            <span>Watches</span>
          </div>
        <Link to={'/wfashion_watches'}>  <div className="flex items-center gap-1 text-sm">
            <IoIosArrowBack />
            <span>Women</span>
          </div></Link>
          <p className="text-sm mt-1 font-bold ml-5">Wrist Watches</p>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h1 className="text-lg font-bold mb-1">Results</h1>
          <p className="text-sm text-gray-600 mb-4">
            Check each product page for other buying options.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {loading
              ? Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)
              : wristWatches.map((watches, index) => (
                  <div key={index} className="border p-2 rounded hover:shadow-md transition">
                    <div className="bg-gray-50 flex items-center justify-center h-72 w-full">
                      <img
                        src={watches.image}
                        alt={watches.name}
                        className="h-full object-contain mix-blend-darken"
                      />
                    </div>
                    <p className="mt-2 font-semibold">{watches.brand}</p>
                    <p className="text-sm text-gray-700">
                      {watches.description.slice(0, 30)}...
                    </p>
                    <p className="text-sm text-gray-500">{watches.ratings}</p>
                    <div className="flex flex-wrap gap-1 text-sm mt-1">
                      <p className="font-semibold">₹{watches.price}</p>
                      <p>
                        M.R.P:{' '}
                        <span className="line-through text-gray-500">₹{watches.MRP}</span>
                      </p>
                      <p className="text-green-600">({watches.discount}% off)</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WristWatches;
