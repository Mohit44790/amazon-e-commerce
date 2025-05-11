import React, { useEffect, useState } from 'react'
import AmazonFasionNavbar from './AmazonFashionNavbar'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from "lodash";
import { getFilteredProducts } from '../../redux/slice/productSlice'


const Jeans = () => {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [filters, setFilters] = useState({
    main: "",
    parent: "men-fashion",
    category: "t-shirts",
    brand: "",
    minPrice: "",
    maxPrice: "",
    colors: "",
    sizes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value.trim() }); // Trim the value
  };
const debouncedDispatch = debounce(() => {
    dispatch(getFilteredProducts(filters));
  }, 500);

   useEffect(() => {
      debouncedDispatch();
      return () => debouncedDispatch.cancel();
    }, [filters]);
  const brands = ['All', ...new Set(products.map((product) => product.brand?.name).filter(Boolean))];

  const filteredProducts = products.filter((product) => {
    if (selectedBrand && selectedBrand !== 'All' && product.brand?.name !== selectedBrand) return false;
    return true;
  });
  return (
    <div>
        <AmazonFasionNavbar/>
        <div className='flex mx-4'>
            {/* left side  */}
            <div className='w-72'>
           <h1 className='font-bold text-sm'>Category</h1>
          <Link to="/allAccessories" className="flex items-center text-sm mb-1">
                      <IoIosArrowBack />
                      <span className="ml-1">Clothing & Accessories</span>
                    </Link>
          <Link to="/Men" className="flex items-center text-sm ">
                      <IoIosArrowBack />
                      <span className="ml-1">Men</span>
                    </Link>

                    <h1 className='font-bold px-4 text-sm'>Jeans</h1>

                    <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Amazon Prime</h1>
            <label><input type="checkbox" className="mr-2" />Prime</label>
          </div>

          <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Delivery Day</h1>
            <label><input type="checkbox" className="mr-2" />Get It by Tomorrow</label>
          </div>
          <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Brands</h1>
            {/* <input type="text" name="brand" onChange={handleChange} className="border p-1 w-full text-xs" placeholder="Search brand" /> */}
            <div className="mt-2 space-y-1">
              {brands.map((brand, index) => (
                <label key={index} className="flex items-center text-xs">
                  <input
                    type="checkbox"
                    name="brands"
                    value={brand}
                    checked={selectedBrand === brand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="mr-2"
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Sizes</h1>
            <div className="grid grid-cols-4 gap-2 text-xs">
              {['5XS', '2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL', '8XL', '9XL', 'Free'].map((size) => (
                <button
                  key={size}
                  name="sizes"
                  value={size}
                  onClick={handleChange}
                  className="border border-black text-xs rounded-lg text-center py-1"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
            </div>

            {/* right side  */}
            <div className='w-full bg-gray-200'>
                <img src="https://m.media-amazon.com/images/G/31/img21/MA2024/Feb/Denimstore/Mens_dekstopBAU.jpg" alt="Mens" />
                {/* TRENDS TO BAG */}
                <div className='bg-white py-8 mt-4 mx-4' >
                  <h1 className='py-1 px-4 mb-2 font-semibold text-xl'>TRENDS TO BAG</h1>
                  <div className='flex w-56'>
                    <img src="https://m.media-amazon.com/images/G/31/img21/MA2024/Feb/Denimstore/Store/trendstobag/Double_denim._SS620_QL85_.jpg" alt="top" />
                    <img src="https://m.media-amazon.com/images/G/31/img21/MA2024/Feb/Denimstore/Store/trendstobag/Oversized_Fits._SS620_QL85_.jpg" alt="top1" />
                    <img src="https://m.media-amazon.com/images/G/31/img21/MA2024/Feb/Denimstore/Store/trendstobag/Oversized_Fits_copy._SS620_QL85_.jpg" alt="top2" />
                    <img src="https://m.media-amazon.com/images/G/31/img21/MA2024/Feb/Denimstore/Store/trendstobag/Oversized_Fits_copy_2._SS620_QL85_.jpg" alt="top3" />
                  </div>
                </div>
                 {/* Product Display */}
          <div className="grid grid-cols-4 gap-4 p-4">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              filteredProducts.map((product) => (
             <Link
                         to={`/product/${product._id}`}>   <div key={product._id} className="border p-2 bg-white rounded">
                  <img src={product?.images[0]} alt={product.title} className="h-56 w-full object-contain" />
                  <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
                  <p className="text-xs text-gray-500">{product?.brand?.name}</p>
                  <p className="text-sm font-bold">₹{product.price}</p>
                  <p className="text-sm ">{product.description?.substring(0,35)}...</p>
                 
                </div>
                </Link>
              ))
            )}
          </div>
            </div>
        </div>

    </div>
  )
}

export default Jeans