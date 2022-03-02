import React, { useEffect, useState } from "react";
import BarafiriLogo from "../assets/logo.svg";
import ShoppingBag from "../assets/shopping-bag.svg";
import PocketIcon from "../assets/pocket.svg";

const SideDrawer = () => {
  const [width, setWidth] = useState();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const myWidth = window.innerWidth;
      setWidth(myWidth);
    });
  }, [window]);

  return width < 1000 ? (
    <div className=" z-40 absolute top-0 left-0 w-2/4 bg-white h-screen py-10 ">
      <div className="w-32 mb-10 px-5 ">
        <img className="w-full" src={BarafiriLogo} alt="barafiri-logo"/>
      </div>
      <p className="mb-5 border-t-2 border-b-2 px-4 py-3">
        Barafiri Services
      </p>
      <div className="px-5">
        <h2 className="my-3">Account Options</h2>
        <div className="flex  items-center my-3 ">
                <img src={ShoppingBag} className="mr-2" />
                <p>Orders</p>
            </div>
            <div className="flex my-3  items-center ">
                <img src={PocketIcon} className="mr-2" />
                <p>Messages</p>
            </div>
      </div>

    </div>
  ) : null;
};

export default SideDrawer;
