import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router'
import { getFilteredProducts } from '../../redux/slice/productSlice'
import { debounce } from "lodash";
import { useDispatch, useSelector } from 'react-redux';
const Mobiles = () => {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);
  const [selectedBrand, setSelectedBrand] = useState("All");
  
  const [filters, setFilters] = useState({
    main: "",
    parent: "",
    category: "smartphones",
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
    <>
    
    <div className='flex'>
       {/* left side  */}
   <div className=" border-r w-72 px-4 py-2">
            <p className="text-sm font-semibold mb-1">Category</p>
            <Link to="/allAccessories" className="flex items-center text-sm mb-2">
              <IoIosArrowBack />
              <span className="ml-1">Electronics</span>
            </Link>
  
            <p className="text-sm font-semibold mb-2">Mobiles & Accessories</p>
            <ul className="text-sm space-y-1 mb-4">
              {[
                'Mobile Accessories', 'Mobile Broadband Device', 'SIM Cards', 'Smartphones & Basic Mobiles',
                'Smartwatches'
              ].map((item, i) => (
                <Link to="#" key={i}><li>{item}</li></Link>
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

            <div className='mb-4'>
              <h1 className="font-bold text-sm mb-1">Availability</h1>
              <input type="checkbox" />Include Out of Stock
            </div>

            
  
            
          </div>

  {/* right side  */}
  <div className='w-full mx-2 py-2'>
    
    <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/CatPage/MayART25/LeadUp/Header/V1/MayArt-header-with-navigator_05.gif" alt="mobiles" />
    <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/MayArt/BDOS/new/Header_2_2.gif" alt="summer" />
    <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/SAMSUNG/MayART25/1242x2500_Price-Reveal-4a_02_1.gif" alt="SAmsung" />


    <div className='flex w-full '>
    <img src="https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/MayART/Apple/56749/r1/1242x2500_Price-Reveal-4_03.jpg" alt="iphone" className='w-72' />
    <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/MayArt/BDOS/26THAPRIL/1242x2500_Price-Reveal-4_04.jpg" alt="!Qo0" className='w-72' />
    <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/MayArt/BDOS/PriceReveal/1242x2500_Price-Reveal-2_07.jpg" alt="Oneplus NOrd" className='w-72' />
    <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/MayArt/BDOS/26THAPRIL/1242x2500_Price-Reveal-4_06.jpg" alt="redmi" className='w-60' />
    </div>

    <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/MayArt/BDOS/26THAPRIL/13R_BDOS.gif" alt="Oneplus 13R" />

    <div className='flex w-full '>
    <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/MayArt/BDOS/26THAPRIL/1242x2500_Price-Reveal-4_08.jpg" alt="redmi" className='w-72' />
    <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/MayArt/BDOS/new/1242x2500_Price-Reveal-4_09.jpg" alt="!Qo0" className='w-72' />
    <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/MayArt/BDOS/26THAPRIL/1242x2500_Price-Reveal-4_10.jpg" alt="Tech" className='w-72' />
    <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/MayArt/BDOS/26THAPRIL/1242x2500_Price-Reveal-4_06.jpg" alt="redmi A4" className='w-60' />
    </div>

    <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/SAMSUNG/MayART25/1242x2500_Price-Reveal-4_12.jpg" alt="samsung" />
    
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
    <div className='mx-4 mt-4'>
  <h1 className='font-bold text-2xl'>Buy mobile phones online at the best prices in India from Amazon.in.</h1>
<p>Welcome to Amazon. in, your electronics store for essentially just mobile phones and the newest additions at discounted rates. Whether you want the newest innovation, an affordable gadget, or the best mobile phones contract, Amazon. in has you covered. Being one of the prominent markets that deals with the mobile phones of various brands, you get the best model which fits your pocket and requirements.</p>

<h1 className='font-bold text-2xl'>Choosing A Smartphone as Per Operating System</h1>
<p>When it comes to selecting a smartphone, the operating system that your phone is running, can be extremely important when it comes to its outcome. At Amazon. in, you can find a wide range of mobile phones equipped with the most popular operating systems: in, you can find a wide range of mobile phones equipped with the most popular operating systems:</p>

<h1 className='font-bold text-2xl'>Android Mobile Phones</h1>
<p>Android is very flexible, and customizable and has a chance to choose the desired applications. Companies such as Samsung, Xiaomi, OnePlus, etc., have Android phones with quality and the best new specs in the market.</p>

<h1 className='font-bold text-2xl'>Explore Our Top Mobile Phone Brands</h1>
<p>At Amazon. In this context, we encompass the largest stock of mobile phones from the globally renowned manufacturing companies.</p>

<p>Here are some of the top brands you can find:</p>

<h1 className='font-bold text-2xl'>Samsung Mobile</h1>
<p>Dealing exclusively in innovation and possessing some of the most advanced technologies, Samsung mobile phones are preferred by people who are into technology. Samsung has devices ranging from a basic smartphone to its highest class, the most recent series of the Galaxy series.</p>

<h1 className='font-bold text-2xl'>Xiaomi Mobile</h1>
<p>Xiaomi has been producing good quality cell phones that are pocket friendly. Sometimes it is seen that these mobile phones have catchy specifications and have excellent build quality and if you are highly particular about price then Xiaomi mobile phones can be a perfect choice.</p>

<h1 className='font-bold text-2xl'>OnePlus Mobile</h1>
<p>This has made OnePlus popular since it is used to selling phones with all the features of high-end phones for mid-range prices. Controlling the architecture of design and performance, OnePlus mobile has been going with the model better suited for those, who want to have the premium opportunity with the economical price mark.</p>

<h1 className='font-bold text-2xl'>Realme Mobile</h1>
<p>Although, Realme is another brand that also offers most of its products at an affordable price. Realme has various devices for every category; there is a device from the basic level to the advanced one.</p>

<h1 className='font-bold text-2xl'>Compare and Choose the Best Mobile Phones Online</h1>
<p>This is so because there is an approximate of the outcome market of mobile phones, and thus picking the right one can be quite challenging. Here are some tips to help you make an informed decision:</p>

<p>Here are some tips to help you make an informed decision:</p>

<h1 className='font-bold text-2xl'>Determine Your Budget</h1>
<p>Again, you are advised to set a budget before you begin to search. Amazon. in also deals in mobile phones and has a variety of phones in different classes; entry level phones and gadgets that are considered as the high-end. Mobile phones are categorized by their prices and if you are looking for the mobile phone that is under 20000, you will be spoilt for choices.</p>

<h1 className='font-bold text-2xl'>Identify Your Needs</h1>
<p>Jointly, think about what hand features are going to be the most useful to you. Do you prefer a resolution of camera, long lasting battery or humongous space for storage for your phone? Eliminate choices to make them manageable by focusing on your requirements.</p>

<h1 className='font-bold text-2xl'>Check for Deals</h1>
<p>Do not forget about the best offer for mobile phones on sale at Amazon. in. Also, check for the promotional prices, coupons, and attractive packages that can be useful in reducing cost.</p>

<h1 className='font-bold text-2xl'>FAQs - Mobile Phones</h1>
<h1>Which are the best mobile phone brands available in India?</h1>
<p>The list of the top mobile Phone brands found in India is comprised of Samsung, Apple, Xiaomi, OnePlus, and Realme. Every brand is represented by a set of models that may differ in features and prices to correspond with the customers’ requirements and capacities</p>.

<h1 className='font-bold text-2xl'>What is the minimum RAM capacity needed for a Mobile phone?</h1>
<p>However, for a smooth run in terms of efficiency of the mobile phone when being used by the end user, it is advisable to go for a mobile phone with RAM of not less than 4GB. RAM size of at least 6GB or 8GB is recommended for those who often use many programs and processes at the same time.</p>

<h1 className='font-bold text-2xl'>What are the different display options available on Mobile phone?</h1>
<p>Regarding the outer screen protection, mobile phones come in different kinds of screens like LCD, OLED, and AMOLED displays. In most cases OLED and AMOLED displays are found to be superior in terms of color reproduction and contrast than the LCD display devices.</p>

<h1 className='font-bold text-2xl'>What are the best display resolutions available on Mobile phone?</h1>
<p>The display resolutions that are best suited for the mobile phones are the Full HD or 1080p, Quad HD or 1440p, as well as the 4k Ultra HD. HD displays yield clearer pictures, and this means that your overall experience in viewing is going to be much better.</p>
  </div>
    </>
  )
}

export default Mobiles