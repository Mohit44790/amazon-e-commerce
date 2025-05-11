import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router';
import AmazonFasionNavbar from '../MensCollection/AmazonFashionNavbar';
import { BestDresses, CELEBAPPROVED, ETHNICWEAR, INDIEBRAND, Mostcovered, TredingTops, westerwear, womenFashion } from '../../Data/AllTypesAcccessories';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from "lodash";
import { getFilteredProducts } from '../../redux/slice/productSlice';
const WomenClothes = () => {
  // const scrollRef = useRef();
  const dispatch = useDispatch();

  const fashionRef = useRef();
const celebRef = useRef();
const trendingRef = useRef();
const dressesRef = useRef();
 const { items: products, loading, error } = useSelector((state) => state.products);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [filters, setFilters] = useState({
    main: "",
    parent: "",
    category: "women-fashion,women-clothes",
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

  // single scroll function

  // const scroll = (direction) => {
  //   if (scrollRef.current) {
  //     const scrollAmount = scrollRef.current.offsetWidth / 2;
  //     scrollRef.current.scrollBy({
  //       left: direction === 'left' ? -scrollAmount : scrollAmount,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  //multiple scroll function
  const handleScroll = (ref, direction) => {
  if (ref.current) {
    const scrollAmount = ref.current.offsetWidth / 2;
    ref.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }
};

  return (
    <div className=''>
      <AmazonFasionNavbar />

      <div className="flex  flex-col  lg:flex-row">
        {/* Left Sidebar */}
        <div className=" border-r w-72 px-4 py-2">
          <p className="text-sm font-semibold mb-1">Category</p>
          <Link to="/allAccessories" className="flex items-center text-sm mb-2">
            <IoIosArrowBack />
            <span className="ml-1">Clothing & Accessories</span>
          </Link>

          <p className="text-sm font-semibold mb-2">Women</p>
          <ul className="text-sm space-y-1 mb-4">
            {[
              'Ethnic Wear', 'Western Wear', 'Sportswear', 'Lingerie',
              'Sleep & Lounge Wear', 'Accessories', 'Swim & Beachwear',
              'Maternity', 'Sunglasses & Spectacle Frames', 'Lingerie & Nightwear'
            ].map((item, i) => (
              <Link to="#" key={i}><li className='hover:text-red-600'>{item}</li></Link>
            ))}
          </ul>

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
           
            <h1 className="font-bold text-sm mb-1">Price</h1>
            <div className="flex gap-2">
              <input type="number" name="minPrice" placeholder="Min" onChange={handleChange} className="border p-1 w-1/2 text-xs" />
              <input type="number" name="maxPrice" placeholder="Max" onChange={handleChange} className="border p-1 w-1/2 text-xs" />
            </div>
          
            <ul className="text-sm space-y-1">
              {['Under ₹300', '₹300 - ₹500', '₹500 - ₹1,000', '₹1,000 - ₹1,500', 'Over ₹1,500'].map((price, i) => (
                <Link to="#" key={i}><li>{price}</li></Link>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Customer Reviews</h1>
            <p>* * * * * & up</p>
          </div>

          <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Deals & Discounts</h1>
            <Link to="#"><p>All Discounts</p></Link>
            <Link to="#"><p>Today's Deals</p></Link>
          </div>

          <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Amazon Fashion</h1>
            {['Top Brands', 'Made for Amazon', 'Premium Brands'].map((label, i) => (
              <p key={i}><input type="checkbox" className="mr-2" />{label}</p>
            ))}
          </div>

          <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Women's Clothing Size</h1>
            <div className="grid grid-cols-4 gap-2 text-xs">
              {['5XS', '2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL', '8XL', '9XL', 'Free'].map((size, i) => (
                <Link key={i}><p className="border rounded-lg text-center py-1">{size}</p></Link>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Color</h1>
            <div className="grid grid-cols-4  text-xs">
  {[
    'red',
    'blue',
    'green',
    'lime',
    'magenta',
    'white',
    'gray',
    'yellow',
    'pink',
    'orange',
    'silver',
    'purple',
    'brown',
    'black',
  ].map((color) => (
    <button
      key={color}
      name="colors"
      value={color}
      onClick={handleChange}
      className={`border  text-center py-1 text-white ${
        color === 'white' || color === 'silver' ? 'text-black' : ''
      }`}
      style={{ backgroundColor: color }}
    >
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  ))}
</div>

          </div>
          
        </div>
{/* Right scrollable content */}
<div className='bg-gray-200 w-full'>

  {/* women fashion banner  */}
<div className="relative bg-white mx-4  mt-4 ">
          <button
            className="absolute left-0 top-20 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-1 md:p-2 rounded-full"
            onClick={() => handleScroll(fashionRef,'left')}
          >
            <IoIosArrowBack size={20} className="md:size-6" />
          </button>

          <div className="overflow-x-auto  no-scrollbar flex gap-4 py-4" ref={fashionRef}>
            {womenFashion.map((cat, index) => (
              <div key={index} className="text-center flex-shrink-0">
                <img src={cat.img} alt={cat.label} className="w-28 h-28 sm:w-32 sm:h-32 mx-auto object-contain" />
                <p className="mt-2 text-sm">{cat.label}</p>
              </div>
            ))}
          </div>

          <button
            className="absolute right-0 top-20 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-1 md:p-2 rounded-full"
            // onClick={() => scroll('right')}
            onClick={() => handleScroll(fashionRef,'right')}
          >
            <IoIosArrowForward size={20} className="md:size-6" />
          </button>
        </div>

        {/* poster  */}
        <div className='mx-4 mt-2'>

        <img src="https://m.media-amazon.com/images/G/31/img2020/fashion/WomensApparel2024/AmazonKarigar_1500x460._CB796150745_.jpg" alt="womenposter" />
        </div>

{/* WESTERN WEAR MUST-HAVES */}
<div className='bg-white  mx-4 mt-2'>

  <h1 className='text-xl font-bold py-2 px-4'>WESTERN WEAR MUST-HAVES</h1>
  <div className='flex gap-2 mx-4 '>
  {westerwear.map((wear,index)=>(
            <div key={index}>
              <img src={wear.image} alt={wear.name} />
            
            </div>
          ))}
  </div>
          
        </div>
{/* ETHNIC WEAR MUST-HAVES */}
<div className='bg-white  mx-4 mt-2'>

  <h1 className='text-xl font-bold py-2 px-4'>ETHNIC WEAR MUST-HAVES</h1>
  <div className='flex gap-2 mx-4 '>
  {ETHNICWEAR.map((wear,index)=>(
            <div key={index}>
              <img src={wear.image} alt={wear.name} />
            
            </div>
          ))}
  </div>
          
        </div>
{/* Most-Coveted Brands */}
<div className='bg-white  mx-4 mt-2'>

  <h1 className='text-xl font-bold py-2 px-4'>Most-Coveted Brands</h1>
  <div className='flex gap-2 mx-4 '>
  {Mostcovered.map((wear,index)=>(
            <div key={index}>
              <img src={wear.image} alt={wear.name} />
            
            </div>
          ))}
  </div>
          
        </div>
        {/* CELEB-APPROVED BRANDS ✅ */}
        <div className="relative bg-white mx-4  mt-4 ">
          <h1 className='mx-4 font-bold py-1'>CELEB-APPROVED BRANDS ✅</h1>
          <button
            className="absolute left-0 top-36 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-1 md:p-2 rounded-full"
            // onClick={() => scroll('left')}
            onClick={() => handleScroll(celebRef, 'left')}
          >
            <IoIosArrowBack size={20} className="md:size-6" />
          </button>

          <div className="overflow-x-auto  no-scrollbar flex gap-4 py-4" ref={celebRef}>
            {CELEBAPPROVED.map((cat, index) => (
              <div key={index} className="text-center flex-shrink-0">
                <img src={cat.image} alt={cat.label} className=" w-80 mx-auto object-contain" />
                <p className="mt-2 text-sm">{cat.label}</p>
              </div>
            ))}
          </div>

          <button
            className="absolute right-0 top-36 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-1 md:p-2 rounded-full"
            // onClick={() => scroll('right')}
            onClick={() => handleScroll(celebRef, 'right')}
          >
            <IoIosArrowForward size={20} className="md:size-6" />
          </button>
        </div>
        {/* INDIE-BRAND FAVES 🙏*/}
<div className='bg-white  mx-4 mt-2'>

  <h1 className='text-xl font-bold py-2 px-4'>INDIE-BRAND FAVES 🙏 ✅</h1>
  <div className='grid grid-cols-6 gap-10 mx-8  '>
  {INDIEBRAND.map((wear,index)=>(
            <div key={index} >
              <img src={wear.image} alt={wear.name} />
            
            </div>
          ))}
  </div>

   {/* #TRENDING TOPS & TEES 👚 */}
<div className="relative bg-yellow-400 mx-4  mt-4 ">
  <h1>#TRENDING TOPS & TEES 👚</h1>
          <button
            className="absolute left-0 top-24 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-1 md:p-2 rounded-full"
            // onClick={() => scroll('left')}
            onClick={() => handleScroll(trendingRef, 'left')}
          >
            <IoIosArrowBack size={20} className="md:size-6" />
          </button>

          <div className="overflow-x-auto  no-scrollbar flex gap-4 py-4" ref={trendingRef}>
            {TredingTops.map((cat, index) => (
              <div key={index} className="text-center flex-shrink-0">
                <img src={cat.image} alt={cat.label} className=" w-32 mx-auto object-contain" />
                <p className="mt-2 text-sm">{cat.label}</p>
              </div>
            ))}
          </div>

          <button
            className="absolute right-0 top-24 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-1 md:p-2 rounded-full"
            onClick={() => handleScroll(trendingRef, 'right')}
          >
            <IoIosArrowForward size={20} className="md:size-6" />
          </button>
        </div>
   {/* BEST OF DRESSES & JUMPSUITS 👗 */}
<div className="relative bg-pink-200 mx-4   mt-4 ">
  <h1>BEST OF DRESSES & JUMPSUITS 👗</h1>
          <button
            className="absolute left-0 top-28 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-1 md:p-2 rounded-full"
            onClick={() => handleScroll(dressesRef, 'left')}
          >
            <IoIosArrowBack size={20} className="md:size-6" />
          </button>

          <div className="overflow-x-auto  no-scrollbar  flex gap-4 py-10" ref={dressesRef}>
            {BestDresses.map((cat, index) => (
              <div key={index} className="text-center flex-shrink-0">
                <img src={cat.image} alt={cat.label} className=" w-32 mx-auto object-contain" />
                <p className="mt-2 text-sm">{cat.label}</p>
              </div>
            ))}
          </div>

          <button
            className="absolute right-0 top-28 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-1 md:p-2 rounded-full"
            onClick={() => handleScroll(dressesRef, 'right')}
          >
            <IoIosArrowForward size={20} className="md:size-6" />
          </button>
        </div>
          
        </div>
        
        {/* Product Display */}
                {/* Product Display */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
  {loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    filteredProducts.map((product) => (
      <Link to={`/product/${product._id}`} key={product._id}>
        <div className="border p-2 bg-white  rounded hover:shadow-md transition duration-200">
          <img
            src={product?.images[0]}
            alt={product.title}
            className="h-80 w-full object-cover"
          />
          <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
          <p className="text-xs text-gray-500">{product?.brand?.name}</p>
          <p className="text-sm font-bold text-red-600">₹{product.price}</p>
          <p className="text-sm">{product.description?.substring(0, 35)}...</p>
        </div>
      </Link>
    ))
  )}
</div>

        

        </div>
      </div>
       
       
    </div>
  );
};

export default WomenClothes;
