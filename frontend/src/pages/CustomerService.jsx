import React from 'react';

const CustomerService = () => {
  return (
    <div className="a-section a-spacing-extra-large a-spacing-top-extra-large ss-landing-container">
      <h1>Hello. What can we help you with?</h1>
      <hr aria-hidden="true" className="a-spacing-none a-divider-normal" />
      <div className="a-divider a-divider-section">
        <div className="a-divider-inner" />
      </div>
      <div className="a-section a-spacing-base ss-landing-container-wide">
        <h2 className="a-spacing-none a-text-normal">
          Some things you can do here
        </h2>
      </div>
      <img src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Box-t3.png" alt="" />

      <div className="a-row a-spacing-large a-spacing-top-micro ss-rich-card-row flex gap-8">
        {/* Your Orders */}
       <img src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/returns-box-blue.png" alt="" />
<img src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/manage-address.png" alt="" />
        {/* Manage Addresses */}
        <img src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Prime_clear-bg.png" alt="" />
      </div>

      <div className="a-row a-spacing-large a-spacing-top-micro ss-rich-card-row flex">
        
<img src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Payments_clear-bg-t3.png" alt="" />
        {/* Payment Settings */}
       
<img src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Account_clear-bg.png" alt="" />
        {/* Account Settings */}
       
      </div>
    </div>
  );
};


export default CustomerService;
