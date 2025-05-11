import React from 'react'

const Prime = () => {
  return (
    <div className="a-container plp-content-container">
  <div id="ppd" className="a-section a-spacing-base">
    <div className="a-row plp-grid-row">
      <div id="ErrorSlot" className="plp-slots-ErrorSlot plp-slots">
        {" "}
      </div>
    </div>
    <div className="a-row plp-grid-row">
      <div
        id="NotificationSlot"
        className="plp-slots-NotificationSlot plp-slots"
      >
        {" "}
      </div>
    </div>
    <div className="a-row plp-grid-row">
      <div id="OfferSlot" className="plp-slots-OfferSlot plp-slots">
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n\n    #primeDetailPage {\n        margin: 0 auto;\n        max-width: 1400px;\n        min-width: 1000px;\n        font-size: 13px;\n        font-family: Arial;\n    }\n\n    #primeDetailPage .checkPrime {\n        height: 29px;\n    }\n\n    #primeDetailPage .primeDetailPage-content-benefit h1, #primeDetailPage .primeDetailPage-content-benefit h3{\n        color: #333;\n    }\n\n    #primeDetailPage .primeDetailPage-content-benefit a, #primeDetailPage .primeDetailPage-content-benefit a:visited, #primeDetailPage .primeDetailPage-content-benefit a:link {\n        text-decoration: none;\n        color: #0066c0;\n    }\n    \n"
          }}
        />
        <div id="primeDetailPage">
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                "\n        .primeDetailPage-content-hero {\n            display: table;\n            width: 100%;\n            min-height: 335px;\n        }\n\n        .primeDetailPage-content-hero-left, .primeDetailPage-content-hero-right {\n            display: table-cell;\n            width: 50%;\n        }\n\n        .primeDetailPage-content-hero .primeDetailPage-content-hero-right {\n            min-height: 335px;\n            margin-left: -2%;\n\n            background: #527CA8;\n            background: -ms-radial-gradient(center, circle farthest-corner, #527CA8 0%, #344F6B 100%);\n            background: -moz-radial-gradient(center, circle farthest-corner, #527CA8 0%, #344F6B 100%);\n            background: -o-radial-gradient(center, circle farthest-corner, #527CA8 0%, #344F6B 100%);\n            background: -webkit-gradient(radial, center center, 0, center center, 497, color-stop(0, #527CA8), color-stop(1, #344F6B));\n            background: -webkit-radial-gradient(center, circle farthest-corner, #527CA8 0%, #344F6B 100%);\n            background: radial-gradient(circle farthest-corner at center, #527CA8 0%, #344F6B 100%);\n            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#527CA8', endColorstr='#344F6B',GradientType=1 );\n        }\n\n        .primeDetailPage-content-hero-right h1 {\n            font-size: 2.5em;\n        }\n\n        .primeDetailPage-content-hero-right h4 {\n            font-size: 1.2em;\n        }\n\n        .primeDetailPage-content-hero a, .primeDetailPage-content-hero a:hover {\n            color: #fff;\n            text-decoration: underline;\n        }\n\n        .primeDetailPage-content-hero-right {\n            padding: 20px;\n            color: #FFFFFF;\n        }\n\n        .primeDetailPage-content-hero-right .a-button-text{\n            font-size: 1.5em;\n        }\n\n        .primeDetailPage-content-hero-right .a-button-inner {\n            padding: .75em 1.5em;\n            height: 100%;\n        }\n\n        .primeDetailPage-content-hero-right .heroLinks {\n            margin: 10px 0;\n        }\n\n        .primeDetailPage-content-hero-logo {\n            height: 33px;\n        }\n\n        .primeDetailPage-content-hero-left {\n            -webkit-box-shadow: 11px 0px 16px 0px rgba(0,0,0,0.17);\n            -moz-box-shadow: 11px 0px 16px 0px rgba(0,0,0,0.17);\n            box-shadow: 11px 0px 16px 0px rgba(0,0,0,0.17);\n            background-image: url(https://m.media-amazon.com/images/G/31/prime/detail_page/2017/Sep/IN-Prime-Slash-Prime-Offer-Benefits1-1400x680._CB442254152_.jpg );\n        }\n\n        .primeDetailPage-content-hero-left {\n           background-size: auto 100%;\n           background-repeat: no-repeat;\n           background-position: center;\n        }\n        \n        .primeDetailPage-content-form {\n           margin-bottom: 5px;\n        }\n        \n        .primeDetailPage-content-large-button {\n           width: 65%;\n        }\n        \n        .primeDetailPage-content-divider {\n           margin-top: 10px;\n           margin-bottom: 12px;\n           width: 65%;\n           display: flex;\n           justify-content: center;\n           font-weight: 700;\n        }\n\n        .primeDetailPage-content-divider-line {\n           padding: 2px 2px;\n           width: 100%;\n           margin-top: 8px;\n        }\n\n        .primeDetailPage-content-hero-bottom {\n           display: table-caption;\n           text-align: center;\n           padding-top: 10px;\n           padding-bottom: 10px;\n           caption-side: bottom;\n           background-color: #B2E5F6;\n           font-size: 1.4em;\n        }\n\n        .primeDetailPage-content-hero-bottom a, .primeDetailPage-content-hero-bottom a:hover {\n            color: #0066c0;\n        }\n        \n    "
            }}
          />
          <div className="a-section a-spacing-double-large primeDetailPage-content-hero">
            <div className="primeDetailPage-content-hero-left" />
            <div className="primeDetailPage-content-hero-right">
              <img
                src="https://m.media-amazon.com/images/G/31/marketing/prime/detail_page/Prime_Logo._CB485923298_.png"
                alt="Prime logo"
                className="primeDetailPage-content-hero-logo"
              />
              <h1 className="a-spacing-base a-spacing-top-medium">
                {" "}
                Welcome to Prime
              </h1>
              <h4 className="a-spacing-base">
                Prime members enjoy unlimited free, fast delivery on eligible
                items, video streaming, ad-free music, free games, exclusive
                access to deals &amp; more.
              </h4>{" "}
              <span className="a-button a-button-primary" id="a-autoid-0">
                <span className="a-button-inner">
                  <a
                    href="/ap/signin?_encoding=UTF8&openid.assoc_handle=inflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Famazonprime"
                    name="submit"
                    className="a-button-text"
                    id="a-autoid-0-announce"
                  >
                    Login to join Prime
                  </a>
                </span>
              </span>
              <br />
              <br /> You cannot pay on delivery for your Prime membership. By
              signing up for a Prime membership, you agree to the{" "}
              <a
                href="/gp/help/customer/display.html?nodeId=202042460&ms3_c=2fc24eff66b2243a7ebf526a64e5b9ac"
                target="_blank"
              >
                {" "}
                Amazon Prime Terms and Conditions
              </a>
              .
            </div>
          </div>
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                "\n\n    #primeDetailPage {\n        margin: 0 auto;\n        max-width: 1400px;\n        min-width: 1000px;\n        font-size: 13px;\n        font-family: Arial;\n    }\n\n    #primeDetailPage .checkPrime {\n        height: 29px;\n    }\n\n    #primeDetailPage .primeDetailPage-content-benefit h1, #primeDetailPage .primeDetailPage-content-benefit h3{\n        color: #333;\n    }\n\n    #primeDetailPage .primeDetailPage-content-benefit a, #primeDetailPage .primeDetailPage-content-benefit a:visited, #primeDetailPage .primeDetailPage-content-benefit a:link {\n        text-decoration: none;\n        color: #0066c0;\n    }\n    \n"
            }}
          />
          <div className="a-section a-padding-medium a-text-center">
            {" "}
            {/* benefits headline and subheadline */}
            <div className="a-row a-spacing-medium">
              <h1 className="primeDetailPage-content-benefit text-2xl text-center mt-2">
                Enjoy these benefits with Prime
              </h1>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4  py-10">
  <div className="flex flex-col md:flex-row items-center gap-6 ">
  <div className="md:w-1/2 w-full">
      
    </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-10">
  <div className="flex flex-col md:flex-row items-center gap-6">
    {/* Image */}
    <div className="md:w-1/2 w-full">
      <img
        src="https://m.media-amazon.com/images/G/31/prime/detail_page/Prime_Detail_Page_PC_Benefits_Delivery_1344x526._CB653891553_.jpg"
        alt="FREE One-Day and Two-Day delivery"
        className="w-full h-auto rounded"
      />
    </div>

    {/* Text Content */}
    <div className="md:w-1/2 w-full">
      <h2 className="text-2xl font-semibold mb-4">
        Unlimited FREE Same-day, 1-day delivery
      </h2>
      <p className="text-base text-gray-600 leading-relaxed">
        Why pay more for fast delivery every time you need an item
        quickly? As a Prime member, get unlimited FREE Same-Day, 1-Day
        &amp; 2-Day Delivery on eligible items from India’s largest
        online store, to over a hundred cities. Prime items that are not
        eligible for free Same-Day or 1-Day Delivery to your location,
        will always qualify for free Standard Delivery with no minimum
        purchase value. The fastest, free Prime delivery speed available
        for an item will be shown on the product page.
        <br />
        <br />
        Get Same-Day Delivery to eligible pin-codes in{" "}
        <strong>Delhi, Mumbai, Bangalore &amp; Hyderabad</strong> via the
        Prime Now App.
      </p>
      <a
        href="/b/ref=in-pr-pc-signup-delivery-lnk?node=12627912031"
        target="_blank"
        className="inline-block text-blue-600 underline mt-4"
      >
        Learn more about all Prime delivery options
      </a>
    </div>
  </div>
