import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { register } from "../../api/api";
import useFetch from "../../hooks/useFetch";
import classes from "./AuthForm.module.css";

const RegisterForm = () => {
  const history = useHistory();

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [usernameError, setUsernameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const { error, status, requestFunction } = useFetch(register, false);

  const submitHandler = (event) => {
    event.preventDefault();

    // Get user input
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Validate
    if (username.trim() === "") {
      setUsernameError("Vui lòng nhập tên tài khoản");
      return;
    }
    setUsernameError(null);

    if (email.trim() === "") {
      setEmailError("Vui lòng nhập email");
      return;
    }
    setEmailError(null);

    if (password.length < 6) {
      setPasswordError("Mật khẩu tối thiểu 6 kí tự");
      return;
    }
    setPasswordError(null);

    // Send request to server
    requestFunction({ username, email, password });
  };

  useEffect(() => {
    if (status === "completed" && !error) {
      history.replace("/login");
    }
  }, [status, error, history]);

  return (
    <section className={classes.container} onSubmit={submitHandler}>
      <h2>Đăng ký tài khoản VOCAB</h2>
      <form className={classes.form}>
        <div>
          <label htmlFor="username">Tên đăng nhập</label>
          <input type="text" ref={usernameRef} />
          {usernameError && <p className={classes.invalid}>{usernameError}</p>}
        </div>
        <div>
          <label htmlFor="email">Địa chỉ email</label>
          <input type="email" ref={emailRef} />
          {emailError && <p className={classes.invalid}>{emailError}</p>}
        </div>
        <div>
          <label htmlFor="password">Mật khẩu</label>
          <input type="password" ref={passwordRef} />
          {passwordError && <p className={classes.invalid}>{passwordError}</p>}
        </div>
        {status === "pending" && <button disabled>ĐANG TẢI ...</button>}
        {status !== "pending" && <button>ĐĂNG KÝ</button>}
      </form>
      <div className={classes.alt}>
        Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>.
      </div>
      {error && (
        <div className={classes.error}>
          Vui lòng sử dụng email và tên đăng nhập khác
        </div>
      )}
    </section>
  );
};

export default RegisterForm;
