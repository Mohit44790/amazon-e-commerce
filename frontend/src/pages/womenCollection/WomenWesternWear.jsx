import React from 'react'
import AmazonFashionNavbar from '../MensCollection/AmazonFashionNavbar'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { westernWear } from '../../Data/AllTypesAcccessories'

const WomenWesternWear = () => {
  return (
    <div>
      <AmazonFashionNavbar/>


<div className='flex  mx-4 mt-2'>

      {/* left side  */}
      <div className="w-64 border-r  pr-4">

        <div>
          <p className="text-sm font-semibold mb-1">Category</p>
        </div>
              <Link to="/allAccessories" className="flex items-center text-sm mb-2">
                <IoIosArrowBack />
                <span className="ml-1">Clothing & Accessories</span>
              </Link>
              <Link to="/clothing" className="flex items-center text-sm mb-2">
                <IoIosArrowBack />
                <span className="ml-1">women</span>
              </Link>

              <h1 className='text-sm font-semibold mx-4 '>Western Wear</h1>
              <div className='text-sm mt-1 mx-6 '>

             <Link to="/tops" className="flex items-center text-sm ">
           
                <span className="ml-1">Tops, T-Shirts & Shirts</span>
              </Link>
              <Link to="/dresses" className="flex items-center text-sm ">
               
                <span className="ml-1">Dresses & Jumpsuits</span>
              </Link>
              <Link to="/trousers" className="flex items-center text-sm ">
               
                <span className="ml-1">Trousers</span>
              </Link>
              <Link to="/jeans" className="flex items-center text-sm ">
              
                <span className="ml-1">Jeans & Jeggings</span>
              </Link>
              <Link to="/skirts" className="flex items-center text-sm ">
               
                <span className="ml-1">Skirts & Shorts</span>
              </Link>
              <Link to="/suits" className="flex items-center text-sm ">
                
                <span className="ml-1">Suits & Blazers</span>
              </Link>
              <Link to="/shrugs" className="flex items-center text-sm ">
           
                <span className="ml-1">Shrugs</span>
              </Link>
              <Link to="/leggings" className="flex items-center text-sm">
               
                <span className="ml-1">Leggings</span>
              </Link>
              <Link to="/rainwear" className="flex items-center text-sm ">
           
                <span className="ml-1">Rainwear</span>
              </Link>
              <Link to="/ponchos" className="flex items-center text-sm ">
             
                <span className="ml-1">Ponchos & Capes</span>
              </Link>
              <Link to="/winter" className="flex items-center text-sm ">
               
                <span className="ml-1">Winter Wear</span>
              </Link>
              </div>
      </div>

      {/* right side */}
      <div className='w-full bg-gray-200'>
        <div className='flex flex-wrap gap-4 bg-white mx-4 '>
          {westernWear.map((item,index)=>(
        <Link to={ item.path} key={index} className=" items-center text-center text-sm mb-2">
              <img src={item.image}  alt={item.label} className="w-32  mr-2" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
</div>
    </div>
  )
}

export default WomenWesternWear