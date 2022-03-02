import { toggleprofileHidden } from "../redux/actions/index";
import { connect } from "react-redux";
import BarafiriLogo from "../assets/logo.svg";
import SearchIcon from "../assets/search.svg";
import CartIcon from "../assets/cartIcon.svg";
// import CartIcon from "../assets/cart.svg";
import UserIcon from "../assets/user.svg";
import down from "../assets/down.svg";
import help from "../assets/help-circle.svg";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import ProfileNav from "../containers/ProfileNav";
import SearchBar from "./SearchDesktop";
import SearchData from "../searchData/index.json";
import Categories from "./Categories";
import SearchDropDown from "./SearchDropDown";

const Navbar = ({ toggleprofileHidden, hidden }) => {
  const [width, setWidth] = useState();
  const [openNav, setOpenNav] = useState(false);
  const [openDropdown, setOpenDropDown] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const windowWidth = window.innerWidth;
      setWidth(windowWidth);
    });
  }, [window]);

  const toggleProfileMenu = () => {
    setOpenNav((prev) => !prev);
  };
  const onClickHandler = () => {
    setOpenDropDown((prev) => !prev);
  };

  console.log(width);

  return (
    <>
      {width < 1000 ? (
        <MobileNav />
      ) : (
        <nav className="navbar center-flex justify-between z-10 lg:px-8 xl:px-10 mx-auto ">
          <div className="flex items-center">
            <div className=" mr-8 xl:mr-10">
              <img
                className="w-28 xl:w-32"
                src={BarafiriLogo}
                alt="Barafiri Logo"
              />
            </div>
            <SearchBar placeholder={"Search"} />
          </div>
          <div className="center-flex">
            <div className="px-3 xl:px-5 center-flex border-l-2  border-r-2">
              <img src={CartIcon} alt="cart-icon" />
              <p className="bg-bred ml-2 rounded text-sm xl:text-base text-center  text-white px-2 xl:py-0.5 shadow-lg">
                0
              </p>
            </div>
            <div
              className=" px-3 xl:px-5 mx-4 py-2 xl:py-3 center-flex cursor-pointer bg-gray-50 rounded-2xl"
              onClick={toggleProfileMenu}
            >
              <img className="lg:w-4 xl:w-6" src={UserIcon} alt="user" />
              <p className="ml-3 text-sm xl:text-base">Hi Tolu</p>

              <button className="cursor-pointer" onClick={toggleProfileMenu}>
                <img src={down} alt="down" />
              </button>
            </div>

            <div className="border-r-2 w-2"></div>

            <div className="px-4 xl:px-5 xl:mx-2 border-l-2 ">
              <img className="lg:w-4 xl:w-6" src={help} alt="help-circle" />
            </div>
          </div>

          {openNav && <ProfileNav toggleProfileMenu={toggleProfileMenu} />}

          {/* <Categories/> */}
        </nav>
      )}
      {/* <SearchDropDown onClickHandler={onClickHandler}/> */}
    </>
  );
  //
};

const mapDispatchToProps = (dispatch) => ({
  toggleprofileHidden: () => dispatch(toggleprofileHidden()),
});

const mapStateToProps = (state) => ({
  profile: state.profileReducer.hidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
