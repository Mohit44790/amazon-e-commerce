import React from "react";

const BestSellers = () => {
  return (
    <div>
      <nav className="border">
        <ul className="flex gap-10 py-2 mx-6  text-sm">
          <li>Bestsellers</li>
          <li>Hot New Releases</li>
          <li>Movers and Shakers</li>
          <li>Most Wished For</li>
          <li>Most Gifted</li>
        </ul>
      </nav>
      <div className="mx-4">
        <h1 className="font-semibold text-2xl"> Amazon Bestsellers </h1>
        <p className="text-xs text-gray-500">
          Our most popular products based on sales. Updated frequently.
        </p>
        <div className="flex ">
          {/* left  */}
          <div className="border-r w-64 mt-2">
            <p className="font-semibold">Any Department</p>
            <ul className="text-sm mx-2 ">
              <li>Amazon Launchpad</li>
              <li>Amazon Renewed</li>
              <li>Apps & Games</li>
              <li>Baby Products</li>
              <li>Bags, Wallets and Luggage</li>
              <li>Beauty</li>
              <li>Books</li>
              <li>Car & Motorbike</li>
              <li>Clothing & Accessories</li>
              <li>Computers & Accessories</li>
              <li>Electronics</li>
              <li>Garden & Outdoors</li>
              <li>Gift Cards</li>
              <li>Grocery & Gourmet Foods</li>
              <li>Health & Personal Care</li>
              <li>Home & Kitchen</li>
              <li>Home Improvement</li>
              <li>Industrial & Scientific</li>
              <li>Jewellery</li>
              <li>Kindle Store</li>
              <li>Movies & TV Shows</li>
              <li>Music</li>
              <li>Musical Instruments</li>
              <li>Office Products</li>
              <li>Pet Supplies</li>
              <li>Shoes & Handbags</li>
              <li>Software</li>
              <li>Sports, Fitness & Outdoors</li>
              <li>Toys & Games</li>
              <li>Video Games</li>
              <li>Watches</li>
            </ul>
          </div>
          {/* right */}
          <div className="mx-2 w-full mt-2">
            
         
          <div >
            <div className="justify-between flex">
              <span className="flex text-center gap-2">
                <h2 className="text-2xl font-semibold">
                  Bestsellers in Car & Motorbike
                </h2>
                <span className="text-center mt-1 text-blue-400">see more</span>{" "}
              </span>
              <p>page 1 to 5</p>
            </div>
            <div className="flex">
              <div className="">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/81dsWgzXLrL._AC_UL450_SR450,320_.jpg"
                  alt=""
                />
                <p>
                  SOFTSPUN Microfiber Cloth - 4 pcs - 40x40 cms - 340 GSM Grey!
                  Thick Lint & Streak-Free Multipurpose Cloths - Automotive
                  Micro
                </p>
                <p>4.3 out of 5 stars 95,528</p>
                <p>₹269.00</p>
              </div>
              <div className="">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/61a3ls6VP+L._AC_UL450_SR450,320_.jpg"
                  alt=""
                />
                <p>
                  Godrej aer O – Hanging Car Air Freshener – Assorted Pack of 3
                  (22.5g) | Gel Lasts up to 30 days | Car Accessories
                </p>
                <p>4.3 out of 5 stars 95,528</p>
                <p>₹269.00</p>
                #2
              </div>
              <div className="">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/61a3ls6VP+L._AC_UL450_SR450,320_.jpg"
                  alt=""
                />
                <p>
                  Godrej aer O – Hanging Car Air Freshener – Assorted Pack of 3
                  (22.5g) | Gel Lasts up to 30 days | Car Accessories
                </p>
                <p>4.3 out of 5 stars 95,528</p>
                <p>₹269.00</p>
                #2
              </div>
              <div className="">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/61a3ls6VP+L._AC_UL450_SR450,320_.jpg"
                  alt=""
                />
                <p>
                  Godrej aer O – Hanging Car Air Freshener – Assorted Pack of 3
                  (22.5g) | Gel Lasts up to 30 days | Car Accessories
                </p>
                <p>4.3 out of 5 stars 95,528</p>
                <p>₹269.00</p>
                #2
              </div>
            </div>
          </div>
          <div className="mx-4 w-full">
            <div className="justify-between flex">
              <span className="flex text-center gap-2">
                <h2 className="text-2xl font-semibold">
                Bestsellers in Office Products
                </h2>
                <span className="text-center mt-1 text-blue-400">see more</span>{" "}
              </span>
              <p>page 1 to 5</p>
            </div>
            <div className="flex">
              <div className="">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/81dsWgzXLrL._AC_UL450_SR450,320_.jpg"
                  alt=""
                />
                <p>
                  SOFTSPUN Microfiber Cloth - 4 pcs - 40x40 cms - 340 GSM Grey!
                  Thick Lint & Streak-Free Multipurpose Cloths - Automotive
                  Micro
                </p>
                <p>4.3 out of 5 stars 95,528</p>
                <p>₹269.00</p>
              </div>
              <div className="">
                <img
                  src="https://m.media-amazon.com/images/I/615+2PTw6ML._SX466_.jpg"
                  alt=""
                />
                <p>
                Scotch 3M Scotch Extreme Double Sided Tape, 1M Holds 6.7Kg, Works On Uneven Surfaces, Weather Resistant, Works On Indoor, Outdoor, Auto Interior Surfaces
                </p>
                <p>4.3 out of 5 stars 95,528</p>
                <p>₹269.00</p>
                #2
              </div>
              <div className="">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/61a3ls6VP+L._AC_UL450_SR450,320_.jpg"
                  alt=""
                />
                <p>
                  Godrej aer O – Hanging Car Air Freshener – Assorted Pack of 3
                  (22.5g) | Gel Lasts up to 30 days | Car Accessories
                </p>
                <p>4.3 out of 5 stars 95,528</p>
                <p>₹269.00</p>
                #2
              </div>
              <div className="">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/61a3ls6VP+L._AC_UL450_SR450,320_.jpg"
                  alt=""
                />
                <p>
                  Godrej aer O – Hanging Car Air Freshener – Assorted Pack of 3
                  (22.5g) | Gel Lasts up to 30 days | Car Accessories
                </p>
                <p>4.3 out of 5 stars 95,528</p>
                <p>₹269.00</p>
                #2
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
