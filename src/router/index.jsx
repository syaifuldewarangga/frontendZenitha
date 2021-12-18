import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Body from '../views/Body';
import Footer from '../components/Footer';
import DetailProduk from '../views/DetailProduk';
import CartPage from '../views/CartPage';
import TagihanPage from '../views/TagihanPage';
import CheckoutPage from '../views/CheckoutPage';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/detail-produk" element={<DetailProduk />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/tagihan-page" element={<TagihanPage />} />
        <Route path="/checkout-page" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
