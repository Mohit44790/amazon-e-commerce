import React, { useEffect, useState } from 'react';
import { TiTick } from "react-icons/ti";
import { allBrands, allCategories, colors, mockProducts, overallsFashion } from '../Data/AllTypesAcccessories';
import { useNavigate } from 'react-router';
import { IoIosArrowUp } from 'react-icons/io';
import { womenKurtasKurtis, womenSuitSalwar } from '../Data/FashionData';

const fashionTabs = [
    "Women",
    "Men",
    "Kids",
    "Bags & Luggage",
    "Sportswear",
    "Sales & Deals",
  ];

  const megaMenuData = {
    "Bags & Luggage": {
      columns: {
        "Bags & Backpacks": ["Backpacks", "Laptop Bags", "Briefcases", "Messenger Bags", "School Bags"],
        "Luggage": ["Suitcases", "Trolley Bags", "Travel Duffles", "Travel Accessories"],
        "Handbags & Clutches": ["Handbags", "Totes", "Clutches", "Sling Bags"],
        "Wallets": ["Men's Wallets", "Women's Wallets"],
        "Stores": ["Leather Handbags", "Party Bags", "Work Bags", "College Bags"]
      },
      images: [
        { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/HB.jpg", title: "Handbags", desc: "40%-70% off" },
        { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/BP.jpg", title: "Backpacks", desc: "40%-70% off" },
        { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/BWL.jpg", title: "New Arrivals", desc: "Bags and Luggage" },
      ],
    },
    "Women": {
      columns: {
        "Bags & Backpacks": ["Backpacks", "Laptop Bags", "Briefcases", "Messenger Bags", "School Bags"],
        "Luggage": ["Suitcases", "Trolley Bags", "Travel Duffles", "Travel Accessories"],
        "Handbags & Clutches": ["Handbags", "Totes", "Clutches", "Sling Bags"],
        "Wallets": ["Men's Wallets", "Women's Wallets"],
        "Stores": ["Leather Handbags", "Party Bags", "Work Bags", "College Bags"]
      },
      images: [
        { src: "https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Women.jpg", title: "Handbags", desc: "40%-70% off" },
        { src: "https://m.media-amazon.com/images/G/31/img19/Jew/Feb/380-500.jpg", title: "Backpacks", desc: "40%-70% off" },
        { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/MAX/FLY_OUT/Sub-Nav-Women-2._CB439603748_.jpg", title: "New Arrivals", desc: "Bags and Luggage" },
      ],
    },
    "Men": {
      columns: {
        "Bags & Backpacks": ["Backpacks", "Laptop Bags", "Briefcases", "Messenger Bags", "School Bags"],
        "Luggage": ["Suitcases", "Trolley Bags", "Travel Duffles", "Travel Accessories"],
        "Handbags & Clutches": ["Handbags", "Totes", "Clutches", "Sling Bags"],
        "Wallets": ["Men's Wallets", "Women's Wallets"],
        "Stores": ["Leather Handbags", "Party Bags", "Work Bags", "College Bags"]
      },
      images: [
        { src: "https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Men.jpg", title: "Men Clothing", desc: "40%-70% off" },
        { src: "https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Running-Shoes.jpg", title: "Running Shoes", desc: "40%-70% off" },
        { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/MAX/FLY_OUT/Sub-Nav-men-2._CB439603748_.jpg", title: "New Arrivals", desc: "Bags and Luggage" },
      ],
    },
  };

const ClothingAnd_Accessories = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [showMoreBrands, setShowMoreBrands] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [hoveredTab, setHoveredTab] = useState(null);
  const navigate = useNavigate();

  const handleColorClick = (color) => {
    setSelectedColor(color);
    console.log(`Filtering products by color: ${color}`);
  };

 

  useEffect(() => {
    let result = [...mockProducts,...overallsFashion,...womenKurtasKurtis,...womenSuitSalwar];

    if (selectedCategory && selectedCategory !== "ALL") {
      result = result.filter(item => item.category === selectedCategory);
    }

    if (selectedBrand) {
      result = result.filter(item => item.brand === selectedBrand);
    }

    setFilteredProducts(result);
  }, [selectedCategory, selectedBrand]);

  const displayedCategories = showMoreCategories ? allCategories : allCategories.slice(0, 5);
  const displayedBrands = showMoreBrands ? allBrands : allBrands.slice(0, 5);

  const goToProductDetail = (id) => {
    navigate(`/offline-product/${id}`);
  };
  return (
    <div className="w-full">
      {/* Top navigation */}
      <div className="relative">
      {/* Top Bar */}
      <div className="flex justify-between items-center text-sm py-3 border-b px-4 md:px-6 bg-white z-50 ">
        <h1 className="text-xl md:text-2xl font-semibold">Amazon Fashion</h1>
        {/* <div className="flex gap-6"> */}
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
                <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-0">
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
          className="absolute left-0 w-full  bg-white bg shadow-lg border-t px-10 py-6 z-40"
        >
          <div className="grid  grid-cols-8 gap-2">
            {/* Columns */}
            
            {Object.entries(megaMenuData[hoveredTab].columns).map(([heading, items]) => (
              <div key={heading}>
                <h4 className="font-semibold  text-sm mb-2">{heading}</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  {items.map((item) => (
                    <li key={item} className="hover:underline cursor-pointer">
                      {item}
                    </li>
                  ))}
                  
                </ul>
                
              </div>
            ))}
          {/* Images Section */}
          {megaMenuData[hoveredTab].images && (
              <div className="col-span-3 flex gap-4">
                {megaMenuData[hoveredTab].images.map((img, index) => (
                  <div key={index} className="text-center text-sm">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-64 object-cover mx-auto"
                    />
                    <p className="font-semibold mt-1">{img.title}</p>
                    <p className="text-xs text-gray-500">{img.desc}</p>
                  </div>
                ))}
              </div>
            )}
            
          </div>
        </div>
      )}
    </div>

      {/* Layout */}
      <div className='flex flex-col lg:flex-row'>
        {/* Sidebar */}
        <div className='w-full lg:w-72 border-r px-4 py-4 space-y-4'>
          {/* Category */}
          <div>
            <h2 className='font-semibold text-sm mb-1'>Category</h2>
            <p className='font-medium text-sm'>Clothing & Accessories</p>
            <div className='ml-4 space-y-1 text-sm'>
              <p>Women</p>
              <p>Men</p>
              <p>Girls</p>
              <p>Boys</p>
              <p>Baby</p>
            </div>
          </div>

          {/* Prime */}
          <div>
            <h2 className='font-semibold text-sm mb-1'>Amazon Prime</h2>
            <label className='flex items-center text-blue-500 space-x-1'>
              <input type="checkbox" />
              <span className='flex items-center'><TiTick /> Prime</span>
            </label>
          </div>

          {/* Delivery Day */}
          <div>
            <h2 className='font-semibold text-sm mb-1'>Delivery Day</h2>
            <label className='flex items-center text-sm'>
              <input type="checkbox" className='mr-2' /> Get It by Tomorrow
            </label>
          </div>

          {/* Brands */}
          <div>
            <h2 className='font-semibold text-sm mb-1'>Brands</h2>
            {["Amazon Brand - Symbol", "Jockey", "boAt", "Allen Solly", "Van Heusen", "GoSriKi", "U.S. POLO ASSN.", "Amazon Brand - Myx", "Casio"].map((brand, index) => (
              <label key={index} className='flex items-center text-sm'>
                <input type="checkbox" className='mr-2' /> {brand}
              </label>
            ))}
          </div>

          {/* Price */}
          <div>
            <h2 className='font-semibold text-sm mb-1'>Price</h2>
            <ul className='ml-2 text-sm space-y-1'>
              <li>Under ₹300</li>
              <li>₹300 - ₹500</li>
              <li>₹500 - ₹1000</li>
              <li>₹1000 - ₹1500</li>
              <li>Over ₹1500</li>
            </ul>
          </div>

          {/* Reviews */}
          <div>
            <h2 className='font-semibold text-sm mb-1'>Customer Reviews</h2>
            <span className='text-sm'>★★★★☆ & up</span>
          </div>

          {/* Deals */}
          <div>
            <h2 className='font-semibold text-sm mb-1'>Deals & Discounts</h2>
            <p className='text-sm'>All Discounts</p>
            <p className='text-sm'>Today’s Deal</p>
          </div>

          {/* Fashion Filters */}
          <div>
            <h2 className='font-semibold text-sm mb-1'>Amazon Fashion</h2>
            <label className='block text-sm'><input type="checkbox" /> Top Brands</label>
            <label className='block text-sm'><input type="checkbox" /> Premium Brands</label>
            <label className='block text-sm'><input type="checkbox" /> Made for Amazon</label>
          </div>

          {/* Color filter */}
          <div>
            <h2 className='font-semibold text-sm mb-1'>Color</h2>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorClick(color)}
                  className={`w-6 h-6 rounded-full border-2 transition ${
                    selectedColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                  }`}
                  style={{ backgroundColor: color }}
                  title={color}
                ></button>
              ))}
            </div>
          </div>

          {/* Material */}
          <div>
            <h2 className='font-semibold text-sm mb-1'>Material</h2>
            {["Cotton", "Rayon", "Silk", "Art Silk", "Chiffon", "Corduroy", "Crepe", "Denim", "Down", "Faux Fur", "Fleece", "Fur", "Georgette", "Leather", "Linen", "Modal", "Net", "Rubber", "Satin", "Synthetic", "Velvet", "Wool"].map((material, index) => (
              <label key={index} className='block text-sm'>
                <input type="checkbox" className='mr-2' /> {material}
              </label>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 py-4">
      <img
        src="https://m.media-amazon.com/images/G/31/prime/ACQ/1500x280_ho_new.jpg"
        alt="banner"
        className="w-full h-auto rounded mb-6"
      />

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 pr-4">
          <h2 className="text-lg font-semibold mb-2">Department</h2>
          <div className="space-y-1 text-sm">
            {displayedCategories.map((item, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="department"
                  checked={selectedCategory === item}
                  onChange={() => setSelectedCategory(item)}
                />
                {item}
              </label>
            ))}
            <button
                            className="text-blue-500 text-sm mt-2 hover:underline"

              onClick={() => setShowMoreCategories(prev => !prev)}
            >
              {showMoreCategories ? "Show less" : "Show more"}
            </button>
          </div>

          {/* Brands */}
          <h2 className="text-lg font-semibold mt-6  ">Brands</h2>
          <div className="space-y-1 text-sm">
            {displayedBrands.map((item, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="brand"
                  checked={selectedBrand === item}
                  onChange={() => setSelectedBrand(item)}
                />
                {item}
              </label>
            ))}
             <button
              className="text-blue-500 text-sm mt-2 hover:underline"
              onClick={() => setShowMoreBrands(prev => !prev)}
            >
              {showMoreBrands ? "Show less" : "Show more"}
            </button>
          </div>
          <h2 className="text-lg font-semibold mb-2">Customer Reviews</h2>
      <h2 className="text-lg font-semibold mb-2">Price</h2>
      <p><input type="radio" />Under ₹300</p>
              <p><input type="radio" />₹300 - ₹500</p>
              <p><input type="radio" />₹500 - ₹1000</p>
              <p><input type="radio" />₹1000 - ₹1500</p>
              <p><input type="radio" />Over ₹1500</p>
      <h2 className="text-lg font-semibold mb-2">Discount</h2>
     <p><input type="radio" /> All</p>
<p><input type="radio" />10% off or more</p>
<p><input type="radio" />25% off or more</p>
<p><input type="radio" />50% off or more</p>
<p><input type="radio" />70% off or more</p>
      <h2 className="text-lg font-semibold mb-2">Prime Programmes</h2>
      <input type="checkbox" name="" id="" />Prime Exclusive
        </div>

       {/* Product Grid */}
       <div className="flex-1 grid grid-cols-1  h-full w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="border rounded p-4 shadow hover:shadow-md transition">
                 <img
                  src={product.image}
                  alt={product.title}
              onClick={() => goToProductDetail(product.id)}

                  className="w-48 h-48  object-contain mb-2"
                />
                <div className='flex justify-between text-xs'><p className='bg-red-700 p-1 text-white rounded-md '>{product.discount}</p>
                <p className='text-red-500'>Limited Deal</p>
                </div>
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-sm text-gray-600">Brand: {product.brand}</p>
                <p className="text-sm text-gray-600" >color: {product.colors}</p>
                {selectedColor && (
    <div className="flex items-center gap-2 ">
      <span className="text-sm">Selected Color:</span>
      <span className="w-4 h-4 rounded-full border" style={{ backgroundColor: selectedColor }}></span>
    </div>
  )}
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default ClothingAnd_Accessories;
