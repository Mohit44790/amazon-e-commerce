import React  from 'react';
// import CategoryContent from '../components/CategoryContent';

const categories = [
 'Fresh',
  'Past Purchases',
  'Alexa lists',
  'Deals',
  'Fruits & vegetables',
  'Atta, rice and grains',
  'Oil and ghee',
  'Milk and dairy',
  'Snacks & biscuits',
  'Eggs, meat & fish',
  'Bath & body',
  'Laundry detergents',
  'Baby Care',
];

const Fresh = () => {
  

 

  return (
    <>
    <div className=" border-t-8  border-green-500">
      {/* Navbar Filter */}
      <nav className="flex flex-wrap py-1 justify-between text-center border text-sm ">
        
        {categories.map((cat, i) => (
          <button
          key={i}
            
            className={' mx-2 py-1 rounded'  }
          >
          {cat}
          </button>
        ))}
      </nav>

      
    </div>
   
      <div>
        <img src="https://m.media-amazon.com/images/G/31/img24/Fresh/April/Pc_6.jpg" alt="" />
        <img src="https://m.media-amazon.com/images/G/31/img24/Fresh/March/Stripes_PC_Flat300_sign-in_1.jpg" alt="" />
        <img src="https://m.media-amazon.com/images/G/31/img18/Fresh/Mar25/Deal_zone_PC.jpg" alt="" />
      </div>
          </>
  );
};

export default Fresh;
