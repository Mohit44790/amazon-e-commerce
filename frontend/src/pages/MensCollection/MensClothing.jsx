import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../../redux/slice/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { TiTick } from "react-icons/ti";
import { colors } from '../../Data/AllTypesAcccessories';
import { IoIosArrowUp } from 'react-icons/io';


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
const MensClothing = () => {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(null);
  const { items: products, loading, error } = useSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [priceOrder, setPriceOrder] = useState('');
    // const [showMoreCategories, setShowMoreCategories] = useState(false);
    // const [showMoreBrands, setShowMoreBrands] = useState(false);
    const [hoveredTab, setHoveredTab] = useState(null);
  

    const handleColorClick = (color) => {
      setSelectedColor(color);
      console.log(`Filtering products by color: ${color}`);
    };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // const categories = ['Men', 'Women', 'Vegetable', 'Fruits'];
  const categories = ['All', ...new Set(products.map((product) => product.category?.name))];
  const brands = ['All', ...new Set(products.map((product) => product.brand?.name))];
  

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPriceOrder(e.target.value);
  };

  const filteredProducts = products
  .filter((product) => {
    if (selectedCategory && selectedCategory !== 'All' && product.category?.name !== selectedCategory) return false;
    if (selectedBrand && selectedBrand !== 'All' && product.brand?.name !== selectedBrand) return false;
    return true;
  })
  .sort((a, b) => {
    if (priceOrder === 'lowToHigh') return a.price - b.price;
    if (priceOrder === 'highToLow') return b.price - a.price;
    return 0;
  });


  if (loading) return <div className="text-center mt-10">Loading products...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  //show more or less
  // const selectedCategory = showMoreCategories ? selectedCategory : selectedCategory.slice(0, 5);
  //   const selectedBrand = showMoreBrands ? selectedBrand : selectedBrand.slice(0, 5);
  return (
   <>
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
              <NavLink
  to="/category/men-clothes"
  className={({ isActive }) =>
    isActive ? 'text-blue-400' : 'text-black hover:text-gray-400'
  }
>
  Men Clothes
</NavLink>
              <p>Girls</p>
              <p>Boys</p>
              <p>Baby</p>
              <NavLink
  to="/category/smartphones"
  className={({ isActive }) =>
    isActive ? 'text-blue-400' : 'text-black hover:text-gray-400'
  }
>
  Smartphones
</NavLink>
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
          <div className="categories">
  <p>Category</p>
    {categories.map((cat, index) => (
      <label key={index} className='flex'>
        <input
          type="radio"
          name="category"
          value={cat}
          checked={selectedCategory === cat}
          onChange={(e) => setSelectedCategory(e.target.value)}
        />
        {cat}
      </label>
    ))}
  </div>
            <button
                            className="text-blue-500 text-sm mt-2 hover:underline"

              // onClick={() => setShowMoreCategories(prev => !prev)}
            >
              {/* {showMoreCategories ? "Show less" : "Show more"} */}
            </button>
          </div>

          {/* Brands */}
          <h2 className="text-lg font-semibold   ">Brands</h2>
          <div className="brands  ">
    
    {brands.map((brand, index) => (
      <label key={index} className='flex'> 
        <input
          type="radio"
          name="brands"
          value={brand}
          checked={selectedBrand === brand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        />
        {brand}
      </label>
    ))}
  </div>
          {/* <div className="space-y-1 text-sm">
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
          </div> */}
          <h2 className="text-lg font-semibold mb-2">Customer Reviews</h2>
          <div className=" price-sorting">
          <h2 className="text-lg font-semibold mb-2">Price</h2>
    <label>
      <input
        type="radio"
        name="price"  
        value="lowToHigh"
        checked={priceOrder === 'lowToHigh'}
        onChange={(e) => setPriceOrder(e.target.value)}
      />
      Low to High
    </label>
  <br />
    <label>
      <input
        type="radio"
        name="price"
        value="highToLow"
        checked={priceOrder === 'highToLow'}
        onChange={(e) => setPriceOrder(e.target.value)}
      />
      High to Low
    </label>
  </div>
      {/* <h2 className="text-lg font-semibold mb-2">Price</h2>
      <p><input type="radio" />Under ₹300</p>
              <p><input type="radio" />₹300 - ₹500</p>
              <p><input type="radio" />₹500 - ₹1000</p>
              <p><input type="radio" />₹1000 - ₹1500</p>
              <p><input type="radio" />Over ₹1500</p> */}
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
       <div className="p-6">
    <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
    <div className="filters">  
</div>
<div className="flex-1 p-4">
  {filteredProducts.length ? (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {filteredProducts.map((product) => (
        <div key={product._id} className="border rounded p-4 shadow hover:shadow-md transition">
        <Link
            to={`/product/${product._id}`}>  <img
            src={product?.images?.[0] || '/placeholder.png'}
            alt={product.name}
             className="w-48 h-48  object-contain mb-2"
          /></Link>
          <div className='flex justify-between text-xs'><p className='bg-red-700 p-1 text-white rounded-md '> {product.discount} % off</p>
                  <p className='text-red-500 font-semibold'>Limited Deal</p>
                  </div>
          {/* <h2 className="text-lg font-semibold ">{product.name}</h2>
          <p className="text-gray-700 text-sm ">Price: ₹{product.price}</p> */}
          <p className="text-sm text-gray-500 ">{product.description?.substring(0, 40)}...</p>
          <p className="text-sm text-gray-600" >color: {product.colors}</p>
          <p className="text-sm text-gray-600" >Size: {product.sizes}</p>
          
            
        </div> 
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-500">No products found.</p>
  )}
</div>


  </div>
      </div>
    </div>
  </div>
    </div>

    
   </>
);
};

export default MensClothing


 