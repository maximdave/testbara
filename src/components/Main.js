import React, { useEffect, useState } from "react";
import December from "../assets/dec.svg";
import main from "../assets/main.png";
import easter from "../assets/easter.png";
import orange from "../assets/orange.png";
import SearchMobile from "./SearchMobile";
import profileIcon from "../assets/profilelogo.svg";
import ProfileList from "../containers/ProfileList";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import ProductListing from "../containers/ProductListing";

const Main = () => {
  const [width, setWidth] = useState();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const myWidth = window.innerWidth;
      setWidth(myWidth);
    });
  }, [window]);

  return (
    <main className="w-full mt-24 lg:px-8  relative xl:px-14">
      <section className="grid w-full  main-grid h-full">
        <div className=" w-full">
          <div className=" bg-white w-profile-list rounded-lg shadow p-3">
            <ProfileList/>
          </div>
          <ProductListing/>

        </div>
        <div className="border hidden lg:block w-full  h-full">
          <div className="w-full">
            <img src={December} alt="banner"/>
          </div>
          {/* <div className="w-full my-2">
            <img src={main} alt="banner"/>
          </div>
          <div className="w-full my-2 ">
            <img src={orange} alt="banner"/>
          </div>
          <div className="w-full my-2 ">
            <img src={orange} alt="banner"/>
          </div> */}
<Footer/>
        </div>
      </section>
    </main>
  );
};

export default Main;

/* <>
     {width < 1000 ? <SearchMobile/>: null}
    
      <div className="pt-5 lg:pt-28 lg:grid grid-cols-4 grid-rows-2 gap-4 w-11/12 mx-auto">
        <img
          className="hidden lg:block lg:col-start-1 col-span-1 row-start-1 row-span-full "
          src={December}
          alt="banner"
        />
        <img
          className=" col-start-2 col-span-2 row-start-1 row-span-full"
          src={main}
          alt="banner"
        />
        <img
          className="hidden lg:block col-start-4 col-span-2"
          src={easter}
          alt="banner"
        />
        <img
          className="hidden lg:block row-start-2 row-span-full "
          src={orange}
          alt="banner"
        />
      </div>
    </> */
