import React from 'react'

const Movers = () => {
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
          </div>
    </div>
  )
}

export default Movers