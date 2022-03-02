import React, { useState } from "react";
import Navbar from "./Navbar";
import productSample from "../assets/productSample.svg";
import profileIcon from "../assets/profilelogo.svg";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";
import plus from "../assets/plus.svg";
import frownEmoji from "../assets/frownEmoji.svg";
import Footer from "./Footer";

const AddNewProduct = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ backgroundColor: "#F6F8FA" }}>
      <Navbar />

      <form action="#" method="POST">
        <div class="container mx-auto px-6 pt-24 pb-5">
          <div class="w-full  bg-white rounded-xl">
            <div class="lg:grid lg:grid-cols-2">
              {/* Left side */}
              <div class="h-full w-full col-span-1 flex items-center justify-center">
                <div class="">
                  <div class="relative ">
                    <span class="absolute left-5 top-1/2  rounded-full h-10 w-10 flex items-center justify-center cursor-pointer">
                      <img class=" " src={arrowLeft} alt="image1" />
                    </span>
                    <img
                      class="w-full object-cover"
                      src={productSample}
                      alt="image1"
                    />
                    <span class="absolute right-5 top-1/2 rounded-full h-10 w-10 flex items-center justify-center z-0 cursor-pointer">
                      <img class=" " src={arrowRight} alt="image1" />
                    </span>

                    <span className="cursor-pointer">
                      <span class="absolute inset-x-1/2 left-28 bottom-8  lg:inset-x-52 lg:bottom-32 rounded-full  flex items-center">
                        <span className="cursor-pointer">
                          <button
                            className="cursor-pointer flex rounded-full  hover:bg-sky-700 bg-white hover:bg-sky-700 text-sm px-2 py-2"
                            disabled
                          >
                            <img
                              class="w-4 h-4 object-cover cursor-pointer "
                              src={plus}
                              alt="image1"
                            />
                            <span className="cursor-pointer">
                              <p className="w-32 pr-2 font-normal cursor-pointer">
                                Add more media
                              </p>
                            </span>
                          </button>
                        </span>
                      </span>
                      <input
                        type="file"
                        class="opacity-0 absolute inset-x-1/2 left-28 bottom-8  lg:inset-x-52 lg:bottom-32 rounded-full  flex items-center cursor-pointer"
                        name=""
                      />
                    </span>
                  </div>
                </div>
              </div>

              {/* Right side */}

              <div class="col-span-1 flex px-2">
                <div class="w-full pt-2">
                  <div className=" rounded-2xl mt-2 px-2 flex">
                    <img
                      className="w-7 "
                      src={profileIcon}
                      alt="profile-icon"
                    />
                    <p className="ml-2 text-sm">bargain_hunterco</p>
                  </div>
                  <div className="w-full py-6">
                    <textarea
                      class=" w-full lg:h-96 px-3 py-2 text-gray-700  rounded-lg focus:outline-none resize-none "
                      placeholder="Type Description"
                      onChange={(e) => setCount(e.target.value.length)}
                      rows="4"
                    ></textarea>
                    <div className="flex items-center justify-between px-6 border-b-2 w-full">
                      <div>
                        <img
                          className="w-6 h-6 "
                          src={frownEmoji}
                          alt="profile-icon"
                        />
                      </div>
                      <div className="p-4 text-gray-500">
                        <span>{count}/2000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>

        {/* Similar items */}
        <div class="container mx-auto px-6">
          <div class="w-full  sm:bg-white rounded-xl bg-white">
            <div className=" md:mt-0 md:col-span-2 text-gray-800">
              <div className="px-4   sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <input
                      type="text"
                      placeholder="Title"
                      name="title"
                      id="title"
                      autoComplete="title"
                      className="focus:outline-none border-b-2 mt-1 block w-full pb-4"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <select
                      id="size"
                      name="size"
                      autoComplete="size"
                      className="focus:outline-none border-b-2 mt-1 block w-full pb-5"
                    >
                      <option>Add Size Variants</option>
                      <option>Size 1</option>
                      <option>Size 2</option>
                      <option>Size 3</option>
                      <option>Size 4</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <input
                      type="text"
                      placeholder="Price"
                      name="price"
                      id="price"
                      autoComplete="price"
                      className="focus:outline-none border-b-2 mt-1 block w-full pb-4"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <input
                      type="text"
                      placeholder="Add Discount by percentage"
                      name="discount"
                      id="discount"
                      autoComplete="discount"
                      className="focus:outline-none border-b-2 mt-1 block w-full pb-4"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <select
                      id="type"
                      name="type"
                      autoComplete="type"
                      className="focus:outline-none border-b-2 mt-1 block w-full pb-4"
                    >
                      <option>Type</option>
                      <option>Product</option>
                      <option>Service</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <select
                      id="period"
                      name="period"
                      autoComplete="period"
                      className="focus:outline-none border-b-2 mt-1 block w-full pb-4"
                    >
                      <option>Sale Availabity Period</option>
                      <option>Period 1</option>
                      <option>Period 2</option>
                      <option>Period 3</option>
                      <option>Period 4</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <select
                      id="category"
                      name="category"
                      autoComplete="category"
                      className="focus:outline-none border-b-2 mt-1 block w-full pb-5"
                    >
                      <option>Category</option>
                      <option>Category 1</option>
                      <option>Category 2</option>
                      <option>Category 3</option>
                      <option>Category 4</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <input
                      type="text"
                      placeholder="Location"
                      name="location"
                      id="location"
                      autoComplete="location"
                      className="focus:outline-none border-b-2 mt-1 block w-full pb-4"
                    />
                  </div>

                  <div className="flex items-start col-span-6 sm:col-span-3">
                    <div className="ml-3 text-sm">
                      <p className="text-gray-500">Available</p>
                    </div>
                    <div className="flex items-center h-5">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="focus:outline-none ml-4 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                  </div>

                  <div className="flex items-start col-span-6 sm:col-span-3">
                    <div className="ml-3 text-sm">
                      <p className="text-gray-500">Publish Product Location</p>
                    </div>
                    <div className="flex items-center h-5">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="ml-4 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container mx-auto px-6 pt-6  divide-y divide-gray-300">
          <div></div>
          <div></div>
        </div>

        <div class="container mx-auto px-6 pb-5 flex justify-end items-center -mt-4">
          <button className="ml-6 text-bgreen bg-white mt-10 rounded-lg uppercase font-bold w-48 py-1">
            Draft
          </button>
          <button className="ml-6 text-white bg-green-500 mt-10 uppercase font-bold rounded-lg w-48 py-1">
            post
          </button>
        </div>
      </form>

      <div class="container mx-auto px-6 py-6">
        <div class="w-full text-gray-500">
          <p className="text-center my-2 font-medium">About Barafiri</p>
          <div className="grid grid-cols-2 my-4 gap-4 text-center lg:mx-96">
            <p className="text-sm">24/7 support</p>
            <p className="text-sm">Make a report</p>
            <p className="text-sm">Privacy Policy</p>
            <p className="text-sm">Terms of service</p>
          </div>
          <p className="text-center my-8 text-base">copyright GPI</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
