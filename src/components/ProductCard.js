import { useState } from "react";
import profileIcon from "../assets/profilelogo.svg";
import moreInfoIcon from "../assets/dots.svg";
// import product from "../assets/profilelistimage.jpg";
import loveIcon from "../assets/love.svg";
import rating from "../assets/rating.svg";
import cart from "../assets/cart.svg";
import comment from "../assets/chat.svg";

const ProductCard = ({productImage}) => {
  const [showDropdown, setShowDropDown] = useState(false);

  const handleClick = () => {
    setShowDropDown(!showDropdown);
  };

  return (
    <>
      <div className="card rounded-xl shadow-lg cursor-pointer p-3 relative">
        {showDropdown && (
          <div
            className="border w-32 absolute bg-white right-3 top-16  rounded"
            onClick={handleClick}
          >
            <p className="py-2 px-3 cursor-pointer hover:bg-bogrey rounded-sm text-xs">
              Follow User
            </p>
            <p className="py-2 px-3 cursor-pointer hover:bg-bogrey text-xs">
              Save
            </p>
          </div>
        )}
        <div className="flex items-center  justify-between">
          <div className="flex items-center">
            <img className="w-7 " src={profileIcon} alt="profile-icon" />
            <p className="ml-2 text-sm">bargain_hunterco</p>
          </div>
          <div className="my-5" onClick={handleClick}>
            <img className="w-4" src={moreInfoIcon} alt="More-info" />
          </div>
        </div>
        <div>
          <img className="rounded-xl w-full object-cover" src={productImage} alt="product" />
        </div>
        <div className="flex justify-between mt-4 px-1">
          <div className="product-ratings  flex items-center">
            <div className="flex items-center mr-6">
              <img className="w-5 mr-2" src={loveIcon} alt="love-icon" />
              <p>12</p>
            </div>
            <div className="flex items-center mr-6">
              <img className="w-5 mr-2" src={comment} alt="love-icon" />
              <p>14</p>
            </div>
            <div className="flex items-center mr-6">
              <img className="w-5 mr-2" src={cart} alt="cart" />
            </div>
          </div>
          <img src={rating} alt="rating" />
        </div>
        <div className="flex justify-between my-3 px-1">
          <p className="product-name font-medium">Short print dress</p>
          <p className="price font-medium">N6800</p>
        </div>
        <p className="product-description p-1 text-base">
          Size 12 & 14 100% polyester PRK, black print color dress...
        </p>
        <div className="flex my-2 ">
          <p className="text-gray-500 text-sm">Tombara love it! </p>
          <img className="ml-2 w-4" src={loveIcon} alt="love-icon" />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
