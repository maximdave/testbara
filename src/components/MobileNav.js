import menuBar from "../assets/menu.svg";
import BarafiriLogo from "../assets/logo.svg";
import UserIcon from "../assets/user.svg";
// import CartIcon from "../assets/cart.svg";
import CartIcon from "../assets/cartIcon.svg";


const MobileNav = () => {
  return (
    <nav className="navbar">
      <div className=" w-11/12 mx-auto flex items-center justify-between">
        <div className="flex">
          <img className="mr-5" src={menuBar} alt="menubar" />

          <img src={BarafiriLogo} className="w-32" alt="barafiri-logo" />
        </div>
        <div className="flex">
          <img className="mr-2 sm:mr-5" src={UserIcon} alt="user-icon" />

          <div className="flex">
            <img  src={CartIcon} alt="cart-icon" />
            <div  className="bg-bred -ml-2 -mb-4 w-5 h-5 text-center text-white rounded-full shadow-xl text-sm">0</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
