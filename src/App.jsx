import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Shop from './shop/Shop'
import Header from './components/header/Header'
import Favorites from './pages/Favorites'
import Basket from './pages/Basket'

const App = () => {
  return (
    <BrowserRouter >
      <Header />
      <Shop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App