import React, { useRef } from 'react';
import { brandDeal } from '../Data/AllTypesAcccessories';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const TodayDeal = () => {
  const scrollRef = useRef(); // Use useRef instead of useReducer

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <img
        src="https://m.media-amazon.com/images/G/31/Events/img25/MayART25/Header_PC_Ends_Tomorrow.jpg"
        alt="sale"
        className="w-full"
      />
      <img
        src="https://m.media-amazon.com/images/G/31/Events/img25/MayART25/MAY25_GW_PC_BOR_2X_V3.png"
        alt="bank"
        className="w-full"
      />
      <img
        src="https://m.media-amazon.com/images/G/31/Events/img25/MayART25/Stripe2PC.png"
        alt="rewards"
        className="w-full"
      />

      {/* slider */}
      <div className="bg-[#f6f870] py-4 relative">
        {/* Brands in focus deals */}
        <div className="mx-6">
          <h1 className="text-xl font-semibold mb-4">Brands in focus deals</h1>

          <button
            onClick={() => scroll(-300)}
            className="absolute left-2 top-40 px-2 border rounded-lg border-gray-400 bg-white py-2 z-10"
          >
            <IoIosArrowBack size={24} />
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto mx-12 whitespace-nowrap scroll-smooth scrollbar-hide "
          >
            {brandDeal.map((deal, index) => (
              <div
                key={index}
                className="inline-block w-56 mx-2 bg-white rounded shadow text-center"
              >
                <img src={deal.image} alt={deal.name} className="w-full h-56 object-cover" />
                <p className="py-2 text-sm">{deal.label}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(300)}
            className="absolute right-2 top-40 px-2 border rounded-lg border-gray-400 bg-white py-2 z-10"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>

        {/* Shop top categories */}
        <div className="mx-4 mt-10">
          <h1 className="text-xl font-semibold">Shop top categories</h1>
          {/* You can add category components here */}
          <div>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayDeal;
