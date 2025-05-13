import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

const Amazonpay = () => {
const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (user) {
      navigate(path);
    } else {
      navigate('/signin');
    }
  };
    
  return (
    <div className='bg-gray-200 min-h-screen'>
      <div className='bg-white'>
        <Link to={"/amazonpay"}>
          <img 
            src="https://m.media-amazon.com/images/G/31/apay/dashboard/apay-sticker-desktop-t1._CB433219863_.png" 
            alt="amazonPay" 
            className='w-full object-cover'
          />
        </Link>  
      </div>

      {/* main content */}
      <div className='flex flex-col md:flex-row gap-4 mx-4 md:mx-16 mt-4'>

        {/* left side */}
        <div className='w-full md:w-72 h-32 bg-white rounded shadow'>
          <div className='flex justify-between mx-4 py-2'>
            <h1 className='text-sm font-bold'>Amazon Pay Balance</h1>
            <p className='text-sm text-green-800'>₹0.00</p>
          </div>
          <div className='border text-sm py-2 bg-gray-50 space-y-2 px-4 text-blue-500'>
            <p>Add Money</p>
            <p>Add Gift Card</p>
            <p>Account Settings</p>
          </div>
        </div>

        {/* right side */}
        <div className='flex-1 space-y-4 mb-4'>

          {/* Travel Section */}
          <div className='bg-white p-4 rounded shadow '>
            <h1 className='font-bold mb-2'>Travel</h1>
            <div className='flex flex-wrap gap-4 justify-start'>
              {[
                {
                  image: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Flight._CB616315948_.png",
                  label: "Plane",
                  path:"/plane"
                  
                },
                {
                  image: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Bus._CB616315948_.png",
                  label: "Bus Travels",
                  path:"/bustickets"
                },
                {
                  image: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Train._CB616315951_.png",
                  label: "Trains",
                  path:"trains"
                }
              ].map((travel, index) => (
            <div key={index} onClick={() => handleNavigation(travel.path)} className='flex cursor-pointer flex-col items-center w-20'>
                  <img src={travel.image} alt={travel.label} className='w-10' />
                  <p className='text-sm text-center mt-1'>{travel.label}</p>
                </div> 
              ))}
            </div>
          </div>

          {/* Recharge Section */}
          <div className='bg-white p-4 rounded shadow'>
            <h1 className='font-bold mb-2'>Recharge</h1>
            <div className='flex flex-wrap gap-4 justify-start'>
              {[
                {
                  image: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Mobile_Rec._CB616315948_.png",
                  label: "Mobile Recharge"
                },
                {
                  image: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Mobile_Rec._CB616315948_.png",
                  label: "App Store Code"
                },
                {
                  image: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_DTH._CB616315948_.png",
                  label: "DTH Recharge"
                },
                {
                  image: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/APD_icon_GPRC._CB594689751_.png",
                  label: "Google App Recharge"
                }
              ].map((item, index) => (
                <div key={index} className='flex flex-col cursor-pointer items-center w-20'>
                  <img src={item.image} alt={item.label} className='w-10' />
                  <p className='text-sm text-center mt-1'>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
             {/* Gift Cards and Vouchers */}
          <div className='bg-white p-4 rounded shadow'>
            <h1 className='font-bold mb-2'>Gift Cards and Vouchers</h1>
            <div className='flex flex-wrap gap-4 justify-start'>
              {[
                {
                  image: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_AddGC._CB616315948_.png",
                  label: "Add Gift card",
                  path:"/user/giftcards/redemm"
                  
                },
                {
                  image: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_All_GC._CB616315948_.png",
                  label: "Gift Card",
                  path:"/user/giftcards"
                },
                {
                  image: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/125x125_icon_Subtle_Yellow_copy1_Amazon_Voucher._CB617212892_.png",
                  label: "Amazon Voucher",
                  path:"/amazonVoucher"
                },
                {
                  image: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_Brand_vouchers._CB616315948_.png",
                  label: "Brand vouchers",
                  path:"/brand_vouchers"
                },
                {
                  image: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/V1_Filledicons/icon_set_Pratima_BGC._CB616315948_.png",
                  label: "BirthDay Gift Card",
                  path:"/birthdaygift"
                },
              ].map((travel, index) => (
            <div key={index} onClick={() => handleNavigation(travel.path)} className='flex flex-col cursor-pointer items-center w-20'>
                  <img src={travel.image} alt={travel.label} className='w-10' />
                  <p className='text-sm text-center mt-1'>{travel.label}</p>
                </div> 
              ))}
            </div>
          </div>
          {/* Manage */}
          <div className='bg-white p-4 rounded shadow '>
            <h1 className='font-bold mb-2'>Manage</h1>
            <div className='flex flex-wrap gap-4 justify-start'>
              {[
                {
                  image: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/Desktop/Desktop_APD_view-statement._CB612762929_.png",
                  label: "Your Transaction",
                  path:"/transaction"
                  
                },
                {
                  image: "https://m.media-amazon.com/images/G/31/img22/Apay/Icons/APD_NewIcons/Desktop/Desktop_APD_your-rewards._CB612762929_.png",
                  label: "Your Rewards",
                  path:"/rewards"
                },
                
              ].map((travel, index) => (
            <div key={index} onClick={() => handleNavigation(travel.path)} className='flex flex-col cursor-pointer items-center w-20'>
                  <img src={travel.image} alt={travel.label} className='w-10' />
                  <p className='text-sm text-center mt-1'>{travel.label}</p>
                </div> 
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Amazonpay
