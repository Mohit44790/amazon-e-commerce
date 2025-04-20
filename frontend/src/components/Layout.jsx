// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main >
        <Outlet /> {/* This is where nested routes will render */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
