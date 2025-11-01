import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import $ from "jquery";
import "jquery/dist/jquery.min.js";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router basename="/Jwellery-website">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/productdetail" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
