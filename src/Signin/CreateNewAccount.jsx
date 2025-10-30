import { useContext, useState } from "react";
import SignImage from "./Sign_Image.jpeg";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import UserContext from "../Context/UserContext";
axios.defaults.withCredentials = true;

const RegisterWithEmail = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { userProfile } = useContext(UserContext);
  const navigate = useNavigate();

  const registerUser = async () => {
    if (!firstName || !lastName || !email || !password) {
      alert("Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/register`,
        {
          fullName: {
            firstName,
            lastName,
          },
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log("Register Success:", res.data);
        navigate("/signin");
    } catch (err) {
      console.error("Register Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Registration failed!");
    } finally {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-slate-300">
          <section className="h-[80%] w-[80%] flex z-50 shadow-slate-500 shadow-xl overflow-hidden rounded-3xl">
            {/* Left Section */}
            <div className="basis-1/2 bg-white flex flex-col justify-center items-center rounded-s-3xl">
              <div className="h-[85%] w-[65%] flex flex-col justify-around items-start">
                <h1 className="font-semibold text-3xl">Create Your Account</h1>

                {/* First Name */}
                <div className="relative w-full">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    placeholder="First Name"
                    className="h-9 w-full pl-10 rounded-lg border border-black focus:outline-none"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                </div>

                {/* Last Name */}
                <div className="relative w-full">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="h-9 w-full pl-10 rounded-lg border border-black focus:outline-none"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>

                {/* Email */}
                <div className="relative w-full">
                  <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-9 w-full pl-10 rounded-lg border border-black focus:outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>

                {/* Password */}
                <div className="relative w-full">
                  <RiLockPasswordFill className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="h-9 w-full pl-10 rounded-lg border border-black focus:outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>

                <div className="w-full text-sm text-gray-600 mt-1">
                  <p>
                    Already have an account?{" "}
                    <span
                      onClick={() => navigate("/login")}
                      className="text-blue-600 cursor-pointer hover:underline"
                    >
                      Login here
                    </span>
                  </p>
                </div>

                <button
                  className="w-full bg-Primary p-2 rounded-xl font-bold text-xl active:scale-[0.85] duration-700 text-white"
                  onClick={registerUser}
                >
                  Register
                </button>
              </div>
            </div>

            {/* Right Section (Image) */}
            <div className="basis-1/2 bg-Primary rounded-r-3xl">
              <img
                src={SignImage}
                alt="Register Illustration"
                className="h-full w-full object-cover"
              />
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default RegisterWithEmail;
