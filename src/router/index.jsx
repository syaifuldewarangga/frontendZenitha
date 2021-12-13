import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Templates from '../components/Templates';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Templates />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
