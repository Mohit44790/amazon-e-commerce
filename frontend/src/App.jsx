import { createBrowserRouter, RouterProvider} from "react-router"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import ProductDetail from "./components/ProductDetail"
import Buynow from "./pages/Buynow"
import SmartphonesPage from "./pages/SmartphonesPage"
import BestSellers from "./pages/BestSellers"
import NewRelease from "./pages/NewRelease"
import Movers from "./pages/Movers"
import MiniTV from "./pages/MiniTV"
import Alexa from "./pages/Alexa"
import MeetAlexa from "./pages/MeetAlexa"
import Account from "./pages/Account"
import ClothingAnd_Accessories from "./pages/ClothingAnd_Accessories"
import SignIn from "./pages/SignIn"
import Fresh from "./pages/Fresh"
import Fashion from "./pages/Fashion"
import Sell from "./pages/Sell"
import TodayDeal from "./pages/TodayDeal"
import CustomerService from "./pages/CustomerService"
import HomeAndKitchen from "./pages/HomeAndKitchen"
import Computers from "./pages/Computers"
import SignUp from "./pages/SignUp"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductList from "./admin/ProductList"
import CreateProduct from "./admin/CreateProduct"
import UpdateProduct from "./admin/UpdateProduct"
import AdminDashboard from "./admin/AdminDashboard"
import AdminLayout from "./admin/AdminLayout"
import CreateBrand from "./admin/CreateBrand"
import CreateCategory from "./admin/CreateCategory"
import AdminUserList from "./admin/AdminUserList"
import MensClothing from "./pages/MensCollection/MensClothing"
import CategoryPage from "./pages/MensCollection/CategoryPage"
import AdminCategoryDetails from "./admin/AdminCategoryDetails"
import CategoryDetails from "./pages/CategoryDetails"
import WomenClothes from "./pages/womenCollection/WomenClothes"
import Mobiles from "./pages/AllMobiles/Mobiles"
import AllMobilesAccessories from "./pages/AllMobiles/AllMobilesAccessories"
import TShirtsPolos from "./pages/MensCollection/TShirtsPolos"
import Shirts from "./pages/MensCollection/Shirts"
import Jeans from "./pages/MensCollection/Jeans"
import WomenTopBrands from "./pages/womenCollection/WomenTopBrands"
import BrandPage from "./admin/BrandPage"
import CategoryForm from "./admin/CategoryForm"
import CheckoutPage from "./pages/CheckoutPage"
import OrderSuccess from "./pages/OrderSuccess"
import AdminOrderPage from "./admin/AdminOrderPage"
import MyOrdersPage from "./pages/MyOrdersPage"
import AddressPage from "./pages/AddressPage"
import CreatePromotion from "./admin/CreatePromotion"
import PromotionsList from "./admin/PromotionsList"
import SeasonSale from "./pages/SeasonSale"
import OfferProductCard from "./components/OfferProductCard"
import Prime from "./pages/Prime"
import AssignGiftCard from "./admin/AssignGiftCard"
import GiftCardList from "./components/GiftCardList"
import RedeemGiftCard from "./components/RedeemGiftCard"
import AdminCreateGiftCard from "./admin/AdminCreateGiftCard"
import GroceryList from "./admin/GroceryList"
import GroceryForm from "./admin/GroceryForm"
import GroceryDetails from "./pages/GroceryDetails"
import WomenWesternWear from "./pages/womenCollection/WomenWesternWear"
import WomenEthiceWear from "./pages/womenCollection/WomenEthiceWear"
import Watches from "./pages/MensCollection/Accessories/Watches"
import BagsAndLuggage from "./pages/MensCollection/Accessories/BagsAndLuggage"
import Sunglasses from "./pages/MensCollection/Accessories/Sunglasses"
import Jewellery from "./pages/MensCollection/Accessories/Jewellery"
import Wallets from "./pages/MensCollection/Accessories/Wallets"
import Shoes from "./pages/MensCollection/Men's Shoes/Shoes"
import WomenWatches from "./pages/womenCollection/Accessories/WomenWatches"
import WristWatches from "./pages/womenCollection/Accessories/WristWatches"
import Electronics from "./pages/Electronics/Electronics"
import Amazonpay from "./pages/Amazonpay"






