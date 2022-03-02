import React from "react";

import productSample from "../assets/productSample.svg";
import profileIcon from "../assets/profilelogo.svg";
import rating from "../assets/rating.svg";
import loveIcon from "../assets/love.svg";
import cartIcon from "../assets/cartIcon.svg";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";

const ProductDescription = () => {
  return (
    <div class="w-full  bg-white rounded-xl">
      <div class="lg:grid lg:grid-cols-2">
        {/* Left side */}
        <div class="h-full w-full col-span-1 flex items-center justify-center">
          <div class="overflow-hidden">
            <div class="relative ">
              <span class="absolute left-5 top-1/2  rounded-full h-10 w-10 flex items-center justify-center">
                <img class=" " src={arrowLeft} alt="image1" />
              </span>
              <img
                class="w-full object-cover  cursor-pointer "
                src={productSample}
                alt="image1"
              />
              <span class="absolute right-5 top-1/2  rounded-full h-10 w-10 flex items-center justify-center z-0">
                <img class=" " src={arrowRight} alt="image1" />
              </span>
            </div>
          </div>
        </div>

        {/* Right side */}

        <div class="col-span-1 flex justify-center px-2">
          <div class="">
            <div className="star-container border border-gray-100 rounded-2xl mt-2 px-2">
              <div className="flex items-center  justify-between">
                <div className="flex items-center">
                  <img className="w-7 " src={profileIcon} alt="profile-icon" />
                  <p className="ml-2 text-sm">bargain_hunterco</p>
                </div>
                <div className="my-5">
                  <img className="w-20" src={rating} alt="More-info" />
                </div>
              </div>

              <div className="flex items-center  justify-around -mt-6 ">
                <div className="flex items-center mr-6">
                  <img className="w-5 mr-2" src={loveIcon} alt="love-icon" />
                  <p>35</p>
                </div>
                <div className="flex  mr-6 ">
                  <img className="w-5 mr-2 " src={cartIcon} alt="love-icon" />
                  <p>1(s) item added to cart</p>
                </div>
                <div className="my-5 text-bold flex items-center">
                  <p>5.0</p>
                </div>
              </div>
            </div>

            <div className="px-2 border-b-2 ">
              <p className="pt-2 font-semibold">Short print dress</p>
              <p className="pt-2 font-semibold">N6800</p>
              <p className="pt-4 leading-4 overflow-auto">
                Size 12 & 14 100% polyester PRK, black print color dress... Size
                12 & 14 100% polyester PRK, black print color dress... Size 12 &
                14 100% polyester PRK, black print color dress...
              </p>
              <p className="flex justify-end p-4 text-gray-500">
                scroll for more
              </p>
            </div>

            <div className="px-2 py-2 border-b-2">
              <p className="pt-4 font-semibold text-xl border-b-2 w-24 mb-4 text-gray-500">
                Comments
              </p>
              <div className="leading-5 overflow-auto h-32">
                <p className="pt-2 font-semibold">
                  Tombara
                  <span className="pl-2 font-normal">
                    love it! I want to get one. the material is awesome.
                  </span>
                </p>
                <p className="pt-2 font-semibold ">
                  Ifeluv12
                  <span className="pl-2 font-normal">
                    love it! I want to get one. the material is awesome. I
                    bought this cloth and i expecteted it to wash and fade but
                    it reamained sam. it is also washing machine friendly. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. A totam,
                    neque repellendus sed at maxime omnis iste cupiditate dolore
                    velit aut, molestias ipsa sint fugiat architecto saepe quis
                    in suscipit.
                  </span>
                </p>
              </div>

              <p className="flex justify-end pt-4 pr-4 pb-2 text-gray-500">
                scroll for more
              </p>
            </div>

            <div className="pr-4 py-2">
              <form className="flex items-center  justify-between">
                <input
                  className="border w-4/5 py-3 pl-3 rounded-full  lg:border-none"
                  placeholder="Add comment"
                />
                <button
                  class="inline font-bold text-green-500 justify-end"
                  type="button"
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
