import React from "react";
import "./App.css";
import { Home, ProductList, Product, Register, Login, Cart } from "./pages";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const user = true;

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products/:category" element={<ProductList />} />
      <Route exact path="/product/:id" element={<Product />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route
        exact
        path="/login"
        element={user ? <Navigate to="/" /> : <Login />}
      />
      <Route
        exact
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
    </Routes>
  );
};

export default App;
