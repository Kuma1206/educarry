import React, { useState } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import "css.gg/icons/css/search.css";
import "css.gg/icons/css/profile.css";
import "css.gg/icons/css/menu-boxed.css";
import "css.gg/icons/css/log-out.css";
import "css.gg/icons/css/home.css";

const SideBar_mb = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={toggleSidebar}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>{" "}
      </div>
      <div className={`${styles.sideBar} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.menu}>
          <li className={styles.kensaku}>
            <i className="gg-search custom-icon"></i>
            <input type="text" className={styles.question} />
          </li>
          <li className={styles.submenu}>
            <Link to="/">
              <div className={styles.icon1}></div>
              <i className="gg-home custom-icon"></i>
              <div className={styles.icon2}>HOME</div>
            </Link>
          </li>
          <li className={styles.submenu}>
            <Link to="/gakusyuurireki">
              <div className={styles.icon1}>
                <i className="gg-menu-boxed custom-icon"></i>
              </div>{" "}
              <div className={styles.icon2}>学習履歴</div>
            </Link>
          </li>
          <li>
            <Link to="/mypage">
              <div className={styles.icon1}>
                <i className="gg-profile custom-icon"></i>
              </div>{" "}
              <div className={styles.icon2}>アカウント</div>
            </Link>
          </li>
          <li className={styles.submenu}>
            <Link to="/logout">
              <div className={styles.icon3}>
                <i className="gg-log-out custom-icon"></i>
              </div>{" "}
              <div className={styles.icon4}>ログアウト</div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar_mb;
