import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';

function App() {


  return (
    <>
      <Navbar />
      <React.StrictMode>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </React.StrictMode>

    </>
  );
}

export default App;
