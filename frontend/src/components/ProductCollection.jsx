import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { electronics, electronicsItems } from '../Data/DataProduct';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slice/productSlice';

const ProductCollection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const scrollRef = useRef();
  const gadgetsscrollRef = useRef();
  const { items: products, loading, error } = useSelector((state) => state.products);

  const [selectedImages, setSelectedImages] = useState(
    electronics.map((product) => product.image[0])
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const scroll = (ref, direction) => {
    ref.current.scrollBy({ left: direction * 300, behavior: 'smooth' });
  };

  const handleImageClick = (productIndex, imgUrl) => {
    const updated = [...selectedImages];
    updated[productIndex] = imgUrl;
    setSelectedImages(updated);
  };

  const goToProductDetail = (id) => navigate(`/product/${id}`);

  if (loading) return <ProductCollectionSkeleton />;
  if (error) return <p className="text-red-500 text-center py-4">{error}</p>;

  

  return (
    <div className="px-4 py-6 space-y-8">
      {/* Section 1: Additional Items */}
      <ProductScrollSection
        title="Additional items to explore"
        products={products}
        scrollRef={scrollRef}
        scroll={scroll}
        goToProductDetail={goToProductDetail}
      />

      {/* Section 2: Related Items */}
      <ProductScrollSection
        title="Related to items you've viewed"
        products={electronicsItems}
        scrollRef={gadgetsscrollRef}
        scroll={scroll}
        goToProductDetail={goToProductDetail}
        isStaticData
      />

      {/* Section 3: Last Visited */}
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {electronics.slice(0, 3).map((product, idx) => (
            <div key={product.id} className="bg-white p-4 w-full rounded-md shadow-md">
              <h2 className="font-semibold text-lg mb-2">{product.brand}</h2>
              <img
                src={selectedImages[idx]}
                alt={`product-main-${idx}`}
                onClick={() => goToProductDetail(product.id)}
                className="w-full h-40 cursor-pointer object-contain mb-2"
              />
              <p className="text-xs text-gray-700 mt-2 line-clamp-2">{product.description}</p>
              <p className="text-sm mt-1">Price: ₹{product.price}</p>
              <p className="text-sm text-gray-500">M.R.P: ₹{product.mrp}</p>
              <button className="mt-2 text-blue-600 hover:underline">See more</button>
            </div>
          ))}
        </div>

        {/* Appliances Section */}
        <div className="bg-white w-full sm:w-[48%] lg:w-[23%] p-4 rounded-md shadow-md">
          <h2 className="font-semibold text-lg mb-2">Appliances for your home | Up to 55% off</h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              {
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
                label: "Air conditioners",
              },
              {
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
                label: "Refrigerators",
              },
              {
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
                label: "Cushion Covers",
              },
              {
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
                label: "Cushion Covers",
              },
            ].map(({ img, label }, index) => (
              <div key={index}>
                <img src={img} alt={label} className="w-full h-28 object-contain" />
                <p className="text-xs text-center">{label}</p>
              </div>
            ))}
          </div>
          <button className="mt-2 text-blue-600 hover:underline">See more</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;

const ProductScrollSection = ({ title, products, scrollRef, scroll, goToProductDetail, isStaticData = false }) => (
  <div className="relative bg-white px-4 py-4 rounded-md shadow-sm">
    <div className="flex justify-between items-center mb-3">
      <h1 className="text-xl font-semibold">{title}</h1>
      <span className="text-sm text-blue-600 cursor-pointer">See more</span>
    </div>
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 p-2 rounded-full text-white hover:bg-black/60"
      onClick={() => scroll(scrollRef, -1)}
    >
      <IoIosArrowBack size={30} />
    </button>
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 p-2 rounded-full text-white hover:bg-black/60"
      onClick={() => scroll(scrollRef, 1)}
    >
      <IoIosArrowForward size={30} />
    </button>

    <div
      ref={scrollRef}
      className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth py-2"
    >
      {products.map((product, index) => (
        <div key={product.id || product._id} className="min-w-[140px] h-[250px] flex-shrink-0 bg-white shadow rounded-md overflow-hidden">
          <img
            src={isStaticData ? product.image : product?.images?.[0] || '/placeholder.png'}
            alt={`product-${index}`}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => goToProductDetail(product.id || product._id)}
          />
         
        </div>
      ))}
    </div>
  </div>
);

const ProductCollectionSkeleton = () => (
  <div className="animate-pulse space-y-6 px-6 py-8">
    <div className="h-6 bg-gray-300 rounded w-1/3"></div>
    <div className="flex space-x-4 overflow-hidden">
      {[...Array(6)].map((_, idx) => (
        <div key={idx} className="min-w-[140px] h-[250px] bg-gray-300 rounded-md"></div>
      ))}
    </div>
    <div className="h-6 bg-gray-300 rounded w-1/3"></div>
    <div className="flex space-x-4 overflow-hidden">
      {[...Array(6)].map((_, idx) => (
        <div key={idx} className="min-w-[140px] h-[250px] bg-gray-300 rounded-md"></div>
      ))}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, idx) => (
        <div key={idx} className="bg-gray-300 h-[280px] w-full rounded-md"></div>
      ))}
    </div>
  </div>
);
