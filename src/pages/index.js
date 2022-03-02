import React from "react";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import SideDrawer from "../components/SideDrawer";
import Categories from "../components/Categories";
import SearchDropDown from "../components/SearchDropDown";
import Main from "../components/Main";

const index = () => {
  return (
    <div className="bg-mgray font-pop mt-20">
      {/* <SideDrawer/> */}
      <Navbar />
      {/* <Categories/> */}
      <Main />
    </div>
  );
};

export default index;

// import Carousel from "../components/Carousel";
// import Categories from "../components/Categories";
// import Footer from "../components/Footer";

// import Banner from "../containers/Banner";
// import MoreToLove from "../containers/Moretolove";
// import NewArrivals from "../containers/NewArrivals";
// import Recommended from "../containers/Recommended";
// import SearchResults from "../containers/SearchResults";
// import TopCategories from "../containers/TopCategories";
//  <SearchResults/>
//  <Carousel />
//  <Categories />
//       <NewArrivals />
//       <TopCategories />
//       <Recommended />
//       <Banner />
//       <MoreToLove />
//       <Footer />
