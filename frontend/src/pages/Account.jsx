import React from 'react';
import { Link } from 'react-router';

const Account = () => {
  return (
    <div className="px-4 sm:px-8 mx-28 py-8">
      <h1 className="text-3xl font-semibold mb-6 mx-4 sm:mx-10">Your Account</h1>

      <div className="grid grid-cols-1 mb-4 sm:grid-cols-2 lg:grid-cols-3 gap-6  sm:mx-10">
        {/* Card */}
        <div className="flex border rounded-lg p-4 shadow-sm hover:bg-gray-100 cursor-pointer transition space-x-4">
          <img
            src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png"
            alt=""
            className="w-12 h-12 object-contain"
          />
          <div>
            <h2 className="font-medium text-lg mb-1">Your Orders</h2>
            <p className="text-sm text-gray-600">Track, return, or buy things again</p>
          </div>
        </div>

        <div className="flex border rounded-lg p-4 shadow-sm hover:bg-gray-100 cursor-pointer transition space-x-4">
          <img
            src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png"
            alt=""
            className="w-12 h-12 object-contain"
          />
          <div>
            <h2 className="font-medium text-lg mb-1">Login & Security</h2>
            <p className="text-sm text-gray-600">Edit login, name, and mobile number</p>
          </div>
        </div>

        <div className="flex border rounded-lg p-4 shadow-sm hover:bg-gray-100 cursor-pointer transition space-x-4">
          <img
            src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png"
            alt=""
            className="w-12 h-12 object-contain"
          />
          <div>
            <h2 className="font-medium text-lg mb-1">Prime</h2>
            <p className="text-sm text-gray-600">View benefits and payment settings</p>
          </div>
        </div>

        <div className="flex border rounded-lg p-4 shadow-sm hover:bg-gray-100 cursor-pointer transition space-x-4">
          <img
            src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png"
            alt=""
            className="w-12 h-12 object-contain"
          />
        <Link to={"/addresses"}>  <div>
            <h2 className="font-medium text-lg mb-1">Your Addresses</h2>
            <p className="text-sm text-gray-600">Edit addresses for orders and gifts</p>
          </div></Link>
        </div>

        <div className="flex border rounded-lg p-4 shadow-sm hover:bg-gray-100 cursor-pointer transition space-x-4">
          <img
            src="https://m.media-amazon.com/images/G/31/AmazonBusiness/YAPATF/amazon_business_yap_atf._CB588250268_.jpg"
            alt=""
            className="w-12 h-12 object-contain"
          />
          <div>
            <h2 className="font-medium text-lg mb-1">Your Business Account</h2>
            <p className="text-sm text-gray-600">Sign up to save with GST invoices</p>
          </div>
        </div>

        <div className="flex border rounded-lg p-4 shadow-sm hover:bg-gray-100 cursor-pointer transition space-x-4">
            
            <img className="w-12 h-12 object-contain" src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Payments._CB485926359_.png" alt="" />
          <div>
            <h2 className="font-medium text-lg mb-1">Payment Options</h2>
            <p className="text-sm text-gray-600">Edit or add payment methods</p>
          </div>
        </div>
        <div className="flex border rounded-lg p-4 shadow-sm hover:bg-gray-100 cursor-pointer transition space-x-4">
            
            <img className="w-12 h-12 object-contain" src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/amazon_pay._CB485946857_.png" alt="" />
          <div>
            <h2 className="font-medium text-lg mb-1">Amazon Pay Balance</h2>
            <p className="text-sm text-gray-600">Add money to your Balance</p>
          </div>
        </div>
      </div>
      <div className="border-t py-8 px-4 sm:px-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* Card 1 */}
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold mb-2">Digital content and devices</h2>
      <p className="text-sm text-gray-700">Apps and more</p>
      <p className="text-sm text-gray-700">Content and devices</p>
      <p className="text-sm text-gray-700">Digital gifts you've received</p>
    </div>

    {/* Card 2 */}
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold mb-2">Email alerts, messages, and ads</h2>
      <p className="text-sm text-gray-700">Advertising preferences</p>
      <p className="text-sm text-gray-700">Communication preferences</p>
      <p className="text-sm text-gray-700">SMS alert preferences</p>
      <p className="text-sm text-gray-700">Message Centre</p>
      <p className="text-sm text-gray-700">Alexa shopping notifications</p>
    </div>

    {/* Card 3 */}
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold mb-2">More ways to pay</h2>
      <p className="text-sm text-gray-700">Default Purchase Settings</p>
      <p className="text-sm text-gray-700">Amazon Pay</p>
      <p className="text-sm text-gray-700">Coupons</p>
    </div>

    {/* Card 4 */}
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold mb-2">Ordering and shopping preferences</h2>
      <p className="text-sm text-gray-700">Leave packaging feedback</p>
      <p className="text-sm text-gray-700">Lists</p>
      <p className="text-sm text-gray-700">Manage saved IDs</p>
      <p className="text-sm text-gray-700">Your Shopping preferences</p>
      <p className="text-sm text-gray-700">Your Content</p>
      <p className="text-sm text-gray-700">Language settings</p>
    </div>
    
  </div>
</div>

    </div>
  );
};

export default Account;
