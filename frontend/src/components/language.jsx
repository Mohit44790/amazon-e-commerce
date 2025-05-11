import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
      translation: {
        deliveryToDelhi: "Delivery to Delhi",
        updateLocation:"Update Location",
         accountAndList :"Account & Lists",
         return:"Returns",
         order:"& Orders",
        hello: "Hello",
        fresh: "Fresh",
        mxPlayer: "MX Player",
        sell: "Sell",
        bestSellers: "Best Sellers",
        mobiles: "Mobiles",
        todaysDeals: "Today's Deals",
        prime: "Prime",
        customerService: "Customer Service",
        newReleases: "New Releases",
        electronics: "Electronics",
        fashion: "Fashion",
        amazonPay: "Amazon Pay",
        homeKitchen: "Home & Kitchen",
        computers: "Computers"
      }
    },
    hi: {
      translation: {
        deliveryToDelhi: "दिल्ली के लिए डिलीवरी",
        updateLocation:"स्थान अपडेट करें",
        accountAndList:"खाता एवं सूचियाँ",
        return:"वापस",
         order:"& ऑर्डर",
        hello: "नमस्ते",
        fresh: "फ्रेश",
        mxPlayer: "एमएक्स प्लेयर",
        sell: "बेचें",
        bestSellers: "सर्वाधिक बिकने वाले",
        mobiles: "मोबाइल्स",
        todaysDeals: "आज की डील्स",
        prime: "प्राइम",
        customerService: "ग्राहक सेवा",
        newReleases: "नई रिलीज़",
        electronics: "इलेक्ट्रॉनिक्स",
        fashion: "फैशन",
        amazonPay: "अमेज़न पे",
        homeKitchen: "होम और किचन",
        computers: "कंप्यूटर"
      }
    },
    mr: {
      translation: {
        deliveryToDelhi: "दिल्लीसाठी वितरण",
        updateLocation:"स्थान अपडेट करा",
        accountAndList:"खाते आणि सूची",
        return:"परतावा",
         order:"& ऑर्डर",
        hello: "नमस्कार",
        fresh: "ताजे",
        mxPlayer: "एमएक्स प्लेयर",
        sell: "विक्री",
        bestSellers: "सर्वाधिक विक्री",
        mobiles: "मोबाईल",
        todaysDeals: "आजचे सौदे",
        prime: "प्राइम",
        customerService: "ग्राहक सेवा",
        newReleases: "नवीन प्रकाशन",
        electronics: "इलेक्ट्रॉनिक्स",
        fashion: "फॅशन",
        amazonPay: "अ‍ॅमेझॉन पे",
        homeKitchen: "होम आणि किचन",
        computers: "संगणक"
      }
    }
  };


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    
    resources,

    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
  });

export default i18n;
