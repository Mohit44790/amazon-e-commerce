import React from 'react'
import AmazonFashionNavbar from '../AmazonFashionNavbar'

const BagsAndLuggage = () => {
  return (
    <div>
      <AmazonFashionNavbar/>

      <div className='flex'>

        <div className='w-64'>
          <h1>Category</h1>
        </div>
        <main className='w-full'>
          <section>
            <h1>Trolley and Luggage Bags</h1>
            <div className=''>
              <div className='flex overflow-x-auto '>

              <img src="https://m.media-amazon.com/images/G/31/img21/Luggage/2025/March/Trolleys11and_sets._SS300_QL85_FMpng_.png" alt="1" className='w-40'/>
              <img src="https://m.media-amazon.com/images/G/31/img21/Luggage/2025/March/Ba11gs_and_backpacks._SS300_QL85_FMpng_.png" alt="2" className='w-40' />
            </div>
              </div>
          </section>

          <div>
            <img src="https://m.media-amazon.com/images/G/31/img21/Luggage/2025/March/m113.png" alt="" />
          </div>
        </main>
        

      </div>
    </div>
  )
}

export default BagsAndLuggage