import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerCheckout from './pages/CustomerCheckout';
import CustomerOrders from './pages/CustomerOrders';
import CustomerProducts from './pages/CustomerProducts';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/products" element={ <CustomerProducts /> } />
      <Route exact path="/customer/checkout" element={ <CustomerCheckout /> } />
      <Route exact path="/customer/orders/:id" />
      <Route exact path="/customer/orders" element={ <CustomerOrders /> } />
    </Routes>
  );
}

export default App;
