import profileIcon from "../assets/profilelistimage.jpg";
import verified from "../assets/verified.svg";

const ProfileList = () => {
  var profileImages = new Array(40);

  profileImages.fill(profileIcon);
  console.log(profileImages.length);

  //   <div className="rounded-corners">
  //   <img className="" src={profileIcon} alt="profile-icon" />
  // </div>
  return (
    <>
      <div className=" wrapper profile-list w-full items-center flex justify-between overflow-auto whitespace-nowrap">
        {profileImages.map(() => {
          return (
             <div className="profile-card mx-5 text-center">
               <div className="relative">
                 <img className=" w-5 absolute right-3 top-3" src={verified} alt="verified"/>
             <img className=" w-24 ml-3 border-4 border-bred  h-24 rounded-full"
             src={profileIcon} alt="profile-icon" />
             </div>
             <p className="my-3">Bargain Hunter</p>
           </div>
          );
        })}
      </div>
    </>
  );
};

export default ProfileList;
