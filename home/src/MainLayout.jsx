import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './index.scss';
import Header from './Header';
import Footer from './Footer';
import HomeContent from './HomeContent';
import PDPContent from 'pdp/PDPContent';
import CartContent from 'cart/CartContent';

const MainLayout = () => {
  return (
    <BrowserRouter>
      <div className='text-3xl mx-auto max-w-6xl'>
        <Header />
        <div className='my-10'>
          <Routes>
            <Route path='/' element={<HomeContent />} />
            <Route path='cart' element={<CartContent />} />
            <Route path='product/:id' element={<PDPContent />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default MainLayout;
