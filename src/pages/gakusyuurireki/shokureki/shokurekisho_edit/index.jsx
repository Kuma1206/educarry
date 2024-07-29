import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import SideBar from "../../../../layout/SideBar";
import Hozon from "../../../../components/hozonbutton";
// import Ymd from "../../../../components/Ymd";

const Shokurekisho_edit = () => {
  // 入社年月のセレクトボックス用
  const birthYearRef1 = useRef(null);
  const birthMonthRef1 = useRef(null);

  // 退社年月のセレクトボックス用
  const birthYearRef2 = useRef(null);
  const birthMonthRef2 = useRef(null);

  // 入社年月の状態
  const [birthYear1, setBirthYear1] = useState("2000");
  const [birthMonth1, setBirthMonth1] = useState("");

  // 退社年月の状態
  const [birthYear2, setBirthYear2] = useState("2000");
  const [birthMonth2, setBirthMonth2] = useState("");

  // 年のオプションを設定
  const setYear = (ref, defaultYear) => {
    if (ref.current) {
      ref.current.innerHTML = ""; // 現在のオプションをクリア
      for (let i = 1930; i <= new Date().getFullYear(); i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = `${i}`;
        ref.current.appendChild(option);
      }
      // デフォルトの年を設定
      if (defaultYear) {
        ref.current.value = defaultYear;
      }
    }
  };

  // 月のオプションを設定
  const setMonth = (ref) => {
    if (ref.current) {
      ref.current.innerHTML = ""; // 現在のオプションをクリア
      for (let i = 1; i <= 12; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        ref.current.appendChild(option);
      }
    }
  };

  useEffect(() => {
    setYear(birthYearRef1, "2000");
    setMonth(birthMonthRef1);
    setYear(birthYearRef2, "2000");
    setMonth(birthMonthRef2);
  }, []);

  const selectBirthYear1 = (e) => {
    setBirthYear1(e.target.value);
  };

  const selectBirthMonth1 = (e) => {
    setBirthMonth1(e.target.value);
  };

  const selectBirthYear2 = (e) => {
    setBirthYear2(e.target.value);
  };

  const selectBirthMonth2 = (e) => {
    setBirthMonth2(e.target.value);
  };

  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <div>
          <div className={styles.btitle}>
            <h2 className={styles.title}>
              <Link to="/gakusyuurireki">学習履歴フォルダ</Link>／
              <Link to="/shokurekisho_read">職務経歴書一覧</Link>
            </h2>
          </div>
          <div id="area2" className={styles.area1}>
            <h2 className={styles.titletext}>職務経歴書</h2>
            <div id="gakureki" className={styles.area2}>
              <div className={styles["t-area"]}>
                <p className={styles.kategori}>入社年月</p>
                <div>
                  <label>
                    <select
                      ref={birthYearRef1}
                      value={birthYear1}
                      onChange={selectBirthYear1}
                      className={styles.nen}
                    >
                      <option value="">年を選択</option>
                    </select>
                    年
                  </label>
                  <label>
                    <select
                      ref={birthMonthRef1}
                      value={birthMonth1}
                      onChange={selectBirthMonth1}
                      className={styles.getu}
                    >
                      <option value="">月を選択</option>
                    </select>
                    月
                  </label>
                </div>
              </div>
              <div className={styles["t-area"]}>
                <p className={styles.kategori}>退社年月</p>
                <div>
                  <label>
                    <select
                      ref={birthYearRef2}
                      value={birthYear2}
                      onChange={selectBirthYear2}
                      className={styles.nen}
                    >
                      <option value="">年を選択</option>
                    </select>
                    年
                  </label>
                  <label>
                    <select
                      ref={birthMonthRef2}
                      value={birthMonth2}
                      onChange={selectBirthMonth2}
                      className={styles.getu}
                    >
                      <option value="">月を選択</option>
                    </select>
                    月
                  </label>
                </div>
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
              <Hozon />

              {/* <div id="p-area" className={styles.parea}>
                <div id={styles.sakujo1} className={styles.trash}></div>
                <h5>＋</h5>
              </div> */}
            </div>
            <div id="area3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shokurekisho_edit;
