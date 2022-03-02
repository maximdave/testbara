import profileIcon from "../assets/profilelogo.svg";

const ProfileList = () => {
  var profileImages = new Array(40);

  profileImages.fill(profileIcon);
  console.log(profileImages.length);

  //   <div className="rounded-corners">
  //   <img className="" src={profileIcon} alt="profile-icon" />
  // </div>
  return (
    <>
      <div className=" wrapper profile-list px-10 w-full items-center flex justify-between overflow-auto whitespace-nowrap">
        {profileImages.map(() => {
          return (
             <div className="profile-card mx-5">
             <img src={profileIcon} alt="profile-icon" />
             <p className="my-3">Bargain Hunter</p>
           </div>
          );
        })}
      </div>
    </>
  );
};

export default ProfileList;
