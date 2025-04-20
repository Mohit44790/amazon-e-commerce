import React from 'react';

const MeetAlexa = () => {
  return (
    <div>
      {/* Top Navigation */}
      <nav className="border bg-gray-100 py-2">
        <ul className="flex flex-wrap  gap-4 px-4 text-sm text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Alexa</li>
          <li className="hover:text-blue-600 cursor-pointer">Skills</li>
          <li className="hover:text-blue-600 cursor-pointer">For Your Smart Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Games and Trivia</li>
          <li className="hover:text-blue-600 cursor-pointer">Lifestyle</li>
          <li className="hover:text-blue-600 cursor-pointer">Getting Started</li>
          <li className="hover:text-blue-600 cursor-pointer">Help</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="bg-sky-950 mx-2 mt-3">
        <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20  gap-4 text-white">
          {/* Nav items */}
          <div className="flex flex-wrap gap-8 text-center text-2xl mx-20  font-bold justify-center">
            <p className="cursor-pointer hover:underline">Homepage</p>
            <p className="cursor-pointer hover:underline">Features & Skills</p>
            <p className="cursor-pointer hover:underline">Privacy</p>
            <p className="cursor-pointer hover:underline">Shop ▾</p>
            <p className="cursor-pointer hover:underline">Top Picks</p>
            <p className="cursor-pointer hover:underline">Accessibility</p>
          </div>

          {/* Alexa Logo */}
          <div className="flex  justify-center">
            <img
              src="https://m.media-amazon.com/images/G/31/IMG22/Alexa/AlexaHub_AAA_Essentials/Alexa_Logo_RGB_WHITE_NavBar._CB593729976_.svg"
              alt="Alexa Logo"
              className="h-14  object-contain"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-10  text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Alexa Hub</h1>
        <img
          src="https://m.media-amazon.com/images/G/31/IMG22/Alexa/AlexaFeatures/AlexaHub_FEATURES_Header_PC.jpg"
          alt="Alexa Features"
          className="w-full rounded-lg mb-6"
        />
        <div className='bg-sky-50 -mt-6'>
        <h2 className="text-2xl font-semibold py-4">
          Alexa makes your life easier, more meaningful, and more enjoyable
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          By enabling you to control your world with your voice, Alexa can help
          you get more out of the things you already love and discover new
          possibilities you've never imagined.
        </p>
        
        <div >
        <h3 className="text-xl mb-6  font-semibold">Discover Alexa Features:</h3>
         <div className='grid mx-24 gap-4 grid-cols-6 '>
            <div><img src="https://m.media-amazon.com/images/G/31/IMG22/Alexa/AlexaFeatures/Alexa_Icon_SmartHome_GIF.gif" alt="" />
            <p>Smart Home</p>
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/G/31/IMG22/Alexa/AlexaFeatures/Alexa_IconC_PayWithAlexa.png" alt="" />
                <p>Pay with Alexa</p>
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/G/31/IMG22/Alexa/AlexaFeatures/Alexa_Icon_SkillandGames_GIF._CB1198675309_.gif" alt="" />
                <p>Skills and Game</p>
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/G/31/IMG22/Alexa/AlexaFeatures/Alexa_IconC_Entertainment.png" alt="" />
                <p>Entertainment</p>
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/G/31/IMG22/Alexa/AlexaFeatures/Alexa_Icon_Productivity_GIF.gif" alt="" />
                <p>Productivity</p>
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/G/31/IMG22/Alexa/AlexaFeatures/Alexa_Icon_Routines_GIF.gif" alt="" />
                <p>Routines</p>
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/G/31/IMG23/Alexa/FeaturesIcon/Alexa_Icon_TopPicks_GIF.gif" alt="" />
                <p>Top Picks this season</p>
            </div>
            <div>
                
                <img src="https://m.media-amazon.com/images/G/31/IMG23/Alexa/FeaturesIcon/Alexa_IconC_DLS.png" alt="" />
                <p>Alexa English & Hindi</p>

            </div>

         </div>
        <div className=" bottom-0 w-full h-14 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
                
        </div>
        
        </div>
        
      </div>
      <div className='mx-4 border-b mb-2'>
      <h1 className='text-xl font-semibold'>Amazon Echo Smart Devices with Alexa and Bluetooth| Shop Now</h1>
      <p className='text-gray-500'>Experience the future of home and entertainment with the Amazon Echo, a smart speaker powered by Alexa. Find the latest Alexa speaker prices in India</p>
      </div>
    </div>
  );
};

export default MeetAlexa;
