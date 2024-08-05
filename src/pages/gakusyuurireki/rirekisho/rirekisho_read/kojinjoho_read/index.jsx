import React, { useState } from "react";
import styles from "./style.module.scss";
import SideBar from "../../../../../layout/SideBar";
import Hozon from "../../../../../components/hozonbutton";
import { Link } from "react-router-dom";

const Kojinjoho_edit = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <div>
          <div className={styles.btitle}>
            <h2 className={styles.title}>
              <Link to="/gakusyuurireki">学習履歴フォルダ</Link>／
              <Link to="/rirekisho_read">履歴書一覧</Link>／ 個人情報
            </h2>
          </div>
          <div className={styles.area1}>
            <h2 className={styles.titletext}>個人情報</h2>
            <div className={`${styles.gakureki} ${styles.area2}`}>
              <div className={styles["t-area"]}>
                <p className={styles.kategori}>フリガナ</p>
                <input
                  type="text"
                  className={styles.textarea}
                  name="n_furigana[]"
                  placeholder="ニッポン　タロウ"
                />
              </div>
              <div className={styles["t-area"]}>
                <p className={styles.kategori}>氏名</p>
                <input
                  type="text"
                  className={styles.textarea}
                  name="n_shimei[]"
                  placeholder="日本　太郎"
                />
              </div>
              <div className={styles["t-area"]}>
                <p className={styles.kategori}>生年月日</p>
                <input type="date" name="umare[]" className={styles.umare} />
              </div>
              <div className={styles["t-area"]}>
                <p className={styles.kategori}>住所</p>
                <input
                  type="text"
                  className={styles.textarea}
                  name="s_gakkoumei[]"
                  placeholder="○○県○○市～"
                />
              </div>
              <div className={styles["t-area"]}>
                <p className={styles.kategori}>電話番号</p>
                <input
                  type="text"
                  className={styles.textarea}
                  name="s_gakkoumei[]"
                  placeholder=" 090-0000-0000"
                />
              </div>
            </div>
            <Hozon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Kojinjoho_edit;
