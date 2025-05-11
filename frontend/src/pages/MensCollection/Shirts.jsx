import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import AmazonFashionNavbar from './AmazonFashionNavbar'
import { Link } from 'react-router-dom'
import { Menfashion } from '../../Data/AllTypesAcccessories'
import { useDispatch, useSelector } from 'react-redux'
import { getFilteredProducts } from '../../redux/slice/productSlice'
import { debounce } from "lodash";

const Shirts = () => {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const scrollRef = useRef();
  const [filters, setFilters] = useState({
    main: "",
    parent: "",
    category: "men-fashion",
    brand: "",
    minPrice: "",
    maxPrice: "",
    colors: "",
    sizes: "",
  });

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollBy({
      left: scrollOffset,
      behavior: 'smooth',
    });
  };

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
      <AmazonFashionNavbar />
      <div className='flex mx-4 flex-col lg:flex-row'>
        {/* Left side */}
        <div className='lg:w-64'>
          <h1 className='font-bold text-sm'>Category</h1>
          <Link to="/allAccessories" className="flex items-center text-sm mb-1">
            <IoIosArrowBack />
            <span className="mt-1">Clothing & Accessories</span>
          </Link>
          <Link to="/Men" className="flex items-center text-sm mb-1">
            <span className="ml-1 px-3 font-bold">Men</span>
          </Link>
          <div className='px-6 text-sm'>
            <Link to="/t-shirts"><p>T-shirts, Polos & Shirts</p></Link>
            <Link to="/jeans"><p>Jeans</p></Link>
            <Link to=""><p>Trousers</p></Link>
            <Link to=""><p>Shorts</p></Link>
            <Link to=""><p>Suits & Blazers</p></Link>
            <Link to=""><p>Sportswear</p></Link>
            <Link to=""><p>Innerwear</p></Link>
            <Link to=""><p>Sleep & Lounge Wear</p></Link>
            <Link to=""><p>Accessories</p></Link>
            <Link to=""><p>Ethnic Wear</p></Link>
            <Link to=""><p>Swimwear</p></Link>
            <Link to=""><p>Rainwear</p></Link>
            <Link to=""><p>Unstitched Fabric</p></Link>
            <Link to=""><p>Sunglasses & Spectacle Frames</p></Link>
            <Link to=""><p>Winter Wear</p></Link>
          </div>
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
        </div>

        {/* Right side */}
        <div className='w-full'>
          {/* Scroll Banner */}
          <div className="relative w-full flex items-center">
            <button onClick={() => scroll(-300)} className="absolute left-0 z-10 bg-white/80 hover:bg-white shadow-lg p-2 py-5">
              <IoIosArrowBack size={24} />
            </button>
            <div ref={scrollRef} className='overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide w-full px-10'>
              <div className='h-auto flex gap-4 items-center'>
                {Menfashion.map((fashion, index) => (
                  <Link to={`/category/${fashion.name}`} key={index}>
                    <img
                      src={fashion.src}
                      alt={fashion.name}
                      className="w-28 h-auto object-contain flex-shrink-0 hover:scale-105 transition"
                    />
                    <p className=' text-center'>{fashion.name}</p>
                  </Link>
                ))}
              </div>
            </div>
            <button onClick={() => scroll(300)} className="absolute right-0 z-10 bg-white/80 hover:bg-white shadow-lg p-2 py-5">
              <IoIosArrowForward size={24} />
            </button>
          </div>
          <img src="https://m.media-amazon.com/images/G/31/prime/ACQ/1500x280_ho_new.jpg" alt="Mens" />
          <img src="https://m.media-amazon.com/images/G/31/img21/MA2024/AF_BAU/top_pcl_1500x460._CB542287683_.png" alt="banner" />
          <img src="https://m.media-amazon.com/images/G/31/Events/img25/MayART25/BankPC.png" alt="bank" />
          <img src="https://m.media-amazon.com/images/G/31/Events/img25/MayART25/Stripe2PC.png" alt="m" />
          
          {/* Price Drop */}
          <div>
            <img src="https://m.media-amazon.com/images/G/31/MA2025/MAYART/BXGY/PRICE_DROP_PC._CB794827440_.gif" alt="price drop" />
          </div>

          {/* Brand Focus */}
          <div>
            <img src="https://m.media-amazon.com/images/G/31/img21/MA2024/AW24FLIP/Shop_by_category_PC._CB542139003_.jpg" alt="brand" />
          </div>

          {/* Break Out Brand */}
          <div>
            <img src="https://m.media-amazon.com/images/G/31/MA2025/MAYART/Headers/PC/HEADER_PC_BOB._CB795080359_.jpg" alt="brands" />
          </div>

          {/* Brand Offers */}
          <div className='py-3 bg-[#ffe8a5]'>
            <div className='flex md:w-44 sm:w-28 w-16 mx-4 gap-1'>
              <img src="https://m.media-amazon.com/images/G/31/MA2025/MAYART/SD/BrandOffers/UCB_320x200._CB796770646_.png" alt="1" />
              <img src="https://m.media-amazon.com/images/G/31/MA2025/MAYART/SD/BrandOffers/Nobero_320x200._CB796770646_.png" alt="2" />
              <img src="https://m.media-amazon.com/images/G/31/MA2025/MAYART/TPP_320x200._CB795268706_.png" alt="3" />
              <img src="https://m.media-amazon.com/images/G/31/MA2025/MAYART/SD/BrandOffers/Guess_320x200._CB796770646_.png" alt="4" />
              <img src="https://m.media-amazon.com/images/G/31/MA2025/MAYART/SD/BrandOffers/Max_320x200._CB796770646_.png" alt="5" />
              <img src="https://m.media-amazon.com/images/G/31/MA2025/MAYART/SD/BrandOffers/Veirdo_copy_1_320x200._CB794822427_.png" alt="6" />
            </div>
          </div>

          {/* Explore For More */}
          <div>
            <img src="https://m.media-amazon.com/images/G/31/MA2025/JanArt/SD/ExploreMore/MA_ExploreMoreDealsHeader-PC-1._CB552627362_.jpg" alt="explore" />
          </div>

          {/* Summer */}
          <div>
            <img src="https://m.media-amazon.com/images/G/31/MA2025/MAYART/Headers/PC/Summer_PC._SX1500_QL85_FMpng_.png" alt="" />
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
  {loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    filteredProducts.map((product, index) => (
      <Link to={`/product/${product._id}`} key={index}>
        <div className="border p-2 bg-white rounded">
          <img
            src={product?.images[0]}
            alt={product.title}
            className="h-72 w-full object-contain"  // Use object-contain here
          />
          <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
          <p className="text-xs text-gray-500">{product?.brand?.name}</p>
          <p className="text-sm font-bold">₹{product.price}</p>
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

export default Shirts;
