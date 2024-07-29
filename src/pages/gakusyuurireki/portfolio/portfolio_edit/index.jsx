import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import SideBar from "../../../../layout/SideBar";

const Shokureki_edit = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <div>
          <div className={styles.btitle}>
            <h2 className={styles.title}>
              <Link to="/gakusyuurireki">学習履歴フォルダ</Link>／<Link to="/shokureki_read">職務経歴書一覧</Link>
            </h2>
          </div>
          <h2 className={styles.titletext}>職務経歴書</h2>

          <div id="area2" className={styles.area1}>
            <div id="gakureki" className={styles.area2}>
              <div className={styles["t-area"]}>
                <p className={styles.kategori}>入社年月</p>
                <input type="date" name="nyusya" />
              </div>
              <div className={styles["t-area"]}>
                <p className={styles.kategori}>退社年月</p>
                <input type="date" name="taisya" />
              </div>
              <div className={styles["t-area"]}>
                <p className={styles.kategori}>企業名</p>
                <input
                  type="text"
                  className={styles.textarea}
                  name="kaisyamei"
                  placeholder="○○県立○○学校　○○科　入学"
                />
              </div>
              <div className={styles["t-area"]}>
                <p className={styles.kategori}>雇用形態</p>
                <input type="text" name="koyou" placeholder="正社員" />
              </div>
              <div className={styles["text-area"]} id="text-area">
                <div class={styles["b-text"]}>
                  <p className={styles.kategori}>業務内容</p>
                  <textarea
                    type="text"
                    className={styles.textarea2}
                    name="gyoumu"
                    placeholder="○○県立○○学校　○○科　卒業"
                  ></textarea>
                </div>
              </div>
              <div className={styles["text-area"]} id="text-area">
                <div class={styles["b-text"]}>
                  <p className={styles.kategori}>実績</p>
                  <textarea
                    type="text"
                    className={styles.textarea2}
                    name="jisseki"
                    placeholder="○○県立○○学校　○○科　卒業"
                  ></textarea>
                </div>
              </div>
              <div id="p-area">
                <div id={styles.sakujo1} className={styles.trash}></div>
                <h5>＋</h5>
              </div>
            </div>
            <div id="area3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shokureki_edit;
