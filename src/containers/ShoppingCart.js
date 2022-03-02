import {useEffect, useState} from "react";
import cartImg from "../assets/cart.png";
import heartImg from "../assets/heart.svg";
import trash from "../assets/trash-2.svg";
import ShoppingCartMobile from "./ShoppingCartMobile";

const ShoppingCart = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
      window.addEventListener("resize", () => {
        const windowWidth = window.innerWidth;
        setWidth(windowWidth);
      });
    }, [window]);
  return (
    <>
    { width < 1024 ? <ShoppingCartMobile/>: 
    <section className=" w-8/12 my-10 mx-auto bg-mgray py-5 px-10 ">
      <h1 className="rounded bg-white text-4xl p-10">Shopping Bag</h1>

      <div className="flex w-full justify-end py-3">
        <h3 className="mx-14 text-bhgray text-lg">Quantity</h3>
        <h3 className="mx-14 text-bhgray text-lg">Price</h3>
        <h3 className="mx-14 text-bhgray text-lg">SubTotal</h3>
      </div>

      <div className="cart-card rounded-lg  items-center bg-white flex mb-4">
        <div className="w-2/12 mx-auto">
          <img src={cartImg} alt="cart-img" />
        </div>

        <div className="w-10/12 px-5">
          <div>
            <div className="flex items-center my-1">
              <div className=" w-4/12 mr-20">
                <p className="text-lg my-1">
                  From <span className="text-tred">Axella Store</span>
                </p>
                <p className="text-lg my-1 ">
                  Orauimo earpods tye jeehh roto pack kello fine end pet 230
                  ....
                </p>
              </div>
              <div className="flex  items-center w-7/12 mx-auto justify-between ">
                <div className="border flex rounded-lg items-center py-2 px-5">
                  <button>-</button>
                  <p className="border text-sm py-1 px-3 mx-3">2</p>
                  <button>+</button>
                </div>
                <p className="border py-3 px-7 rounded-lg">£2300</p>
                <p className="border py-3 px-5  rounded-lg">£10,004,600</p>
              </div>
            </div>
            <div className="divider mr-2"></div>
            <div className="flex items-center my-3">
              <button className="flex items-center">
                <img className="mr-3 w-4" src={heartImg} alt="heart" />
                <p className="text-bgreen text-sm"> Move to saved items</p>
              </button>
              <button className="flex items-center ml-8">
                <img className="mr-3 w-4" src={trash} alt="heart" />
                <p className="text-bred text-sm"> Delete</p>
              </button>
            </div>
          </div>
        </div>
        
      </div>
      

      <div className="flex justify-end items-center">
        <button className="border rounded-lg border-borange p-3 mr-10 text-bred">
          Countinue Shopping
        </button>
        <button className="text-white rounded-lg p-3 bg-borange">Proceed To Checkout</button>
      </div>
      
      
    </section>
  }
  </>
  );
};

export default ShoppingCart;
