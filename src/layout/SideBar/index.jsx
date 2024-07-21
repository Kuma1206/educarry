// rafce リアクトの雛形が作れるショートカットです🤗

import React from "react";
// cssを紐づける
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      {/*  */}
      <ul className={styles.menu}>
        <li>
          <Link to="/profile">プロフィール</Link>
        </li>
        <li>
          <Link to="/gakusyuurireki">学習履歴</Link>
        </li>
        <li>
          <Link to="/mypage">マイページ</Link>
        </li>
        <li>
          <Link to="/logout">ログアウト</Link>
        </li>
      </ul>
      {/*  */}
    </div>
  );
};

export default SideBar;
