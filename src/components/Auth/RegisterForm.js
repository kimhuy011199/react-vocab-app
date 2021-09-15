import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./AuthForm.module.css";

const RegisterForm = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(username, email, password);
  };

  return (
    <section className={classes.container} onSubmit={submitHandler}>
      <h2>Đăng ký tài khoản VOCAB</h2>
      <form className={classes.form}>
        <div>
          <label htmlFor="username">Tài khoản</label>
          <input type="text" ref={usernameRef} />
        </div>
        <div>
          <label htmlFor="email">Địa chỉ email</label>
          <input type="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">Mật khẩu</label>
          <input type="password" ref={passwordRef} />
        </div>
        <button>ĐĂNG KÝ</button>
      </form>
      <div className={classes.alt}>
        Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>.
      </div>
    </section>
  );
};

export default RegisterForm;
