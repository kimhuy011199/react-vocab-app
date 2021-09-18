import React from "react";

import Features from "./Features";
import Logo from "../../assets/favicon.svg";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={classes.main}>
        <div className={classes.content}>
          <h2 className={classes.subheading}>
            Chào mừng các bạn đến với VOCAB
          </h2>
          <h1 className={classes.heading}>HỌC TỪ VỰNG TIẾNG ANH ĐƠN GIẢN</h1>
          <p>
            VOCAB sẽ giúp bạn học tiếng Anh hiệu quả hơn bằng những phương pháp
            giáo dục ngoại ngữ hoàn toàn mới, tiết kiệm thời gian và hoàn toàn
            miễn phí.
          </p>
        </div>
        <div className={classes.image}>
          <img src={Logo} alt="" />
        </div>
      </section>
      <Features />
    </>
  );
};

export default Home;
