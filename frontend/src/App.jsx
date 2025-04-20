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
import WomensClothing from "./pages/WomensClothing"
import SignIn from "./pages/SignIn"
import Fresh from "./pages/Fresh"
import Fashion from "./pages/Fashion"





function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Layout />,
      children:[
        {path: "/", element:<Home/>},
        { path:"/product/:id", element:<ProductDetail />},
        
        { path:"/mobiles/smartphones", element:<SmartphonesPage />},
        { path:"/bestsellers", element:<BestSellers />},
        { path:"/newrelease", element:<NewRelease />},
        { path:"/movers", element:<Movers />},
        { path:"/alexa", element:<Alexa />},
        { path:"/alexa/meet", element:<MeetAlexa />},
        { path:"/alexa/meet", element:<MeetAlexa />},
        { path:"/account", element:<Account />},
        { path:"/clothing", element:<WomensClothing />},
        { path:"/allAccessories", element:<ClothingAnd_Accessories />},
        { path:"/fresh", element:<Fresh />},
        { path:"/fashion", element:<Fashion />},
       
        { path: "/fresh", element: <Fresh />,}
        

       
      ]
    },
    {path:"/buynow",element:<Buynow/>},
    {path:"/signin",element:<SignIn/>},
    { path:"/miniTV", element:<MiniTV/>},

  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
