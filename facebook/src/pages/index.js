import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

export default function Home() {
  const [module, setModule] = useState(false);
  const handlerClick = () => {
    setModule(!module);
  };

  return (
    <div className="h-screen w-screen relative">
      <div className="bg-slate-100 h-[730px] w-screen flex items-center justify-center absolute">
        <div className="flex">
          <div className="w-[580px] scroll-pr-5">
            <div className="pt-14 ml-[-32px]  ">
              <Image src="ah.svg" width={350} height={350} />
            </div>
            <div className="text-3xl w-[500px] text-black ">
              Connect with friends and the world around you on Facebook.
            </div>
          </div>
          <div className="h-[456px] w-[396px] border-solid border-red-600 ">
            <div className="w-[396px] h-[355px]    items-center  flex flex-col gap-4 bg-white rounded-lg p-4">
              <input
                placeholder="Email or phone number"
                className="p-4 border-2 border-space-200 rounded-[5px] w-[364px] h-[52px] "
              />
              <input
                placeholder="Password"
                className="p-4 border-2 border-space-200 rounded-[5px] w-[364px] h-[52px]"
              />
              <div className="w-[364px] h-[48px] bg-[#0866ff] flex items-center justify-center text-white text-xl font-semibold rounded-lg py-4">
                Log In
              </div>
              <div className="flex justify-center text-[#0866ff]">
                Forgot password?
              </div>
              <hr className="flex w-[330px] h-[10px]  border-black" />
              <div
                onClick={handlerClick}
                className="bg-[#42b72a] text-white w-[194px] h-[48px] rounded-md flex justify-center items-center font-medium text-[18px] py-4"
              >
                Create new account
              </div>
            </div>
            <div className="flex justify-center mt-7 text-black">
              Create a Page for a celebrity, brand or business.
            </div>
          </div>
        </div>
      </div>
      {module && (
        <div className="w-screen h-screen z-10 absolute bg-[rgb(0,0,0,0.4)] flex items-center justify-center">
          <div className="w-[432px] h-[544px] bg-white rounded-lg ">
            <div className=" border-b-[1px] border-slate-400 pb-2.5 px-4 py-2.5">
              <div className="flex space-x-[255px]">
                <h1 className=" text-bold text-[32px] font-bold text-black -mt-3">
                  Sign Up
                </h1>
                <div onClick={handlerClick}>
                  <Image src="/x.png" width={24} height={24} />
                </div>
              </div>
              <div className="text-[#606770] -mt-1">It's quick and easy</div>
            </div>
            <div className="w-[400px] h-[438px] m-4 flex flex-col gap-[10px]">
              <div className="flex space-x-[12px]">
                <input
                  placeholder="First name"
                  className="p-2 border-2 border-space-200 rounded-[5px] w-[194px] h-[40px] "
                />
                <input
                  placeholder="Surname"
                  className="p-2 border-2 border-space-200 rounded-[5px] w-[194px] h-[40px] "
                />
              </div>
              <div>
                <input
                  placeholder="Mobile number or email address"
                  className="p-2 border-2 border-space-200 rounded-[5px] w-[399px] h-[40px] "
                />
              </div>
              <div>
                <input
                  placeholder="New password"
                  className="p-2 border-2 border-space-200 rounded-[5px] w-[399px] h-[40px] "
                />
              </div>
              <div>
                <div className="text-[#606770] text-[12px]"> Date of birth</div>
                <div className="flex space-x-4">
                  <select
                    name="cars"
                    id="cars"
                    className="w-[125px] h-[36px] p-2 border rounded"
                  >
                    <option value="volvo">Jan</option>
                    <option value="saab">Feb</option>
                    <option value="opel">Mar</option>
                    <option value="audi">April</option>
                    <option value="volvo">May</option>
                    <option value="saab">June</option>
                    <option value="opel">July</option>
                    <option value="audi">August</option>
                    <option value="volvo">Sep</option>
                    <option value="saab">Octob</option>
                    <option value="opel">November</option>
                    <option value="audi">December</option>
                  </select>

                  <select
                    name="cars"
                    id="cars"
                    className="w-[125px] h-[36px] p-2 border rounded"
                  >
                    <option value="volvo">1</option>
                    <option value="saab">2</option>
                    <option value="opel">3</option>
                    <option value="audi">4</option>
                    <option value="volvo">5</option>
                    <option value="saab">6</option>
                    <option value="opel">7</option>
                    <option value="audi">8</option>
                    <option value="volvo">9</option>
                    <option value="saab">10</option>
                    <option value="opel">11</option>
                    <option value="audi">12</option>
                  </select>
                  <form action="/action_page.php">
                    <select
                      name="cars"
                      id="cars"
                      className="w-[125px] h-[36px] p-2 border rounded"
                    >
                      <option value="volvo">1990</option>
                      <option value="saab">1991</option>
                      <option value="opel">1992</option>
                      <option value="audi">1993</option>
                      <option value="volvo">1994</option>
                      <option value="saab">1995</option>
                      <option value="opel">1996</option>
                      <option value="audi">1997</option>
                      <option value="volvo">1998</option>
                      <option value="saab">1999</option>
                      <option value="opel">2000</option>
                      <option value="audi">2001</option>
                    </select>
                  </form>
                </div>
              </div>
              <div className="">
                <div className="text-[#606770] text-[12px]">Gender</div>
                <div className="flex space-x-2">
                  <div className="flex">
                    <div className="w-[128.28px] h-[36px] border rounded flex items-center space-x-[45px]">
                      <div className="ml-2">Female</div>
                      <input
                        className="ml-[00px]"
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      ></input>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-[128.28px] h-[36px] border rounded flex items-center space-x-[62px]">
                      <div className="ml-2">Male</div>
                      <input
                        className="ml-[00px]"
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      ></input>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-[128.28px] h-[36px] border rounded flex items-center space-x-[41px]">
                      <div className="ml-2">Custom</div>
                      <input
                        className="ml-[00px]"
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" text-[11px] text-[#777]">
                People who use our service may have uploaded your contact
                information to Facebook.
              </div>
              <div className=" text-[11px] text-[#777]">
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy. You may receive SMS notifications from us and
                can opt out at any time.
              </div>
              <div className="w-[194px] h-[36px] bg-[#00a400] rounded-md text-[18px] font-bold flex justify-center items-center ml-[95px] mt-3 text-white">
                Sign Up
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
