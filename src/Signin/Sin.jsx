import React, { useEffect } from "react";
// import sendUserData from "./sendUserData.js";
import LogoutButton from "./Logout.jsx";

const Sin = () => {

  // useEffect(() => {
  //   const sendSecureData = async () => {
  //     if (isAuthenticated && user) {
  //       // const token = await getAccessTokenSilently();
  //       await sendUserData(user); // pass the token along
  //     }
  //   };

  //   sendSecureData();
  // }, [isAuthenticated, user]);

  return (
    <div>
      {isAuthenticated && (
        <div>
          <h3>Welcome {user?.name}</h3>
          <img src={user?.picture} alt="" width="100" height={100} />
          {/* <h1>{user?.gender}</h1> */}
          <LogoutButton />
        </div>
      )}
    </div>
  );
};

export default Sin;
