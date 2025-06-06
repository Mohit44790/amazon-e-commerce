import React, { useState } from 'react'
import AmazonFashionNavbar from '../../MensCollection/AmazonFashionNavbar'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { womenSuitSalwar } from '../../../Data/FashionData'

const SalwarSuits = () => {
    const navigate = useNavigate()
   const [selectedBrands, setSelectedBrands] = useState([]);

const [selectedColor, setSelectedColor] = useState('');
const [selectedSize, setSelectedSize] = useState('');
const [selectedPrice, setSelectedPrice] = useState('');

const filteredItems = womenSuitSalwar.filter((item) => {
  const matchesBrand = selectedBrands.length ? selectedBrands.includes(item.brand) : true;
  const matchesColor = selectedColor ? item.colors?.toLowerCase().includes(selectedColor.toLowerCase()) : true;
  const matchesSize = selectedSize ? item.sizes?.includes(selectedSize) : true;
  const matchesPrice = selectedPrice ? (() => {
    const [min, max] = selectedPrice.split('-').map(Number);
    return item.price >= min && item.price <= max;
  })() : true;

  return matchesBrand && matchesColor && matchesSize && matchesPrice;
});



  return (
    <div>
        <AmazonFashionNavbar/>
        <div className='flex flex-col md:flex-row'>
           <aside className='w-56 mx-4'>
  <h1 className='text-sm font-semibold'>Category</h1>
  <Link to="/allAccessories" className="flex items-center text-sm mb-1">
    <IoIosArrowBack />
    <span className="ml-1">Clothing & Accessories</span>
  </Link>
  <Link to="/clothing" className="flex items-center text-sm mb-1">
    <IoIosArrowBack />
    <span className="ml-1">Women</span>
  </Link>
  <Link to="/women/ethnic-wear" className="flex items-center text-sm mb-1">
    <IoIosArrowBack />
    <span className="ml-1">Ethnic Wear</span>
  </Link>
  <h1 className='text-sm mx-2 font-bold'>Salwar Suits</h1>

  {/* Filters */}
  <div className='space-y-3'>
    {/* Brand Filter */}
   
<div>
  <h2 className='font-semibold text-sm mb-1'>Brand</h2>
  {[...new Set(womenSuitSalwar.map((i) => i.brand))].map((brand, idx) => (
    <label key={idx} className="flex items-center text-sm space-x-2 mb-1">
      <input
        type="checkbox"
        value={brand}
        checked={selectedBrands.includes(brand)}
        onChange={(e) => {
          const isChecked = e.target.checked;
          setSelectedBrands((prev) =>
            isChecked ? [...prev, brand] : prev.filter((b) => b !== brand)
          );
        }}
      />
      <span>{brand}</span>
    </label>
  ))}
</div>


   
   {/* Color Filter */}
<div>
  <h2 className='font-semibold text-sm mb-1'>Color</h2>
  <div className='flex flex-wrap gap-2'>
    {[...new Set(
      womenSuitSalwar.flatMap((i) =>
        i.colors ? i.colors.split(',').map((c) => c.trim()) : []
      )
    )].map((color, idx) => (
      <button
        key={idx}
        onClick={() => setSelectedColor(color === selectedColor ? '' : color)}
        className={`w-6 h-6 rounded-full border border-gray-400 hover:ring-2 hover:ring-black transition 
          ${selectedColor === color ? 'ring-2 ring-black scale-110' : ''}`}
        style={{ backgroundColor: color.toLowerCase() }}
        title={color}
      />
    ))}
  </div>
</div>


   {/* Size Filter */}
<div>
  <h2 className='font-semibold text-sm mb-1'>Size</h2>
  <div className='flex flex-wrap gap-2'>
    {[...new Set(
      womenSuitSalwar.flatMap((i) =>
        i.sizes ? i.sizes.map((s) => s.trim()) : []
      )
    )].map((size, idx) => (
      <button
        key={idx}
        onClick={() => setSelectedSize(size === selectedSize ? '' : size)}
        className={`border px-2 py-1 text-xs rounded 
          ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}
      >
        {size}
      </button>
    ))}
  </div>
</div>


  {/* Price Filter */}
<div>
  <h2 className='font-semibold text-sm mb-1'>Price</h2>
  <div className='flex flex-col space-y-1'>
    {[
      { label: 'Under ₹999', value: '0-999' },
      { label: '₹1000 - ₹1999', value: '1000-1999' },
      { label: '₹2000 - ₹2999', value: '2000-2999' },
      { label: '₹3000 & Above', value: '3000-9999' },
    ].map(({ label, value }) => (
      <button
        key={value}
        onClick={() => setSelectedPrice(value === selectedPrice ? '' : value)}
        className={`text-sm text-left px-2 py-1 rounded border 
          ${selectedPrice === value ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}`}
      >
        {label}
      </button>
    ))}
  </div>
  <button
  className="mt-4 text-sm text-red-500 underline"
  onClick={() => {
    setSelectedBrands([]);
    setSelectedColor('');
    setSelectedSize('');
    setSelectedPrice('');
  }}
>
  Reset Filters
</button>

</div>

  </div>
</aside>


            <main className='w-full bg-gray-200'>
                <div className='mx-4 mt-4'>
                    <img src="https://m.media-amazon.com/images/G/31/img23/WA/2024/july/HOTW/mob._CB568761755_.png" alt="1" />
                </div>

                {/* brand  */}
                <div className=' mx-4 mt-4'>
                    <img src="https://m.media-amazon.com/images/G/31/img21/MA2023/HOTW/HEADERS2024/Brand_in_focus_PC._CB553737515_.jpg" alt="brand" />

                    <div className='flex overflow-x-auto scrollbar-hide  bg-orange-500 py-4 mt-4 '>
                        <div className='w-44 flex mx-4 gap-1'>

                        <img src="https://m.media-amazon.com/images/G/31/img23/WA/2024/july/HOTW/libas_400x200._CB568761547_.png" alt="1" />
                        <img src="https://m.media-amazon.com/images/G/31/img23/WA/2024/july/HOTW/janasya_400x200._CB568761547_.png" alt="2" />
                        <img src="https://m.media-amazon.com/images/G/31/img23/WA/2024/july/HOTW/biba_400x200._CB568761547_.png" alt="3" />
                        <img src="https://m.media-amazon.com/images/G/31/img23/WA/2024/july/HOTW/aurelia_400x200._CB568761547_.png" alt="4" />
                        <img src="https://m.media-amazon.com/images/G/31/img23/WA/2024/july/HOTW/w_400x200._CB568761547_.png" alt="5" />
                        <img src="https://m.media-amazon.com/images/G/31/img23/WA/2024/july/HOTW/anubutee_400x200._CB568761547_.png" alt="6" />
                        </div>
                    </div>
                     {/* top styles  */}
                    <img src="https://m.media-amazon.com/images/G/31/img21/MA2023/HOTW/HEADERS2024/Top_styles_pc._CB553737515_.jpg" alt="7" className='mt-4' />

                    <div className='overflow-x-auto scrollbar-hide'>
                        <div className='flex w-64  mx-4 mt-4 gap-2'>

                        <img src="https://m.media-amazon.com/images/G/31/img23/WA/2024/july/HOTW/printed_981x1220.png" alt="printed" />
                        <img src="https://m.media-amazon.com/images/G/31/img23/WA/2024/july/HOTW/ceremony_981x1220.png" alt="caremony" />
                        <img src="https://m.media-amazon.com/images/G/31/img23/WA/2024/july/HOTW/sharara_981x1220.png" alt="sharara" />
                        <img src="https://m.media-amazon.com/images/G/31/img23/WA/2024/july/HOTW/aline_981x1220.png" alt="A-line" />
                        </div>
                    </div>
                </div>

                {/* main Itmes  */}

                <section className=' mt-4'>
                       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-2 mt-4">
                            {filteredItems.map((item,index)=>(
                                <div key={index}  onClick={() => navigate(`/offline-product/${item.id}`)} className='flex border rounded-lg bg-white items-center justify-center'>
                                    <img src={item.image} alt="" className='w-44 h-56 cursor-pointer' />
                <div className="p-4">
                                    <p className="font-medium text-sm mb-1">{item.brand}</p>
                                    <p className="text-sm mb-2">{item.description.slice(0,60)}...</p>
                
                                    <div className="flex items-center space-x-2 mb-2">
                                      <p className="text-lg font-semibold text-black">₹{item.price}</p>
                                      <p className="line-through text-gray-500 text-sm">₹{item.MRP}</p>
                                      <p className="text-green-600 text-sm">{item.discount}% Off</p>
                                    </div>
                
                                   
                                    {/* Colors */}
                {/* Colors */}
                {item.colors && (
                  <div className='flex gap-1'>
                    <p className="text-sm text-gray-700 font-semibold mb-1">Color:</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {item.colors.split(',').map((color, i) => (
                        <div
                          key={i}
                          title={color}
                          className="w-5 h-5 rounded-full border border-gray-300"
                          style={{ backgroundColor: color.toLowerCase() }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}
                
                  
                   
                 
                
                
                                  </div>
                                </div>
                            ))}
                        </div>
                    </section>
            </main>
        </div>
    </div>
  )
}

export default SalwarSuits