import React from "react";

const CheckoutDetails = () => {
  return <div className="fixed bottom-0 border shadow-lg border-t-0 left-0 right-0 bg-white">

<section className="px-8 py-6 mx-auto shadow-lg border ">
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
                
               
                <div className="flex justify-between my-3">
                  <p className="text-xl text-semibold">Total</p>
                  <p className="text-xl text-semibold">N27,000</p>
                </div>
              </section>
              <button className="bg-bred w-full py-3 px-3 text-white">
                Confirm Purchase
              </button>
  </div>;
};

export default CheckoutDetails;
