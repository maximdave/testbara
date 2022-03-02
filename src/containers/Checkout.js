import  {useEffect, useState}  from "react";

import payStack from "../assets/paystack.svg";
import cod from "../assets/cod.svg";
import cartImg from "../assets/cart.svg";
import CheckoutMobile from "./CheckoutMobile";
import Navbar from "../components/Navbar";

const Checkout = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => {
      const windowWidth = window.innerWidth;
      setWidth(windowWidth);
    });
  }, [window]);
  return (
    <>
    <Navbar/>
      {width < 1024 ? (
        <CheckoutMobile />
      ) : (
        <section className=" w-11/12 my-5 mx-auto ">
          <h1 className=" text-4xl">Checkout</h1>

          <section className="flex  ">
            <div className="w-9/12">
              <div className="w-full mr-6 card my-6  p-10  ">
                <p>01</p>
                <div className="flex w-full ">
                  <h3 className=" font-bold text-xl ">Shipping Details</h3>
                  <div className="w-9/12 ml-10">
                    <h4 className="font-medium text-lg">Shipping Address</h4>
                    <form className="mt-10">
                      <div className="relative">
                        <label className="text-blgrey bg-white absolute  bottom-10 left-10 text-sm">
                          Street Address
                        </label>
                        <input
                          type="text"
                          placeholder="shipping address"
                          className="border rounded-lg border-bgray placeholder-black py-3 px-4 w-full"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-10 my-8">
                        <div className="relative">
                          <label className="text-blgrey bg-white absolute  bottom-10 left-10 text-sm">
                            Street Address
                          </label>
                          <input
                            type="text"
                            className="border rounded-lg border-bgray placeholder-black py-3 px-4 w-full"
                          />
                        </div>
                        <div className="relative">
                          <label className="text-blgrey bg-white absolute  bottom-10 left-10 text-sm">
                            Street Address
                          </label>
                          <input
                            type="text"
                            className="border rounded-lg border-bgray placeholder-black py-3 px-4 w-full"
                          />
                        </div>
                        <div className="relative">
                          <label className="text-blgrey bg-white absolute  bottom-10 left-10 text-sm">
                            Street Address
                          </label>
                          <input
                            type="text"
                            className="border rounded-lg border-bgray placeholder-black py-3 px-4 w-full"
                          />
                        </div>
                      </div>
                      <div>
                        <h4>Contact</h4>

                        <div className="mt-10 grid grid-cols-3 gap-10">
                          <div className="relative">
                            <label className="text-blgrey bg-white absolute  bottom-10 left-10 text-sm">
                              Street Address
                            </label>
                            <input
                              type="text"
                              className="border rounded-lg border-bgray placeholder-black py-3 px-4 w-full"
                            />
                          </div>
                          <div className="relative">
                            <label className="text-blgrey bg-white absolute  bottom-10 left-10 text-sm">
                              Street Address
                            </label>
                            <input
                              type="text"
                              className="border rounded-lg border-bgray placeholder-black py-3 px-4 w-full"
                            />
                          </div>
                          <div></div>
                        </div>
                        <button className="float-right text-bgreen mt-10">
                          
                          Save Details
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card p-10 ">
                <p>02</p>
                <div className="flex  items-start">
                  <h3 className="font-bold text-xl">Payment Method</h3>
                  <div className="ml-12">
                    <p className="font-medium text-lg">
                      Choose a payment method
                    </p>
                    <div className="flex items-center my-6">
                      <button className="border py-3 px-6 rounded-lg mr-9">
                        <img
                          className="w-24"
                          src={payStack}
                          alt="paystack icon"
                        />
                      </button>
                      <button className="border py-2  px-4 rounded-lg flex items-center">
                        <img className="w-6" src={cod} alt="cod-icon" />
                        <p className="ml-3">Pay on Delivery</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-3/12 card ml-6 my-6 ">
              <div className="flex items-center justify-between border-b  p-6">
                <h5>Order Summary</h5>
                <button className="bg-bgreen rounded py-1 px-3 text-white">
                  Edit Order <span>(s)</span>
                </button>
              </div>
              <section className="px-2 mx-auto  h-72 overflow-hidden overflow-y-scroll">
                
               
                <div className="flex py-2 items-center">
                  <img className="w-28" src={cartImg} alt="cart-item" />
                  <div>
                    <p>Orauimo earpods tye jeehh roto </p>
                    <p>Color : black</p>
                    <p>N9000</p>
                  </div>
                </div>
                <div className="flex py-2 items-center">
                  <img className="w-28" src={cartImg} alt="cart-item" />
                  <div>
                    <p>Orauimo earpods tye jeehh roto </p>
                    <p>Color : black</p>
                    <p>N9000</p>
                  </div>
                </div>
                <div className="flex py-2 items-center">
                  <img className="w-28" src={cartImg} alt="cart-item" />
                  <div>
                    <p>Orauimo earpods tye jeehh roto </p>
                    <p>Color : black</p>
                    <p>N9000</p>
                  </div>
                </div>
                <div className="flex py-2 items-center">
                  <img className="w-28" src={cartImg} alt="cart-item" />
                  <div>
                    <p>Orauimo earpods tye jeehh roto </p>
                    <p>Color : black</p>
                    <p>N9000</p>
                  </div>
                </div>
              </section>
              <section className="px-8 mx-auto my-4">
                <div className="relative">
                  <p className="text-blgrey bg-white absolute  bottom-8 left-10 text-sm">
                    Voucher Code
                  </p>
                  <input
                    type="text"
                    className="border rounded-lg border-bgray placeholder-black py-2 px-4 w-full"
                  />
                </div>
                
                <div className="flex justify-between my-3">
                  <p>Shipping Cost</p>
                  <p>N1,000</p>
                </div>
                <div className="flex justify-between my-3">
                  <p>Discount</p>
                  <p className="text-bred">-N250</p>
                </div>
                <div className="flex justify-between my-3">
                  <p>VAT(7.5%)</p>
                  <p className="text-bgreen">N750</p>
                </div>
              </section>
              <button className="bg-bred w-full py-3 px-3 text-white">
                Confirm Purchase
              </button>
            </div>
          </section>
        </section>
        
      )}
    </>
  );
};

export default Checkout;
