import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-sm">
      {/* Back to Top */}
      <div className="text-center bg-gray-700 py-2 cursor-pointer hover:underline">
        <h1>Back to Top</h1>
      </div>

      {/* Footer Columns */}
      <div className="flex flex-col items-center md:flex-row justify-evenly px-2 py-8 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="font-semibold mb-2">Get to Know Us</h2>
          <ul className="space-y-1 items-center">
            <li><a href="#" className="hover:underline">About Amazon</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press Releases</a></li>
            <li><a href="#" className="hover:underline">Amazon Science</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="font-semibold mb-2">Connect with Us</h2>
          <ul className="space-y-1 items-center">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="font-semibold text-center justify-center mb-2">Make Money with Us</h2>
          <ul className="space-y-1 text-center">
            <li><a href="#" className="hover:underline">Sell on Amazon</a></li>
            <li><a href="#" className="hover:underline">Sell under Amazon Accelerator</a></li>
            <li><a href="#" className="hover:underline">Protect and Build Your Brand</a></li>
            <li><a href="#" className="hover:underline">Amazon Global Selling</a></li>
            <li><a href="#" className="hover:underline">Supply to Amazon</a></li>
            <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
            <li><a href="#" className="hover:underline">Fulfilment by Amazon</a></li>
            <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
            <li><a href="#" className="hover:underline">Amazon Pay on Merchants</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="font-semibold text-center mb-2">Let Us Help You</h2>
          <ul className="space-y-1 text-center">
            <li><a href="#" className="hover:underline">Your Account</a></li>
            <li><a href="#" className="hover:underline">Returns Centre</a></li>
            <li><a href="#" className="hover:underline">Recalls and Product Safety Alerts</a></li>
            <li><a href="#" className="hover:underline">100% Purchase Protection</a></li>
            <li><a href="#" className="hover:underline">Amazon App Download</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
          </ul>
        </div>
      </div>

      {/* Language & Region */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-gray-600 py-4 px-4">
        <img
          src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
          alt="Amazon"
          className="w-28 object-contain"
        />
        <div className="flex gap-4 text-white">
          <button className="hover:underline">English</button>
          <button className="hover:underline">India</button>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="grid grid-cols-2 bg-gray-900  sm:grid-cols-3 md:grid-cols-4 gap-4 px-6 py-4 text-gray-400 text-xs">
        <p><strong>AbeBooks</strong><br />Books, art & collectibles</p>
        <p><strong>Amazon Web Services</strong><br />Scalable Cloud Computing Services</p>
        <p><strong>Audible</strong><br />Download Audio Books</p>
        <p><strong>IMDb</strong><br />Movies, TV & Celebrities</p>
        <p><strong>Shopbop</strong><br />Designer Fashion Brands</p>
        <p><strong>Amazon Business</strong><br />Everything For Your Business</p>
        <p><strong>Prime Now</strong><br />2-Hour Delivery on Everyday Items</p>
        <p><strong>Amazon Prime Music</strong><br />100 million songs, ad-free<br />Over 15 million podcast episodes</p>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs py-4 bg-gray-900  border-gray-600">
        <p>
          <a href="#" className="hover:underline">Conditions of Use & Sale</a> |
          <a href="#" className="hover:underline px-2">Privacy Notice</a> |
          <a href="#" className="hover:underline">Interest-Based Ads</a>
        </p>
        <p>© 1996–2025, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;
