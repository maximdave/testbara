import React from "react";
import "../src/styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./containers/Checkout";
import ShoppingCart from "./containers/ShoppingCart";
import Home from "./pages/index";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import AddNewProduct from "./components/AddNewProduct";
import Love from "./pages/love";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />

        <Route path="/" exact element={<Home />} />
        {/* <Route path="/product/:productId" exact component={ProductDetail} /> */}
        <Route path="/shopping-cart" exact element={<ShoppingCart />} />
        <Route path="/checkout" exact element={<Checkout />} />
        <Route path="/product" exact element={<ProductPage />} />
        <Route path="/love" exact element={<Love />} />
        <Route path="/add-product" exact element={<AddNewProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
