import React from "react";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToData } from "../../store/Slices/User";
const Navbar = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => {
    return state.user[0].status;
  });

  const logoutUser = () => {
    localStorage.clear();
    dispatch(addToData({username : '', status : false}));
  }

  return (
    <div className="navigation_container">
      <nav className="navbar">
        <div className="items-container">
          <ul className="lists-container">
            <Link to={"/"}>
              <li className="item">Home</li>
            </Link>
            <Link to={"/about"}>
              <li className="item">About</li>
            </Link>
            <Link to={"/login"}>
              <li className="item">Login</li>
            </Link>
            <Link to={"/signup"}>
              <li className="item">Signup</li>
            </Link>
          </ul>
          <div className="logout-con">
            {status ? (
              <Link onClick={logoutUser} to={"/login"} className="item">
                Logout
              </Link>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
