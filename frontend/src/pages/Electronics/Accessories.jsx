import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { accessoriesFeatures } from '../../Data/ElectronicData';
import { IoIosArrowBack } from 'react-icons/io';
import MegaMenuelectronics from './MegaMenuelectronics';

const Accessories = () => {
   const navigate = useNavigate();

  const handleNavigate = (path) => {
    if (path && path.trim() !== '') {
      navigate(path);
    } else {
      alert('No path available for this item.');
    }
  };

  return (
    <div>
      <MegaMenuelectronics/>

      <div className="flex flex-col md:flex-row">
        <aside className="w-56 border-r p-4">
            <h1 className='text-sm font-bold'>Category</h1>
          <Link to={"/electronics"}>  <label className='flex items-center text-sm mb-1 cursor-pointer'>
                <IoIosArrowBack/>
              <span className='text-sm '>Electronics</span>
            </label></Link>  
          <h1 className="text-sm font-semibold">Accessories</h1>
          <ul className="text-sm mt-2 space-y-1 mx-5 font-normal ">
            {/* click to navigate */}
           <Link to="/accessories/blank-media-cases"><li className='hover:text-orange-500'>Blank Media Cases & Wallets</li></Link>
           <Link to="/accessories/camera-photo"><li className='hover:text-orange-500'>Camera & Photo Accessories</li></Link>
           <Link to="/accessories/car-vehicle"><li className='hover:text-orange-500'>Car & Vehicle Electronics Accessories</li></Link>
           <Link to="/accessories/computer"><li className='hover:text-orange-500'>Computer Accessories</li></Link>
           <Link to="/accessories/memory-cards"><li className='hover:text-orange-500'>Memory Cards</li></Link>
           <Link to="/accessories/mobile"><li className='hover:text-orange-500'>Mobile Accessories</li></Link>
           <Link to="/accessories/navigation"><li className='hover:text-orange-500'>Navigation Accessories</li></Link>
           <Link to="/accessories/portable-audio"><li className='hover:text-orange-500'>Portable Audio & Video Accessories</li></Link>
           <Link to="/accessories/tablet"><li className='hover:text-orange-500'>Tablet Accessories</li></Link>
           <Link to="/accessories/telephone"><li className='hover:text-orange-500'>Telephone Accessories</li></Link>
          </ul>
          <h1 className='mx-2 font-semibold text-sm mt-2'>Amazon Prime</h1>
          <div className='flex gap-1 mx-2'>
            <input type="checkbox"  />
            <h1>Prime</h1>
          </div>
          <h1 className='mx-2 font-semibold text-sm'>Delivery Day</h1>
          <label className="flex gap-2 mx-2 text-sm">
              <input type="checkbox" />
              <span>Get It by Tomorrow</span>
            </label>    

            <h1 className='text-sm font-semibold'>Brands</h1>

            <div className="mb-1 text-sm">
            <h1 className="font-bold text-sm ">Customer Reviews</h1>
            <p><span className='text-yellow-500 text-xl'>★★★★☆</span> & up</p>
          </div>

        </aside>

        <main className="flex-1 p-4">
          <section>
            <h1 className="text-2xl font-bold mb-4">Featured Categories</h1>
           <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
  {accessoriesFeatures.map((item) => (
    <div
      key={item.id}
      className="group relative h-56  ease-in-out transform  transition-all  duration-1000 flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Image */}
      <div className="h-56 flex items-center  justify-center group-hover:-mt-14  overflow-hidden">
         <div className="h-44 w-44 bg-gray-100 group-hover:w-28 group-hover:h-28  flex items-center justify-center rounded-full overflow-hidden ">
        <img
          src={item.image}
          alt={item.name}
           onClick={() => handleNavigate(item.path)}
          className="transition-transform duration-500 w-32   mix-blend-darken object-cover hover:top-1  transform group-hover:scale-50"
          />
          </div>
      </div>

      {/* Title */}
                  <h2 className="text-center font-semibold text-sm mt-2 group-hover:border-b text-gray-800 transition-all duration-300 group-hover:-mt-14 group-hover:text-black">
                    {item.name}
                  </h2>

      {/* Subcategories — absolutely positioned so card height is fixed */}
         <div className="absolute bottom-4 left-0 right-0 px-2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform group-hover:-translate-y-2 flex flex-col items-center space-y-1 pointer-events-none group-hover:pointer-events-auto">
  {item.category?.map((cat, index) => (
    cat?.name && cat?.path && (
      <button
        key={index}
        onClick={() => handleNavigate(cat.path)}
        className="text-xs text-blue-600 underline hover:text-blue-800"
      >
        {cat.name}
      </button>
    )
  ))}
</div>

    </div>
  ))}
</div>

          </section>
        </main>
      </div>
    </div>
  );
};

export default Accessories;
