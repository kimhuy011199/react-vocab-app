import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Profile.module.css";
import AuthContext from "../../store/authContext";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const logoutHandler = () => {
    authContext.logout();
    history.push("/login");
  };

  return (
    <div
      className={classes.container}
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <div className={classes.email}>Xin chào, {authContext.email}</div>
      {isDropdownOpen && (
        <div className={classes.dropdown}>
          <ul>
            <li>
              <Link to="/">Từ vựng của bạn</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Chủ đề đã học</Link>
            </li>
          </ul>
          <ul>
            <li>
              <button onClick={logoutHandler}>Đăng xuất</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
