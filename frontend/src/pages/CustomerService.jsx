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

      <div className="a-row a-spacing-large a-spacing-top-micro ss-rich-card-row">
        {/* Your Orders */}
        <Card
          link="/gp/css/order-history?ref_=hp_ss_v3_yo_t4"
          imgSrc="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Box-t3.png"
          title="Your Orders"
          listItems={["Track packages", "Edit or cancel orders"]}
        />

        {/* Returns and Refunds */}
        <Card
          link="/gp/css/order-history?ref_=hp_ss_v3_rr_t4"
          imgSrc="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/returns-box-blue.png"
          title="Returns and Refunds"
          listItems={["Return or exchange items", "Print return mailing labels"]}
        />

        {/* Manage Addresses */}
        <Card
          link="/gp/css/account/address/view.html?ref_=hp_ss_v3_ma_t4"
          imgSrc="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/manage-address.png"
          title="Manage Addresses"
          listItems={["Update your addresses", "Add address, landmark details"]}
        />
      </div>

      <div className="a-row a-spacing-large a-spacing-top-micro ss-rich-card-row">
        {/* Manage Prime */}
        <Card
          link="/gp/primecentral?ref_=hp_ss_v3_mp_t4"
          imgSrc="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Prime_clear-bg.png"
          title="Manage Prime"
          listItems={["View your benefits", "Membership details"]}
        />

        {/* Payment Settings */}
        <Card
          link="/cpe/managepaymentmethods?ref_=hp_ss_v3_ps_t4"
          imgSrc="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Payments_clear-bg-t3.png"
          title="Payment Settings"
          listItems={["Add or edit payment methods", "Check saved cards & wallets"]}
        />

        {/* Account Settings */}
        <Card
          link="/gp/css/homepage.html?ref_=hp_ss_v3_ya_t4"
          imgSrc="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Account_clear-bg.png"
          title="Account Settings"
          listItems={["Login & security", "Change name, email, mobile"]}
        />
      </div>
    </div>
  );
};

// Reusable Card Component
const Card = ({ link, imgSrc, title, listItems }) => (
  <div className="a-column a-span4">
    <a className="a-color-base a-link-normal a-text-normal" href={link}>
      <div className="a-box self-service-rich-card">
        <div className="a-box-inner">
          <div className="a-row a-grid-vertical-align a-grid-top">
            <div className="a-column a-span3">
              <img alt={title} src={imgSrc} className="ss-v2-box-image" />
            </div>
            <div className="a-column a-span9 ss-rich-card-column-text a-span-last">
              <h3 className="a-spacing-none a-text-normal">{title}</h3>
              <ul className="a-unordered-list a-nostyle a-vertical">
                {listItems.map((item, idx) => (
                  <li key={idx}>
                    <span className="a-list-item a-color-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
);

export default CustomerService;
