import { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="navbar">
      <span>URL Shortener</span>

      {isLoggedIn ? (
        <Profile logOut={logOut} />
      ) : (
        <span className="pointer">
          <Link to={"/auth"} className="text">
            Login
          </Link>
        </span>
      )}
    </div>
  );
}

export default Navbar;
