import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Templates from '../components/Templates';
import DetailProduk from '../views/DetailProduk';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Templates />} />
        <Route path="/detail-produk" element={<DetailProduk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
