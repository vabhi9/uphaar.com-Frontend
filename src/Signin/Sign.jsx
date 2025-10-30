import React, { useContext, useState } from "react";
import SignImage from './Sign_image2.jpeg'
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
axios.defaults.withCredentials = true;
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import UserContext from "../Context/UserContext";

const SigninWithEmail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { userProfile } = useContext(UserContext);

  const loginUser = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/login`,
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log("Login Success: ", res.data);
      // ✅ Redirect to Profile route
      await userProfile();
      await navigate("/profile");
      console.log("Code Runs untill here....")
    } catch (err) {
      console.error(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-slate-300">
          <section className="h-[80%] w-[80%] flex z-50 shadow-slate-500 shadow-xl overflow-hiddn rounded-3xl">
            <div className="basis-1/2 bg-white flex flex-col justify-center items-center rounded-s-3xl">
              <div className="h-[80%] w-[60%] bg-re-500 flex flex-col justify-around items-start">
                <h1 className="font-semibold text-3xl">
                  Log in to Your Account
                </h1>
                <div className="h-12 w-full flex justify-center items-center">
                  <GoogleButton />
                </div>
                <div className="flex items-center w-full my-2">
                  <hr className="flex-grow border-gray-400" />
                  <p className="mx-2 text-gray-700 whitespace-nowrap">
                    or Continue with Email
                  </p>
                  <hr className="flex-grow border-gray-400" />
                </div>
                <div className="relative w-full">
                  <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 " />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="h-9 w-full pl-10 rounded-lg border-[1px] border-black focus:outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="relative w-full">
                  <RiLockPasswordFill className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 " />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="h-9 w-full pl-10 rounded-lg border-[1px] border-black focus:outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="h-5 w-full flex justify-between items-center">
                  <p className="text-sm hover:cursor-pointer" onClick={() => navigate('/registerUser')}>
                    Create a New Account
                  </p>
                  <p className="text-sm hover:cursor-pointer">
                    Forgot Password
                  </p>
                </div>
                <button
                  className="w-full bg-Primary p-2 rounded-xl font-bold text-xl active:scale-[0.85] duration-700 text-white"
                  onClick={() => loginUser()}
                >
                  Login
                </button>
                {/* <button className="w-full bg-Primary p-2 rounded-xl font-bold text-xl active:scale-[0.85] duration-700 text-white">
              Register
            </button> */}
              </div>
            </div>
            <div className="basis-1/2 bg-Primary rounded-r-3xl ">
            <img src={SignImage} alt="" className="h-full w-full"/>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default SigninWithEmail;
