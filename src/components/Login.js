import BarafiriLogo from "../assets/logo.svg";
import loginImage from "../assets/login.svg";
import googleLogin from "../assets/google-login.svg"
import facebookLogin from "../assets/facebook-login.svg";

const Login = () => {
  return (
    <section className="xl:bg-authentication-image  w-screen h-screen bg-clip-border xl:flex xl:justify-center xl:items-center">
      <div className=" w-full xl:w-10/12 h-full xl:h-auto p-8 xl:p-10  bg-white mx-auto  lg:rounded-md lg:shadow-md">
        <img className="mx-auto lg:mx-0" src={BarafiriLogo} alt="barafiri-logo" />
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center">
          <div className="hidden xl:block w-full">
            <img className="w-full" src={loginImage} alt="login" />
          </div>
          <div className="lg:text-center mt-10">
            <h1 className="text-3xl text-gray-500 font-medium my-4 lg:my-2  ">Sign In</h1>
            <div className="flex lg:justify-center">
             <p className="hidden xl:block text-gray-400">don’t have an account? </p>
              <p className="hidden xl:block ml-1 text-borange">Create one</p>
              <p className="xl:hidden">Log into your account and start shopping</p>
            </div>
            <div className=" w-full xl:w-11/12 mx-auto mt-4 lg:mt-0">
              <form className="w-full xl:w-11/12 mx-auto ">
                <input
                  className="border w-full p-3 rounded-lg input-bg  my-2 lg:my-4"
                  placeholder="Username, email or phone number"
                />
                <input
                  className="border w-full p-3 rounded-lg input-bg my-2 lg:my-5"
                  placeholder="Username, email or phone number"
                />
                <div className="w-full my-4  flex justify-between items-center">
                  <div >
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label className="ml-3" for="vehicle1">Keep me logged in</label>
                  </div>
                  <p>Forgot password</p>
                </div>
                <input type="submit" className="bg-bred w-full shadow-md p-3 rounded-lg   mt-5 lg:mt-8 text-white font-medium my-3 " />
              </form>
            </div>
            <div className="flex items-center mx-auto w-10/12 my-4">
                <div className="w-6/12 border-b border-bogrey"></div>
                <p className="uppercase mx-2">or</p>
                <div className="w-6/12 border-b border-bogrey"></div>

            </div>

            <div className="flex justify-center my-10">
                <div className="border mr-10 w-12 h-12 border-bogrey rounded flex justify-center items-center">
                    <img className="w-9" src={facebookLogin} alt="facebook-login" />
                </div>
                <div className="border border-bogrey rounded w-12 h-12 flex justify-center items-center">
                    <img className="w-9" src={googleLogin} alt="google-login" />
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
