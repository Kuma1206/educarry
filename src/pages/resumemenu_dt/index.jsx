// rafce リアクトの雛形が作れるショートカットです🤗

import React from "react";
// cssを紐づける
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const Resumemenu_dt = () => {
  return (
    <>
      {/*  */}
      <ul className={styles.boxmyresume}>
        <li className={styles.bbutton}>
          <Link to="/rirekisho_read">
            履歴書
          </Link>
        </li>
        <li className={styles.bbutton}>
          <Link to="/shokumu_keireki">
            職務経歴書
          </Link>
        </li>
        <li className={styles.bbutton}>
          <Link to="/portfolio">
            ポートフォリオ
          </Link>
        </li>
        <li className={styles.bbutton}>
          <Link to="/sei_risshu">
            生い立ち
          </Link>
        </li>
      </ul>

      <ul className={styles.boxmyresume}>
        <li className={styles.bbutton}>
          <Link to="/rirekisho_read">
            学習記録
          </Link>
        </li>
        <li className={styles.bbutton}>
          <Link to="/shokumu_keireki">
            資格記録
          </Link>
        </li>
        <li className={styles.bbutton}>
          <Link to="/portfolio">
            社会経験記録
          </Link>
        </li>
        <li className={styles.bbutton}>
          <Link to="/sei_risshu">
            研究記録
          </Link>
        </li>
      </ul>

      {/*  */}
    </>
  );
};

export default Resumemenu_dt;
