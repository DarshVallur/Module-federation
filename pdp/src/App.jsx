import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'

import './index.scss';

import Header from 'home/Header';
import Footer from 'home/Footer';
import PDPContent from './PDPContent';

const App = () => (
  <BrowserRouter>
    <div className='text-3xl mx-auto max-w-6xl'>
      <Header />
      <div className='my-10'>
        <Routes>
          <Route path='product/:id' element={<PDPContent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('app'));
