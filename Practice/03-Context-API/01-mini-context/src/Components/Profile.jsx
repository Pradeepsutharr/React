import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return (
    <div>
      <h2>Hello {user.username}</h2>
    </div>
  );
}

export default Profile;
