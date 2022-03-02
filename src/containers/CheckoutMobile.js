import payStack from "../assets/paystack.svg";
import cod from "../assets/cod.svg";
import cartImg from "../assets/cart.svg";
import CheckoutDetails from "./CheckoutDetails";
import Navbar from "../components/Navbar";

const CheckoutMobile = () => {
  return (
    <>
      <div className="">
        <section className="pt-20 w-11/12  mx-auto z-10 overflow-hidden ">
          <div className="w-11/12 mx-auto  overflow-y-scroll">
            <h1>Order Summary</h1>
            <p>01</p>
            <p>Shipping Details</p>
            <div className="z-10">
              <h4 className="font-medium text-lg">Shipping Address</h4>
              <form className="mt-10">
                <div className="relative my-4">
                  <label className="text-blgrey bg-white absolute  bottom-10 left-10 text-sm">
                    Street Address
                  </label>

                  <input
                    type="text"
                    placeholder="shipping address"
                    className="border rounded-lg border-bgray placeholder-black py-3 px-4 w-full"
                  />
                </div>
                <div className="">
                  <div className="relative my-4">
                    <label className="text-blgrey bg-white absolute  bottom-10 left-10 text-sm">
                      Street Address
                    </label>
                    <input
                      type="text"
                      className="border rounded-lg border-bgray placeholder-black py-3 px-4 w-full"
                    />
                  </div>
                  <div className="relative my-4">
                    <label className="text-blgrey bg-white absolute  bottom-10 left-10 text-sm">
                      Street Address
                    </label>
                    <input
                      type="text"
                      className="border rounded-lg border-bgray placeholder-black py-3 px-4 w-full"
                    />
                  </div>
                  <div className="relative my-4">
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

                  <div className="mt-5 ">
                    <div className="relative my-4">
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
                  <button className="text-bgreen mt-10">Save Details</button>
                </div>
              </form>
            </div>
            <div className="card  ">
              <p>02</p>
              <div className="">
                <h3 className="font-bold text-xl">Payment Method</h3>
                <div className="">
                  <p className="font-medium text-lg">Choose a payment method</p>
                  <div className="">
                    <button className=" w-full border py-3 px-6 rounded-lg">
                      <img
                        className="w-24"
                        src={payStack}
                        alt="paystack icon"
                      />
                    </button>
                    <button className=" w-full my-4  border py-2  px-4 rounded-lg flex items-center">
                      <img className="w-6" src={cod} alt="cod-icon" />
                      <p className="ml-3">Pay on Delivery</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <section>
              <div>
                <h3>My Cart</h3>
                <section className=" mx-auto">
                  <div className="flex py-5 items-center">
                    <img className="w-28" src={cartImg} alt="cart-item" />
                    <div>
                      <p>Orauimo earpods tye jeehh roto </p>
                      <p>Color : black</p>
                      <p>N9000</p>
                    </div>
                  </div>
                  <div className="flex py-5 items-center">
                    <img className="w-28" src={cartImg} alt="cart-item" />
                    <div>
                      <p>Orauimo earpods tye jeehh roto </p>
                      <p>Color : black</p>
                      <p>N9000</p>
                    </div>
                  </div>
                  <div className="flex py-5 items-center">
                    <img className="w-28" src={cartImg} alt="cart-item" />
                    <div>
                      <p>Orauimo earpods tye jeehh roto </p>
                      <p>Color : black</p>
                      <p>N9000</p>
                    </div>
                  </div>
                  <div className="flex py-5 items-center">
                    <img className="w-28" src={cartImg} alt="cart-item" />
                    <div>
                      <p>Orauimo earpods tye jeehh roto </p>
                      <p>Color : black</p>
                      <p>N9000</p>
                    </div>
                  </div>
                  <div className="flex py-5 items-center">
                    <img className="w-28" src={cartImg} alt="cart-item" />
                    <div>
                      <p>Orauimo earpods tye jeehh roto </p>
                      <p>Color : black</p>
                      <p>N9000</p>
                    </div>
                  </div>
                  <div className="flex py-5 items-center">
                    <img className="w-28" src={cartImg} alt="cart-item" />
                    <div>
                      <p>Orauimo earpods tye jeehh roto </p>
                      <p>Color : black</p>
                      <p>N9000</p>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </section>
        <CheckoutDetails/>
        {/* <section className=" mx-auto my-4 absolute">
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
            <p>Subtotal</p>
            <p>N27,000</p>
          </div>
          <div className="flex justify-between my-3">
            <p>Subtotal</p>
            <p>N27,000</p>
          </div>
          <div className="flex justify-between my-3">
            <p>Subtotal</p>
            <p>N27,000</p>
          </div>
          <div className="flex justify-between my-3">
            <p>Subtotal</p>
            <p>N27,000</p>
          </div>
          <div className="flex justify-between my-3">
            <p>Subtotal</p>
            <p>N27,000</p>
          </div>
          <div className="flex justify-between my-3">
            <p>Total</p>
            <p>N27,000</p>
          </div>
          <button className="bg-bred w-full py-3 px-3 text-white">
            Confirm Purchase
          </button>
        </section> */}
      </div>
    </>
  );
};

export default CheckoutMobile;
