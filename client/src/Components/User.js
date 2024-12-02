import user from "../Images/user.png";

import Location from "./Location";
import { useSelector } from "react-redux";

const User = () => {
  const email = useSelector((state) => state.users.user.email);
  const name = useSelector((state) => state.users.user.name);

  return (
    <div>
      <img src={user} className="userImage" />
      <p>{name}</p>
      <p>
        {email}
        <Location />
      </p>
    </div>
  );
};

export default User;
