import React, { useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { electronics, electronicsItems, products } from '../Data/DataProduct';
import { useNavigate } from 'react-router';





const ProductCollection = () => {
  const navigate = useNavigate();
  const scrollRef = useRef();
  const gadgetsscrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300, // adjust scroll step here
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };
  const gadgetsscrollLeft = () => {
    gadgetsscrollRef.current.scrollBy({
      left: -300, // adjust scroll step here
      behavior: 'smooth',
    });
  };

  const gadgetsscrollRight = () => {
    gadgetsscrollRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };
  const [selectedImages, setSelectedImages] = useState(
    electronics.map((product) => product.image[0])
  );

  const handleImageClick = (productIndex, imgUrl) => {
    const updated = [...selectedImages];
    updated[productIndex] = imgUrl;
    setSelectedImages(updated);
  };

  const goToProductDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
   <>
    <div className="relative mx-6 bg-white  my-6 px-4">
        <div className='flex gap-4 items-center  py-2'>

      <h1 className="text-xl font-semibold  ">Additional items to explore</h1> <span className='text-sm'>see more</span>
        </div>

      {/* Scroll Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/40 p-2 rounded-full text-white hover:bg-black/60"
        onClick={scrollLeft}
      >
        <IoIosArrowBack size={30} />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/40 p-2 rounded-full text-white hover:bg-black/60"
        onClick={scrollRight}
      >
        <IoIosArrowForward size={30} />
      </button>

      {/* Image Row */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth py-2"
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="min-w-[140px] h-[250px] flex-shrink-0 bg-white shadow rounded-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={`product-${index}`}
              onClick={() => goToProductDetail(product.id)}

              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    <div className="relative mx-6 bg-white  my-6 px-4">
        <div className='flex gap-4 items-center  py-2'>

      <h1 className="text-xl font-semibold  ">Related to items you've viewed</h1> <span className='text-sm'>see more</span>
        </div>

      {/* Scroll Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/40 p-2 rounded-full text-white hover:bg-black/60"
        onClick={gadgetsscrollLeft}
      >
        <IoIosArrowBack size={30} />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/40 p-2 rounded-full text-white hover:bg-black/60"
        onClick={gadgetsscrollRight}
      >
        <IoIosArrowForward size={30} />
      </button>

      {/* Image Row */}
      <div
        ref={gadgetsscrollRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth py-2"
      >
        {electronicsItems.map((gadgets, index) => (
          <div
            key={gadgets.id}
            className="min-w-[140px] h-[250px] flex-shrink-0 bg-white shadow rounded-md overflow-hidden"
          >
           

            <img
              src={gadgets.image}
              alt={`product-${index}`}
              onClick={() => goToProductDetail(gadgets.id)}


              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>

    {/* your section visitlast time */}
    <div className='flex gap-2 justify-between mx-6'>
     {/* Section 3 - All Electronics Products */}
     <div className=" my-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {electronics.slice(0,3).map((product, idx) => (
          <div key={product.id} className="bg-white p-4 w-72 rounded-md shadow-md">
            <h2 className="font-semibold text-lg mb-2" >{product.brand}</h2>
            <img
              src={selectedImages[idx]}
              alt={`product-main-${idx}`}
              onClick={() => goToProductDetail(product.id)}
              className="w-full h-40 cursor-pointer object-contain mb-2"
            /> <p className="text-xs text-gray-700 mt-2 line-clamp-2">
            {product.description}
          </p>
          <p className="text-sm mt-1">Price: ₹{product.price}</p>
          <p className="text-sm text-gray-500">M.R.P: ₹{product.mrp}</p>
    
            <div className="flex gap-2 overflow-x-auto">
              {/* {product.image.map((imgUrl, i) => (
                <img
                  key={i}
                  src={imgUrl}
                  alt={`thumb-${i}`}
                  onClick={() => handleImageClick(idx, imgUrl)}
                  className={`w-16 h-16 object-contain border rounded cursor-pointer ${
                    selectedImages[idx] === imgUrl ? 'border-blue-500' : 'border-gray-300'
                  }`}
                />
              ))} */}
            </div>
          <button className="mt-2 text-blue-600 hover:underline">See more</button>
            
          </div>
        ))}
      </div>
    <div className="bg-white mx-4 w-full sm:w-[48%] lg:w-[23%] p-4 rounded-md shadow-md">

<h2 className="font-semibold text-lg mb-2">Appliances for your home | Up to 55% off</h2>
<div className="grid grid-cols-2 gap-2">

   
    <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="" className="w-full h-28 object-contain" />  
    <p className="text-xs text-center">
    Air conditioners</p>
    
    </div>
    <div> <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="" className="w-full h-28 object-contain" />
    <p className="text-xs text-center">Refrigerators</p>
    
    </div>
    <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="" className="w-full h-28 object-contain" />
    <p className="text-xs text-center">Cushion Covers</p>
    
    </div> 
    <div> <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" alt="" className="w-full h-28 object-contain" />
    <p className="text-xs text-center">Cushion Covers</p>
    
    </div>
</div>
<button className="mt-2 text-blue-600 hover:underline">See more</button>
</div>

    </div>
   </>
  );
};

export default ProductCollection;
