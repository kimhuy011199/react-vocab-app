import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Profile.module.css";

const Profile = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div
      className={classes.container}
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <div className={classes.email}>Xin chào, {props.email}</div>
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
              <Link to="/">Bài kiểm tra của bạn</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
