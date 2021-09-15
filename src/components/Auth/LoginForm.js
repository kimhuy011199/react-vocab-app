import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../api/api";
import useFetch from "../../hooks/useFetch";
import AuthContext from "../../store/authContext";
import classes from "./AuthForm.module.css";

const LoginForm = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const usernameRef = useRef();
  const passwordRef = useRef();

  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const { data, error, status, requestFunction } = useFetch(login, false);

  const submitHandler = async (event) => {
    event.preventDefault();

    // Get user input
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    // Validate
    if (username.trim() === "") {
      setUsernameError("Vui lòng nhập tên tài khoản");
      return;
    }
    setUsernameError(null);

    if (password.length < 6) {
      setPasswordError("Mật khẩu tối thiểu 6 kí tự");
      return;
    }
    setPasswordError(null);

    // Send request to server
    await requestFunction({ identifier: username, password });
  };

  useEffect(() => {
    if (status === "completed" && !error) {
      authContext.login(data.jwt, data.user.email);
      history.replace("/");
    }
  }, [data, status, error, history, authContext]);

  return (
    <section className={classes.container} onSubmit={submitHandler}>
      <h2>Chào mừng bạn đến với VOCAB</h2>
      <form className={classes.form}>
        <div>
          <label htmlFor="username">Tên đăng nhập</label>
          <input type="text" ref={usernameRef} />
          {usernameError && <p className={classes.invalid}>{usernameError}</p>}
        </div>
        <div>
          <label htmlFor="password">Mật khẩu</label>
          <input type="password" ref={passwordRef} />
          {passwordError && <p className={classes.invalid}>{passwordError}</p>}
        </div>
        {status === "pending" && <button disabled>ĐANG TẢI ...</button>}
        {status !== "pending" && <button>ĐĂNG NHẬP</button>}
      </form>
      <div className={classes.alt}>
        Bạn chưa có tài khoản? <Link to="/register">Tạo tài khoản</Link>.
      </div>
      {error && (
        <div className={classes.error}>Sai tên đăng nhập hoặc mật khẩu</div>
      )}
    </section>
  );
};

export default LoginForm;
