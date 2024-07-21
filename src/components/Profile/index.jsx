import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import Resumemenu from "../../pages/resumemenu";


const Profile = () => {
  return (
    <>
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
      </div>
      <div>
        <Resumemenu />
      </div>
    </>
  );
};

export default Profile;
