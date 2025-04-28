import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Favorites from '../favorites/Favorites';
import Basket from '../basket/Basket';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/basket' element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;