import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const userProfile = () => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/users/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
        console.log("Data set Successfully in setter Function");
      })
      .catch((err) => {
        console.log("Error fetching user:", err);
        setUser(null);
      })
      .finally(() => setLoading(false));
  };

  console.log("user is: ", user);
  return (
    <UserContext.Provider value={{ user, loading, setUser, userProfile }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
