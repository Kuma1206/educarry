import React from "react";
import styles from "./style.module.scss";
import SideBar from "../../layout/SideBar";
import Profile from "../../components/Profile";

const Mypage = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <div className={styles.contents}>
          <Profile />
        </div>
      </div>
    </>
  );
};

export default Mypage;
