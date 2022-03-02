import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import ProductDescription from "./ProductDescription";
import productImage from "../assets/profilelistimage.jpg";
import productImage2 from "../assets/cart.png";
import product3 from "../assets/product3.svg";

const ProductPage = () => {
  return (
    <div style={{ backgroundColor: "#F6F8FA" }}>
      <Navbar />

      <div class="container mx-auto px-6 pt-24 pb-5">
        <ProductDescription />
      </div>

      {/* Similar items */}
      <div class="container mx-auto px-6 ">
        <div class="w-full h-12 bg-white rounded-lg flex items-center ">
          <h3 class="pl-2 text-left">Similar items</h3>
        </div>
      </div>

      {/* Similar items  Lists*/}
      <div class="container mx-auto pb-16 px-6 my-8">
        <div class="w-full sm:bg-white sm:rounded-lg wrapper profile-list items-center flex justify-between overflow-auto whitespace-nowrap">
          <div className="  flex items-center">
            <ProductCard productImage={product3} />
            <ProductCard productImage={product3} />
            <ProductCard productImage={product3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
