import React from 'react'
import AmazonFashionNavbar from '../AmazonFashionNavbar'
import { IoIosArrowBack } from 'react-icons/io'
import { SunglassesBrands, SunglassesMen } from '../../../Data/AllTypesAcccessories'
import { useState } from 'react';

const colors = ["red", "black", "blue", "green"]; 
const Sunglasses = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  return (
    <div>
      <AmazonFashionNavbar/>

      <div className='flex'>
        {/* sidemenu  */}
        <div className='w-60 mx-4 border-r'>
          <h1 className="text-sm font-medium">Category</h1>
          <div className="flex items-center  mt-1">
                      <IoIosArrowBack />
                      <h1 className="text-sm">Clothing & Accessories</h1>
                    </div>
          <div className="flex items-center  mt-1">
                      <IoIosArrowBack />
                      <h1 className="text-sm">Men</h1>
                    </div>
          <div className="flex items-center  mt-1">
                      <IoIosArrowBack />
                      <h1 className="text-sm">Sunglasses & Spectacle Frames</h1>
                    </div>
              <h1 className="text-sm mx-6 font-bold" >Sunglasses</h1>
        </div>
        {/* main  */}
        <main className='w-full'>
          <section>
            <div className='flex overflow-x-auto '>
              {SunglassesMen.map((Sunglasses)=>(
                <img src={Sunglasses.img} alt={Sunglasses.id} className='w-40' />
              ))}
            </div>
          </section>
          <div className='mx-6'>

        <img src="https://m.media-amazon.com/images/G/31/img22/Meghana/EyewearUBS/topbrands/04_Shop_Top_Brands_Header.png" alt="main" />
<div className='flex mx-2 gap-2 overflow-x-auto scrollbar-hide '>

        {SunglassesBrands.map((brand)=>(
          <img src={brand.img} alt={brand.id} className='w-44' />
        ))}
        </div>
        </div>

  {/* Section Title */}
      <div className="p-4">
  <h1 className="text-xl font-semibold mb-4">Sunglasses</h1>

  {/* Filter Buttons */}
  <div className="flex flex-wrap gap-2 mb-4">
    <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm">
      Best Seller
    </button>
    <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm">
      Premium Styles
    </button>
    <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm">
      New Launches
    </button>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2  ">
    {Array(4).fill().map((_, index) => (
      <div key={index} className="border  ">
        {/* Image Container with Gradient Background */}
        <div className="flex py-8 items-center justify-center bg-gradient-to-tr from-gray-300 via-white to-gray-300 p-4 mb-2">
          <img
            src="https://m.media-amazon.com/images/I/31oDhK42T0L._AC_SX250_.jpg"
            alt="Sunglasses"
            className="w-60 h-auto mix-blend-darken object-cover rounded"
          />
        </div>

        {/* Product Info */}
        <p className="font-medium text-sm mb-2 mx-2">
          VINCENT CHASE EYEWEAR By Lenskart | Full Rim Square Sunglasses | Polarized And 100% UV Protected | Men & Women | Vc S13973
        </p>
        <p className="text-yellow-500 text-sm mb-1 mx-2">★★★★☆ 4.3</p>

        {/* Pricing */}
        <div className="flex items-center space-x-3 mb-1 mx-2">
          <p className="text-lg font-semibold text-black">₹699</p>
          <p className="line-through text-gray-500 text-sm">₹2500</p>
          <p className="text-green-600 font-medium text-sm">74% Off</p>
        </div>

        {/* Color Options */}
       
      <p className="text-sm text-gray-700 mx-2 mb-1">Select Color:</p>
      <div className="flex gap-2 mx-2 mb-4">
        {colors.map((color, index) => (
          <button
            key={index}
            className={`w-6 h-6 rounded-full border-2 ${
              selectedColor === color ? "ring-2 ring-black" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
            aria-label={`Select color ${color}`}
          />
        ))}
      </div>
      </div>
    ))}
  </div>
</div>

    
    
        </main>
        
      </div>
    </div>
  )
}

export default Sunglasses