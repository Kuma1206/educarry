import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import SideBar from "../../layout/SideBar";
import Resumemenu_dt from "../../pages/resumemenu_dt";
import "css.gg/icons/css/profile.css";

const Profile_dt = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <div className={styles.main}>
          <div className={styles.profile}>
            <div className={styles.image}></div>
            <div className={styles.pbox}>
              <div className={styles.plofilebox1}>
                <p className={styles.jikopr}>自己PR：</p>
                {/* <textarea name="" id="" className={styles.textarea1}></textarea> */}
              </div>
              <div className={styles.plofilebox2}>
                <p className={styles.skiil}>Myスキル：</p>
                {/* <textarea name="" id="" className={styles.textarea2}></textarea> */}
              </div>
            </div>
          </div>
          <div className={styles.resumebox}>
            <Resumemenu_dt />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile_dt;
