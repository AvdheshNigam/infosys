import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import Home from "../components/pages/Home/Home";
import Product from "../components/pages/Product/Product";
import PageNotFound from "../components/pages/PageNotFound/PageNotFound";

const Layout = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/product/:providerName" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default Layout;