</div>

          </div>
          <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="https://m.media-amazon.com/images/G/31/prime/detail_page/Prime_Detail_Page_PC_VideoLaunch_1344x526._CB545971647_.jpg"
                alt="Prime Instant Video" className="w-full h-auto rounded"
              />
            </div>
            <div className="text-center w-full">
              <h2 className="text-2xl font-semibold mb-4"> Prime Video </h2>
              <h3> </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {" "}
                With your Prime membership, you have access to the latest and
                exclusive Bollywood and regional blockbusters such as Kantara,
                Jugjugg Jeeyo, Ram Setu and Hollywood movies like Batman, Fast
                &amp; Furious 9. You can also binge watch US TV shows like Young
                Sheldon, Suits and exclusive access to Prime Original Series
                Comicstaan, Breathe and Reacher. <br />
                <br /> Access Prime Video anywhere: on the go or in the comfort
                of your living room. Watch on your Android or iOS phone, tablet,
                laptop, desktop, or smart TV.{" "}
              </p>{" "}
              <a href="https://www.primevideo.com"  className="inline-block text-blue-600 underline mt-4" target="_blank">
                Visit primevideo.com
              </a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-10 space-y-16">
  {/* Prime Music */}
  <div className="flex flex-col md:flex-row items-center gap-6">
    <div className="md:w-1/2">
      <img
        src="https://m.media-amazon.com/images/G/31/marketing/prime/pdp/Robin_Benefit2._CB592209584_.jpg"
        alt="Prime Music"
        className="w-full h-auto rounded"
      />
    </div>
    <div className="md:w-1/2">
      <h2 className="text-2xl font-semibold mb-2">Prime Music</h2>
      <p className="text-gray-600 text-base leading-relaxed">
        With your Prime membership, enjoy ad-free music streaming with
        unlimited offline downloads* across 75 million songs in multiple
        languages - English, Hindi, Tamil, Punjabi, Telugu, Bengali and
        more. Enjoy Playlists and Stations specially curated by Amazon’s
        music editors across moods, activities, genres, artists and
        decades.
        <br />
        <br />
        Discover a new way to find and play music - voice controlled with
        Alexa. Simply tap on Alexa icon in your mobile app and ask for
        music. No typing, no browsing, no searching - Just ask! Listen to
        music across devices – Android &amp; iOS devices, Desktop app and
        Web Player, Amazon Fire TV sticks and Amazon Echo and other Alexa
        enabled devices.
        <br />
        <br />*Subject to devices storage
      </p>
      <a
        href="/music/prime"
        target="_blank"
        className="text-blue-600 underline mt-3 inline-block"
      >
        Listen Now
      </a>
    </div>
  </div>

  {/* Prime Gaming */}
  <div className="flex flex-col md:flex-row items-center gap-6">
    <div className="md:w-1/2">
      <img
        src="https://m.media-amazon.com/images/G/31/marketing/prime/pdp/Samus_Benefit_Desktop._CB642411917_.jpg"
        alt="Prime Gaming"
        className="w-full h-auto rounded"
      />
    </div>
    <div className="md:w-1/2">
      <h2 className="text-2xl font-semibold mb-2">Prime Gaming</h2>
      <p className="text-gray-600 text-base leading-relaxed">
        Get free downloadable games every month and explore an evolving
        set of additional gaming benefits like daily challenges and more.
      </p>
      <a
        href="https://www.amazon.in/b?node=2134525403"
        target="_blank"
        className="text-blue-600 underline mt-3 inline-block"
      >
        Explore Prime Gaming
      </a>
    </div>
  </div>

  {/* Unlimited 5% Cashback */}
  <div className="flex flex-col md:flex-row items-center gap-6">
    <div className="md:w-1/2">
      <img
        src="https://m.media-amazon.com/images/G/31/Pay/CBCC/BOX._CB433739796_.png"
        alt="Amazon Pay ICICI Bank Credit Card"
        className="w-full h-auto rounded"
      />
    </div>
    <div className="md:w-1/2">
      <h2 className="text-2xl font-semibold mb-2">Unlimited 5% cashback</h2>
      <p className="text-gray-600 text-base leading-relaxed">
        Eligible Prime members earn unlimited 5% cashback on all purchases
        on Amazon.in using the Amazon Pay ICICI Bank credit card. You can
        also earn unlimited 2% cashback on payments at 100+ Amazon Pay
        partner merchants and 1% cashback on all other payments (except
        fuel purchases). Currently available in 35 cities across India.
      </p>
      <a
        href="https://www.amazon.in/cbcc/marketpage?ref=cbcc_slashprime_fteligible"
        target="_blank"
        className="text-blue-600 underline mt-3 inline-block"
      >
        Know More
      </a>
    </div>
  </div>

  {/* Prime Reading */}
  <div className="flex flex-col md:flex-row items-center gap-6">
    <div className="md:w-1/2">
      <img
        src="https://m.media-amazon.com/images/G/31/prime/detail_page/2018/Sep/Slash-Prime-BTF._CB623230677_.png"
        alt="Prime Reading"
        className="w-full h-auto rounded"
      />
    </div>
    <div className="md:w-1/2">
      <h2 className="text-2xl font-semibold mb-2">Prime Reading</h2>
      <p className="text-gray-600 text-base leading-relaxed">
        Read as much as you want from hundreds of eligible eBooks, comics
        and more. With a catalogue across literature and fiction, quick
        reads, romance, non-fiction, and eBooks in Indian languages, you
        will always find something to read.
        <br />
        <br />
        You can enjoy Prime Reading on your Kindle E-reader, or install
        the free Kindle reading apps on mobile, tablet, PC or Mac. You can
        also try Prime Reading on the 2MB Kindle Lite Android app designed
        for Indian readers.
      </p>
      <a
        href="https://www.amazon.in/primereading?ref=slashprime"
        target="_blank"
        className="text-blue-600 underline mt-3 inline-block"
      >
        Explore Prime Reading
      </a>
    </div>
  </div>

  {/* Prime Logo Info */}
  <div className="flex flex-col md:flex-row items-center gap-6">
    <div className="md:w-1/2">
      <img
        src="https://m.media-amazon.com/images/G/31/prime/detail_page/Prime_Detail_Page_PC_Check_prime_1344x526._CB485969112_.jpg"
        alt="Look for the Prime logo"
        className="w-full h-auto rounded"
      />
    </div>
    <div className="md:w-1/2">
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        Look for
        <img
          src="https://m.media-amazon.com/images/G/31/marketing/prime/detail_page/checkPrime._CB483586779_.png"
          alt="Prime Logo"
          className="w-8 h-8 inline-block"
        />
      </h2>
      <p className="text-gray-600 text-base leading-relaxed mt-2">
        Items eligible for Prime delivery benefits (free One-Day, Two-Day
        and Standard Delivery) are clearly marked. Just look for the Prime
        logo next to products when you search. Choose the Prime logo
        filter to view Prime items only.
        <br />
        <br />
        As a Prime member, you can update your delivery pin-code on
        product pages to see the fastest, free delivery option next to the
        Prime logo. You can see all Prime delivery options available for
        your order at Checkout.
      </p>
      <p className="text-gray-600 text-base leading-relaxed mt-4">
        Prime offers a safe and convenient shopping experience on
        <img
          src="https://m.media-amazon.com/images/G/31/search/fba._CB485936067_.png"
          alt="FBA"
          className="inline w-16 h-auto mx-2"
        />
        items and items fulfilled by qualified sellers who meet our high
        delivery performance standards.
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Prime