import React, { useEffect, useState } from 'react'
import AmazonFashionNavbar from './AmazonFashionNavbar'
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from "lodash";
import { getFilteredProducts } from '../../redux/slice/productSlice';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const MenTrousers = () => {
 const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);
  const [selectedBrand, setSelectedBrand] = useState("All");
    const [filters, setFilters] = useState({
        main: "",
        parent: "",
        category: "trousers",
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
        <AmazonFashionNavbar/>

      <div className="flex flex-col md:flex-row mx-4 border-r gap-2">
         <div className='lg:w-64'>
          <h1 className='font-bold text-sm'>Category</h1>
          <Link to="/allAccessories" className="flex items-center text-sm mb-1">
           
            <span className="mt-1">Clothing & Accessories</span>
          </Link>
          <Link to="/shirts" className="flex items-center text-sm mb-1">
           <IoIosArrowBack />
            <span className="  font-bold">Men</span>
          </Link>
          <div className='px-6 text-sm'>
           
            <Link to="/m-trousers"><p>Trousers</p></Link>
            <Link to="/m-trousers"><p> Casual Trousers</p></Link>
            <Link to="/m-trousers"><p> Formal Trousers</p></Link>
           

           
          </div>
          <div className="mb-1">
            <h1 className="font-bold text-sm mb-1">Amazon Prime</h1>
            <label><input type="checkbox" className="mr-2" />Prime</label>
          </div>

          <div className="mb-1">
            <h1 className="font-bold text-sm mb-1">Delivery Day</h1>
            <label><input type="checkbox" className="mr-2" />Get It by Tomorrow</label>
          </div>
          {/* brands  */}
          <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Brands</h1>
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

          {/* prices  */}
          <div className="mb-4">
  <h1 className="font-bold text-sm mb-1">Price</h1>

  {/* Manual Price Inputs */}
  {/* <div className="flex gap-2 mb-2">
    <input
      type="number"
      name="minPrice"
      placeholder="Min"
      onChange={handleChange}
      className="border p-1 w-1/2 text-xs"
    />
    <input
      type="number"
      name="maxPrice"
      placeholder="Max"
      onChange={handleChange}
      className="border p-1 w-1/2 text-xs"
    />
  </div> */}

  {/* Predefined Price Ranges */}
  <ul className="text-sm space-y-1">
    {[
      { label: 'Under ₹300', min: '', max: '300' },
      { label: '₹300 - ₹500', min: '300', max: '500' },
      { label: '₹500 - ₹1,000', min: '500', max: '1000' },
      { label: '₹1,000 - ₹1,500', min: '1000', max: '1500' },
      { label: 'Over ₹1,500', min: '1500', max: '' },
    ].map((range, i) => (
      <li key={i}>
        <button
          type="button"
          className="hover:underline"
          onClick={() => {
            setFilters((prev) => ({
              ...prev,
              minPrice: range.min,
              maxPrice: range.max,
            }));
          }}
        >
          {range.label}
        </button>
      </li>
    ))}
  </ul>
</div>
{/* Customer Reviews  */}
<div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Customer Reviews</h1>
            <p><span className='text-yellow-500 text-2xl'>★★★★☆</span> & up</p>
          </div>
          {/* sizes  */}
          <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Sizes</h1>
            <div className="grid grid-cols-4 gap-2 text-xs">
              {['5XS', '2XS', 'XS', 'S','32', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL', '8XL', '9XL', 'Free'].map((size) => (
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
          {/* colors  */}
        <div className="mb-4">
  <h1 className="font-bold text-sm mb-1">Color</h1>
  <div className="grid grid-cols-4 gap-2">
    {[
      'Red', 'Blue', 'Green', 'Lime', 'Magenta', 'White', 'Gray',
      'Yellow', 'Pink', 'Orange', 'Silver', 'Purple', 'Brown', 'Black'
    ].map((color) => (
      <button
        key={color}
        name="colors"
        value={color}
        onClick={(e) => {
          e.preventDefault();
          setFilters((prev) => ({
            ...prev,
            colors: color === filters.colors ? '' : color, // toggle color filter
          }));
        }}
        className={`w-6 h-6 rounded-full border ${
          filters.colors === color ? 'ring-2 ring-black' : ''
        }`}
        style={{ backgroundColor: color }}
        title={color.charAt(0).toUpperCase() + color.slice(1)} // optional: hover tooltip
      />
    ))}
  </div>
</div>

        </div>
        <main className='w-full'>
            <section>
                <img src="https://m.media-amazon.com/images/G/31/img24/MA/HOTW/TopBanner/Trousers_1236x556._CB570220401_.png" alt="1" />
                {/* brand focus  */}
                <img src="https://m.media-amazon.com/images/G/31/img21/MA2023/HOTW/HEADERS2024/Brand_in_focus_PC._CB553737515_.jpg" alt="2" />
            </section>
            {/* shop by categorys  */}
            <section className='bg-[#fff1d8]'>
                <img src="https://m.media-amazon.com/images/G/31/img21/MA2023/HOTW/HEADERS2024/SBC_MB._CB553737515_.jpg" alt="categorys" />

                <div className='flex  w-40 gap-8 '>
                    <img src="https://m.media-amazon.com/images/G/31/img21/MA2024/HOTW/SBC/Casual_trousers_434x611._SS400_QL85_FMpng_.png" alt="1" />
                    <img src="https://m.media-amazon.com/images/G/31/img21/MA2024/HOTW/SBC/Jeans_434x611._SS400_QL85_FMpng_.png" alt="2" />
                    <img src="https://m.media-amazon.com/images/G/31/img21/MA2024/HOTW/SBC/Cargos_434x611._SS400_QL85_FMpng_.png" alt="3" />
                    <img src="https://m.media-amazon.com/images/G/31/img21/MA2024/HOTW/SBC/Formal_Trousers_434x611._SS400_QL85_FMpng_.png" alt="4" />
                </div>
            </section>
            <section className="p-4">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {filteredProducts.map((item, index) => (
      <div key={index} className="bg-white border rounded shadow p-2">
      <Link to={`/product/${item._id}`}>  <img
          src={item.images?.[0]}
          alt={item.description}
          className="w-full h-60 object-contain"
        /></Link> 
        <p className="text-sm font-bold mt-2">₹{item.price}</p>
        <p className="text-xs text-red-600">{item.discount}% off</p>
        <p className="text-sm line-clamp-2">{item.description}</p>
        {Array.isArray(item.colors)
          ? item.colors.map((color, idx) => (
              <div
                key={idx}
                className="w-4 h-4  rounded-full border mt-1 inline-block"
                style={{
                  backgroundColor: color,
                  borderColor: color === 'white' ? '#ccc' : color,
                }}
              ></div>
            ))
          : null}
      </div>
    ))}
  </div>
</section>

        </main>
       

        </div>
    </div>
  )
}

export default MenTrousers