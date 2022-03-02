import ProfileIcon from "../assets/user.svg";
import Message from "../assets/message.svg";
import ShoppingBag from "../assets/shopping-bag.svg";
import PocketIcon from "../assets/pocket.svg";
import LogoutIcon from "../assets/logout.svg";

const profileLinks = [
  { name: "My Profile", icon: ProfileIcon },
  { name: "Message", icon: Message },
  { name: "Orders", icon: ShoppingBag },
  { name: "Saved Items", icon: PocketIcon },
  { name: "My Coupons", icon: PocketIcon },
];

const ProfileNav = ({ toggleProfileMenu }) => {
  return (
    <section className="absolute z-10 shadow-2xl bg-white mt-1 py-4  w-80 top-16 right-20  rounded-lg">
      {profileLinks.map((link) => (
        <div
          onClick={toggleProfileMenu}
          className="flex my-7 items-center px-8 cursor-pointer"
        >
          <img src={link.icon} alt={link.name} className="mr-2" />
          <p>{link.name}</p>
        </div>
      ))}

      <div className="divider pt-5"></div>

      <div
        onClick={toggleProfileMenu}
        className="cursor-pointer flex py-4 items-center px-8 "
      >
        <img src={LogoutIcon} className="mr-2" alt="logout-icon" />
        <p className="text-bred">Logout</p>
      </div>
    </section>
  );
};

export default ProfileNav;
