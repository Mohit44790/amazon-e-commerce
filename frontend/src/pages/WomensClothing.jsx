import React from 'react'

import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router'

const WomensClothing = () => {
  return (
    <div>
        <div className='flex items-center'>
       <Link to={"/allAccessories"}> <IoIosArrowBack /> <h1>Category</h1></Link>
        </div>
        
    </div>
  )
}

export default WomensClothing