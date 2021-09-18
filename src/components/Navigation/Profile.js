import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import AuthContext from "../../store/authContext";
import { vocabsActions } from "../../store/vocabs-slice";
import { learningActions } from "../../store/learning-slice";

import classes from "./Profile.module.css";

const Profile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const logoutHandler = () => {
    authContext.logout();
    dispatch(vocabsActions.clear());
    dispatch(learningActions.clear());
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
              <Link to="/myvocabs">Từ vựng của bạn</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/mylearning">Chủ đề đang học</Link>
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
