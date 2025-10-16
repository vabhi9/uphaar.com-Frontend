import axios from "axios";
import { useState, useContext } from "react";
import { FaBell, FaCamera } from "react-icons/fa";
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { CartProvider, useCart } from "../Cart/CartContext";

const Profile = () => {
  const [notifications, setNotifications] = useState(true);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { setCart } = useCart(CartProvider);
  console.log("Context wala User", user);

  const logout = async () => {
    try {
      const res = axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/logout`,
        {
          withCredentials: true,
        }
      );
      console.log("Response : ", res.data);
      setUser(null);
      setCart([]);
      alert("Logged Out Successfully");
      navigate("/home");
      return () => {
        console.log("Unmounted Successfully:");
      };
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
          User Profile Section
        </h2>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Avatar */}
          <div className="relative">
            <img
              src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-Primary"
            />
            <button className="absolute bottom-2 right-[2px] bg-Primary p-2 rounded-full text-white hover:bg-Secondary transition">
              <FaCamera size={16} />
            </button>
          </div>

          {/* Info Boxes */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border rounded-lg p-3 bg-gray-50 hover:bg-gray-100 transition">
              <p className="text-sm text-gray-500 mb-1 font-bold">First Name</p>
              <p className="text-gray-700 font-medium">
                {user?.fullName?.firstName}
              </p>
            </div>
            <div className="border rounded-lg p-3 bg-gray-50 hover:bg-gray-100 transition">
              <p className="text-sm text-gray-500 mb-1 font-bold">Last Name</p>
              <p className="text-gray-700 font-medium">
                {" "}
                {user?.fullName?.lastName}
              </p>
            </div>
            <div className="border rounded-lg p-3 bg-gray-50 hover:bg-gray-100 transition">
              <p className="text-sm text-gray-500 mb-1 font-bold">E-Mail</p>
              <p className="text-gray-700 font-medium">{user?.email}</p>
            </div>
            <div className="border rounded-lg p-3 bg-gray-50 hover:bg-gray-100 transition">
              <p className="text-xs text-gray-500 mb-1">Phone number</p>
              <p className="text-gray-700 font-medium">+91 3491921034</p>
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="flex items-center gap-2 text-gray-600">
            <FaBell />
            <span className="text-sm">Уведомления</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="sr-only peer"
              />
              <div className="w-10 h-5 bg-gray-300 peer-checked:bg-Primary rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-4 after:w-4 after:rounded-full after:transition-all peer-checked:after:translate-x-5"></div>
            </label>
          </div>

          <button
            className="mt-6 md:mt-0 bg-Primary text-white px-8 py-2 rounded-full shadow-md hover:bg-Secondary transition"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
