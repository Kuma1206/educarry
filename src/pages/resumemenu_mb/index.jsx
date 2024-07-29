// rafce リアクトの雛形が作れるショートカットです🤗

import React from "react";
// cssを紐づける
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const Resumemenu_mb = () => {
  return (
    <>
      <div className={styles.boxmyresumetop}>
        <ul className={styles.boxmyresume}>
          <Link to="/rirekisho_top" className={styles.bbutton1}>
            <li>履歴書</li>
          </Link>
          <Link
            to="/shokumu_keireki"
            className={styles.bbutton2}
            style={{ lineHeight: "1.5" }}
          >
            <li>
              職務
              <br />
              経歴書
            </li>
          </Link>
          <Link
            to="/portfolio"
            className={styles.bbutton3}
            style={{ lineHeight: "1.5" }}
          >
            <li>
              ポート
              <br />
              フォリオ
            </li>
          </Link>
          <Link to="/sei_risshu" className={styles.bbutton4}>
            <li>生い立ち</li>
          </Link>
        </ul>

        <ul className={styles.boxmyresume}>
          <Link to="/rirekisho_read" className={styles.bbutton5}>
            <li>学習記録</li>
          </Link>
          <Link to="/shokumu_keireki" className={styles.bbutton6}>
            <li>資格記録</li>
          </Link>
          <Link
            to="/portfolio"
            className={styles.bbutton7}
            style={{ lineHeight: "1.5" }}
          >
            <li>
              社会
              <br />
              経験記録
            </li>
          </Link>
          <Link to="/sei_risshu" className={styles.bbutton8}>
            <li>研究記録</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Resumemenu_mb;
