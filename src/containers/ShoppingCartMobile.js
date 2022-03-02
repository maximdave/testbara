import back from "../assets/chevron.svg";
import cartImg from "../assets/cart.png";
import heartImg from "../assets/heart.svg";
import trash from "../assets/trash-2.svg";

const ShoppingCartMobile = () => {
  return (
    <section className="  ">
      <div className="flex rounded p-4 text-center bg-white text-2xl">
        <img className="w-8" src={back} alt="back" />
        <h1 className="ml-20">Shopping Bag</h1>
      </div>
      <section className="mt-5 w-11/12 mx-auto">
        <div className="cart-item items-center bg-white px-4 py-2 rounded">
          <div>
            <img src={cartImg} alt="cart-img" />
          </div>
          <div className="">
            <div className="flex justify-between">
              <div>
                <p>From Axella Store</p>
                <p className="text-bred text-sm my-1">£2300</p>
              </div>
              <div className="actions flex">
                <img className="w-5" src={heartImg} alt="love" />
                <img className="w-5 ml-3" src={trash} alt="delete" />
              </div>
            </div>
            <p className="my-1 border-b pb-2 text-sm">
              Orauimo earpods tye jeehh roto pack kello fine end pet 230 ....
            </p>
            <div className="flex justify-between items-center mt-2">
              <div className="border flex rounded-lg items-center px-2 py-1">
                <button>-</button>
                <p className="border text-sm py-1 px-3 mx-3">2</p>
                <button>+</button>
              </div>
              <p>Sub Total: ₦ 100,000</p>
            </div>
          </div>
        </div>
      </section>
      <section className="price-summary">
          <div className="bg-white mt-4 px-10 py-5">
              <p className="text-bgreen my-1">Total: ₦100,000</p>
              <div className="flex flex-col my-1">
              <button className="bg-borange rounded p-3 my-3 text-white">
              Checkout
              </button>
              <button className="border-bred border p-3 rounded">
              Continue Shopping
              </button>
              </div>

          </div>

      </section>
    </section>
  );
};

export default ShoppingCartMobile;
