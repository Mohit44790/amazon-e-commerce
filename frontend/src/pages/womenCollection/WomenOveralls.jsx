import React, { useEffect, useState } from 'react';
import AmazonFashionNavbar from '../MensCollection/AmazonFashionNavbar';
import { overallsFashion } from '../../Data/AllTypesAcccessories';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';


const SkeletonCard = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
    {[...Array(4)].map((_, index) => (
      <div key={index} className="animate-pulse w-full  mb-4 mx-2">
        <div className="bg-gray-200 w-full h-52 " />
        <div className="bg-gray-200 h-4 w-20 mt-2" />
        <div className="bg-gray-200 h-2 w-80 mt-2" />
        <div className="bg-gray-200 h-2 w-10 mt-2" />
        <div className="bg-gray-200 h-2 w-12 mt-2" />
        <div className='flex'>
        <div className="bg-gray-200 h-6 w-6 rounded-full mt-2" />
        <div className="bg-gray-200 h-6 w-6 rounded-full mt-2" />

        </div>
      </div>
    ))}
  </div>
);

const WomenOveralls = () => {
  const [selectedColors, setSelectedColors] = useState({});
  const [colorFilter, setColorFilter] = useState([]);
  const [sizeFilter, setSizeFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
 const [loading, setLoading] = useState(true);
const navigate = useNavigate();
  useEffect(() => {
     const timer = setTimeout(() => setLoading(false), 500);
     return () => clearTimeout(timer);
   }, []);

const handleFilterBrandChange = (brand) => {
  setBrandFilter(prev =>
    prev.includes(brand)
      ? prev.filter(b => b !== brand)
      : [...prev, brand]
  );
};
  

  const handleColorSelect = (productId, color) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: color,
    }));
  };

  const handleFilterColorChange = (color) => {
    setColorFilter((prev) =>
      prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color]
    );
  };

  const handleFilterSizeChange = (size) => {
    setSizeFilter((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  // Apply filtering
  const filteredItems = overallsFashion.filter(item => {
    const itemColors = item.colors.toLowerCase().split(',').map(c => c.trim());
    const itemSizes = item.sizes || [];
    const itemBrands =item.brand || [];

    const matchesColor = colorFilter.length === 0 || colorFilter.some(color => itemColors.includes(color.toLowerCase()));
    const matchesSize = sizeFilter.length === 0 || sizeFilter.some(size => itemSizes.includes(size));
    const matchesBrand = brandFilter.length === 0 || brandFilter.some(brand => itemBrands.includes(brand));

    return matchesColor && matchesSize && matchesBrand;
  });

  // Collect unique filters
  const allBrands = [...new Set(overallsFashion.map(item => item.brand))];
  const allColors = [...new Set(overallsFashion.flatMap(i => i.colors.split(',').map(c => c.trim())))];
  const allSizes = [...new Set(overallsFashion.flatMap(i => i.sizes || []))];

  return (
    <div>
      <AmazonFashionNavbar />
      <div className="flex flex-col md:flex-row">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 mb-6 md:mb-0 md:mr-6 mx-4">
          <h2 className="text-sm font-semibold">Category</h2>

          <Link to="/allAccessories" className="flex items-center text-sm">
            <IoIosArrowBack />
            <span className="ml-1">Clothing & Accessories</span>
          </Link>
          <Link to="/clothing" className="flex items-center text-sm mb-1">
            <IoIosArrowBack />
            <span className="ml-1">Women</span>
          </Link>
          <h2 className="text-sm font-semibold mb-2 mx-6">Overalls</h2>

          <div className="mb-4">
  <h1 className="font-bold text-sm mb-1">Brand</h1>
  {allBrands.map((brand, index) => (
    <label key={index} className="block text-sm cursor-pointer">
      <input
        type="checkbox"
        className="mr-2"
        checked={brandFilter.includes(brand)}
        onChange={() => handleFilterBrandChange(brand)}
      />
      {brand}
    </label>
  ))}
</div>


          <div className="mb-4">
  <h1 className="font-bold text-sm mb-2">Color</h1>
  <div className="flex flex-wrap gap-1 ">
    {allColors.map((color, index) => {
      const isSelected = colorFilter.includes(color);
      return (
        <div
          key={index}
          onClick={() => handleFilterColorChange(color)}
          title={color}
          className={`w-6 h-6  cursor-pointer  transition-all
            ${isSelected ? 'ring-2 ring-black' : 'border-gray-300'}
          `}
          style={{ backgroundColor: color.toLowerCase() }}
        ></div>
      );
    })}
  </div>
</div>


          <div className="mb-4">
  <h1 className="font-bold text-sm mb-2">Size</h1>
  <div className="flex flex-wrap gap-2">
    {allSizes.map((size, index) => {
      const isSelected = sizeFilter.includes(size);
      return (
        <div
          key={index}
          onClick={() => handleFilterSizeChange(size)}
          className={`cursor-pointer   transition-all
            ${isSelected ? 'bg-gray-200 text-black border-gray-300' : 'bg-white text-gray-600 border-gray-300'}
          `}
        >
          <p className='p-3 py-1 text-xs rounded border'>{size}</p>
        </div>
      );
    })}
  </div>
</div>

        </aside>

        {/* Main Content */}
        <main className="w-full">
          <h1 className="text-3xl font-bold mb-6">Women's Overalls</h1>

        {loading ? (<SkeletonCard/>): ( <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
            {filteredItems.map((item) => {
              const colorList = item.colors.split(',').map(c => c.trim());
              const selectedColor = selectedColors[item.id] || null;

              return (
                <div key={item.id} onClick={() => navigate(`/offline-product/${item.id}`)} className="border shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-tr from-gray-300 via-white to-gray-300 flex justify-center">
  <img
    src={item.image}
    alt={item.description}
    className="w-60 h-56 object-contain mix-blend-darken cursor-pointer rounded image-reflect"
  />
</div>

                  <div className="p-4">
                    <p className="font-medium text-sm mb-1">{item.brand}</p>
                    <p className="text-sm mb-2">{item.description}</p>

                    <div className="flex items-center space-x-2 mb-2">
                      <p className="text-lg font-semibold text-black">₹{item.price}</p>
                      <p className="line-through text-gray-500 text-sm">₹{item.MRP}</p>
                      <p className="text-green-600 text-sm">{item.discount}% Off</p>
                    </div>

                    {/* Colors */}
                    <p className="text-sm text-gray-700 mb-1">Select Color:</p>
                    <div className="flex gap-2 flex-wrap">
                      {colorList.map((color, index) => (
                        <button
                          key={index}
                          className={`w-6 h-6 rounded-full border-2 ${
                            selectedColor === color ? 'ring-2 ring-black' : ''
                          }`}
                          style={{ backgroundColor: color.toLowerCase() }}
                          onClick={() => handleColorSelect(item.id, color)}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>)}
        </main>
      </div>
    </div>
  );
};

export default WomenOveralls;