function App() {
  

  const router = createBrowserRouter([
    {
      path: "/", element: <Layout />,
      children:[
        {path: "/", element:<Home/>},
        { path:"/product/:id", element:<ProductDetail />},
        { path:"/offer-product/:id", element:<OfferProductCard />},
        { path:"/mens-clothes", element:<MensClothing />},
        // mobile
        { path:"/mobiles/allmobiles", element:<Mobiles />},
        { path:"/allmobiles/allaccessories", element:<AllMobilesAccessories />},
        { path:"/amazonpay", element:<Amazonpay />},
        
        { path:"/mobiles/smartphones", element:<SmartphonesPage />},
        { path:"/bestsellers", element:<BestSellers />},
        { path:"/newrelease", element:<NewRelease />},
        { path:"/movers", element:<Movers />},
        { path:"/alexa", element:<Alexa />},
        { path:"/alexa/meet", element:<MeetAlexa />},
        { path:"/alexa/meet", element:<MeetAlexa />},
        { path:"/account", element:<Account />},
        { path:"/allAccessories", element:<ClothingAnd_Accessories />},
        { path:"/fresh", element:<Fresh />},
        { path:"/grocery/:id", element:<GroceryDetails />},
        { path:"/fashion", element:<Fashion />},
        { path:"/sell", element:<Sell />},
        { path:"/todayDeal", element:<TodayDeal />},
        { path:"/prime", element:<Prime />},
        { path:"/customer", element:<CustomerService />},
        { path:"/home-kitchen", element:<HomeAndKitchen />},
        { path:"/computer", element:<Computers />},
        { path: "/my-orders", element: <MyOrdersPage /> },
        { path: "/fresh", element: <Fresh />},
        {path:"/addresses", element:<AddressPage />},
        {path:"/season-sale", element:<SeasonSale />},
            {path:"/category/:categorySlug", element:<CategoryPage />} ,
            {path:"/categorys/:slug", element:<CategoryDetails />} ,
            { path: "/user/giftcards", element: <GiftCardList /> },
            { path: "/user/giftcards/redeem", element: <RedeemGiftCard /> },
            //electronics 
            {path:"/electronics",element:<Electronics/>},
            // men 
            { path: "/t-Shirts", element: <TShirtsPolos />},  
            { path: "/shirts", element: <Shirts />},  
            { path: "/jeans", element: <Jeans />}, 
            { path: "/watches", element: <Watches />}, 
            { path: "/bags-luggage", element: <BagsAndLuggage />}, 
            { path: "/sunglasses", element: <Sunglasses />}, 
            { path: "/jewellery", element: <Jewellery />}, 
            { path: "/wallets", element: <Wallets />}, 
            { path: "/shoes", element: <Shoes />}, 
            // women 
        { path:"/clothing", element:<WomenClothes />},

            { path: "/women-topbrand", element: <WomenTopBrands />}, 
            { path: "/western-Wear", element: <WomenWesternWear />}, 
            { path: "/ethic-Wear", element: <WomenEthiceWear />}, 
            { path: "/wfashion_watches", element: <WomenWatches />}, 
            { path: "/wrist-watches", element: <WristWatches />}, 

       
      ]
    },
    {path:"/buynow",element:<Buynow/>},
    {path:"/order", element:<CheckoutPage />},
    {path: "/delivery-status/:id", element: <OrderSuccess /> },
    {path:"/signin",element:<SignIn/>},
    {path:"/signup",element:<SignUp/>},
    { path:"/miniTV", element:<MiniTV/>},

    {path:"/admin", element:<AdminLayout />,
      children:[
        { path:"/admin/products", element:<ProductList/>},
        { path:"/admin/product/create", element:<CreateProduct/>},
        { path:"/admin/product/update/:id", element:<UpdateProduct/>},
        { path: "/admin/dashboard", element: <AdminDashboard /> },
        {path:"/admin/create-brand", element:<CreateBrand />},
        {path:"/admin/create-category", element:<CreateCategory />},
       {path:"/admin/categories/Edit", element:<CategoryForm />},
         {path:"/admin/categories/edit/:id" ,element:<CategoryForm />},
        {path:"/admin/getuser", element:<AdminUserList />},
        {path:"/admin/category/:slug", element:<AdminCategoryDetails />},
        {path:"/admin/brand", element:<BrandPage />},
        {path:"/admin/orders", element:<AdminOrderPage />},
        {path:"/admin/promotions/create" ,element:<CreatePromotion />},
        {path:"/admin/promotions" ,element:<PromotionsList />},
         {path:"/admin/giftcards/create" ,element:<AdminCreateGiftCard />},
         {path:"/admin/giftcards/assign" ,element:<AssignGiftCard />},
         {path:"/admin/groceries" ,element:<GroceryList />},
         {path:"/admin/grocery/create" ,element:<GroceryForm />},

      ]
    }
    

  ])

  return (
    <>
     <ToastContainer position="top-right" autoClose={3000} />
    <RouterProvider router={router} />
    </>
  )
}

export default App
