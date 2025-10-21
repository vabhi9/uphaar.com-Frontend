import { useState, useEffect } from "react";
import axios from "axios";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const userProfile = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/profile`,
        { withCredentials: true }
      );
      setUser(res.data);
      console.log("Data set Successfully in setter Function");
    } catch (err) {
      console.error("Error fetching user:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };


  console.log("user is: ", user);
  return (
    <UserContext.Provider value={{ user, loading, setUser, userProfile }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
