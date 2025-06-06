import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import AmazonFashionNavbar from '../../MensCollection/AmazonFashionNavbar'

const EthicsBottomWear = () => {
  return (
    <div>
      <AmazonFashionNavbar/>
      <div className='flex flex-col md:flex-row'>
        <aside className='mx-2 text-sm mt-1 w-56 border-r'>
          <h1>Category</h1>
          <Link to={"/allAccessories"} className='flex items-center'>
          <IoIosArrowBack/>
          <span>Clothing & Accessories</span>
          </Link>
          <Link to={"/women/ethnic-wear"} className='flex items-center'>
          <IoIosArrowBack/>
          <span>Ethnic Wear</span>
          </Link>
          <h1 className='mx-4 font-semibold'>Bottom Wear</h1>
               
               <h1 className='mx-2 font-semibold mt-2'>Amazon Prime</h1>
          <div className='flex gap-1 mx-2'>
            <input type="checkbox"  />
            <h1>Prime</h1>
          </div>
          <h1 className='mx-2 font-semibold'>Delivery Day</h1>
          <label className="flex gap-2 mx-2">
              <input type="checkbox" />
              <span>Get It by Tomorrow</span>
            </label>
        </aside>

        <main className='w-full'>
          <h1>Most GIft</h1>

        </main>
      </div>
    </div>
  )
}

export default EthicsBottomWear