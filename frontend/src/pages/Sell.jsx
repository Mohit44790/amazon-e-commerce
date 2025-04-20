import React from "react";

const Sell = () => {
  return (
    <div>
      <div className="flex bg-gray-800 mt-4 mx-4 text-white">
        <div className="mx-20 mt-20">
          <h2 className="text-2xl font-semibold"> Announced:</h2>
          <h1 className="text-6xl font-bold">
            ZERO referral fee on over 1.2 crore products
          </h1>
          <h1 className="text-xl font-semibold mt-4">
            Highest-ever seller fee reduction
          </h1>
          <p className=" font-semibold">Know more</p>

          <button className="bg-yellow-500 py-4 px-8 text-lg mt-8 rounded-full">
            Sign In
          </button>
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/G/31/amazonservices/Selling_fee_drop_GIF.gif"
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-4 text-center justify-center">
        <p>
          <img
            src="https://m.media-amazon.com/images/G/31/amazonservices/New_new_new_one_more.gif"
            className="w-20"
            alt=""
          />
        </p>
        <h1 className="text-5xl mt-4 text-gray-900">Fee drop highlights</h1>
      </div>
      <div className="flex gap-2 text-center  justify-center">
        <div className="p-5 bg-blue-300 rounded-2xl">
          <p className="text-4xl font-bold text-gray-900">0%</p>
          <p>Referral fees on products under</p> <p>₹300</p>
        </div>
        <div className="p-5 bg-blue-300 rounded-2xl">
          <p className="text-4xl font-bold text-gray-900">65%</p>
          <p>National shipping rates now,</p> <p>₹77</p>
        </div>
        <div className="p-5 bg-blue-300 rounded-2xl">
          <p className="text-4xl font-bold text-gray-900">90%</p>
          <p>Savings in selling fees </p> <p>on the sale of second unit ₹300</p>
        </div>
      </div>

      <div className="mt-8 mb-2 mx-48">
  <h1 className="text-3xl text-gray-900 font-bold text-center mb-8">
    Category Level Impact
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {/* Card 1 */}
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src="https://m.media-amazon.com/images/G/31/amazonservices/Apparel_lifestyle.jpg"
        alt="Apparel"
        className="w-64 h-56 object-cover"
      />
      <div className="p-4 text-left">
        <h2 className="text-xl font-semibold mb-2">Apparel</h2>
        <p className="text-sm text-gray-700">
          Enjoy up to 16.5% reduction in referral fee on items priced above Rs.300.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src="https://m.media-amazon.com/images/G/31/amazonservices/Home_lifestyle.jpg"
        className="w-64 h-56 object-cover"
      />
      <div className="p-4 text-left">
        <h2 className="text-xl font-semibold mb-2">Home</h2>
        <p className="text-sm text-gray-700">
        See up to 15.5% reduction in referral fee for products = Rs.300.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src="https://m.media-amazon.com/images/G/31/amazonservices/Shoes_lifestyle.jpg"
        alt="Shoes"
        className="w-72 h-56 object-cover"
      />
      <div className="p-4 text-left">
        <h2 className="text-xl font-semibold mb-2">Shoes</h2>
        <p className="text-sm text-gray-700">
        See up to 15% reduction in referral fee for products = Rs.300.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src="https://m.media-amazon.com/images/G/31/amazonservices/Jewellery_lifestyle.jpg"
        alt="Beauty"
        className="w-72 h-56 object-cover"
      />
      <div className="p-4 text-left">
        <h2 className="text-xl font-semibold mb-2">Jewellery</h2>
        <p className="text-sm text-gray-700">
        See up to 17.5% reduction in referral fee for products = Rs.300.
        </p>
      </div>
    </div>
    <button className="py-1 px-2 bg-orange-500 rounded-full mx-9">Know more about fee drop here</button>
  </div>
</div>


    </div>
  );
};

export default Sell;
