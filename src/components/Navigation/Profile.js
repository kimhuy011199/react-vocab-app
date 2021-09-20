import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import AuthContext from "../../store/authContext";
import { vocabsActions } from "../../store/vocabs-slice";
import { learningActions } from "../../store/learning-slice";

import classes from "./Navigation.module.css";

const Profile = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authContext.logout();
    dispatch(vocabsActions.clear());
    dispatch(learningActions.clear());
    history.push("/login");
  };

  return (
    <nav className={classes.nav}>
      <ul className={classes.profile}>
        <li>
          <Link className={classes.full} to="/myvocabs">
            TỪ VỰNG CỦA BẠN
          </Link>
        </li>
        <li>
          <Link className={classes.cyan} to="/mylearning">
            CHỦ ĐỀ CỦA BẠN
          </Link>
        </li>
        <li>
          <button className={classes.logout} onClick={logoutHandler}>
            ĐĂNG XUẤT
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Profile;
