import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import SideBar from "../../../../../layout/SideBar";
import Hozon from "../../../../../components/hozonbutton";
import { Link } from "react-router-dom";
import "css.gg/icons/css/math-plus.css";
import "css.gg/icons/css/trash-empty.css";

const Gakureki_edit = () => {
  const [educationAreas, setEducationAreas] = useState([0]);

  const handleAddArea = (index, type) => {
    if (type === "education") {
      const newAreas = [...educationAreas];
      newAreas.splice(index + 1, 0, educationAreas.length);
      setEducationAreas(newAreas);
    }
  };

  const handleDeleteArea = (index, type) => {
    if (type === "education") {
      const updatedAreas = educationAreas.filter((area, idx) => idx !== index);
      setEducationAreas(updatedAreas);
    }
  };

  // 年のオプションを設定
  const setYear = (elementId, defaultYear) => {
    const ref = document.getElementById(elementId);
    if (ref) {
      ref.innerHTML = ""; // 現在のオプションをクリア
      for (let i = 1930; i <= new Date().getFullYear(); i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = `${i}`;
        ref.appendChild(option);
      }
      // デフォルトの年を設定
      if (defaultYear) {
        ref.value = defaultYear;
      }
    }
  };

  // 月のオプションを設定
  const setMonth = (elementId) => {
    const ref = document.getElementById(elementId);
    if (ref) {
      ref.innerHTML = ""; // 現在のオプションをクリア
      for (let i = 1; i <= 12; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        ref.appendChild(option);
      }
    }
  };

  useEffect(() => {
    educationAreas.forEach((area, index) => {
      setYear(`birthYear1-${index}`, "2000");
      setMonth(`birthMonth1-${index}`);
      setYear(`birthYear2-${index}`, "2000");
      setMonth(`birthMonth2-${index}`);
    });
  }, [educationAreas]);

  const selectBirthYear1 = (index, e) => {
    setBirthYear1(e.target.value);
  };

  const selectBirthMonth1 = (index, e) => {
    setBirthMonth1(e.target.value);
  };

  const selectBirthYear2 = (index, e) => {
    setBirthYear2(e.target.value);
  };

  const selectBirthMonth2 = (index, e) => {
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
              <Link to="/rirekisho_read">履歴書一覧</Link>／学歴
            </h2>
          </div>
          <div className={styles.area1}>
            <h2 className={styles.titletext}>学　歴</h2>
            {educationAreas.map((area, index) => (
              <div key={index} className={`${styles.gakureki} ${styles.area2}`}>
                <div className={styles["t-area"]}>
                  <p className={styles.kategori}>入学年月</p>
                  <div>
                    <label>
                      <select
                        id={`birthYear1-${index}`}
                        onChange={(e) => selectBirthYear1(index, e)}
                        className={styles.nen}
                      >
                        <option value="">年を選択</option>
                      </select>
                      年
                    </label>
                    <label>
                      <select
                        id={`birthMonth1-${index}`}
                        onChange={(e) => selectBirthMonth1(index, e)}
                        className={styles.getu}
                      >
                        <option value="">月を選択</option>
                      </select>
                      月
                    </label>
                  </div>{" "}
                </div>
                <div className={styles["t-area"]}>
                  <p className={styles.kategori}>学校名</p>
                  <input
                    type="text"
                    className={styles.textarea}
                    name={`n_gakkoumei-${index}`}
                    placeholder="○○県立○○学校　○○科　入学"
                  />
                </div>
                <div className={styles["t-area"]}>
                  <p className={styles.kategori}>卒業年月</p>
                  <div>
                    <label>
                      <select
                        id={`birthYear2-${index}`}
                        onChange={(e) => selectBirthYear2(index, e)}
                        className={styles.nen}
                      >
                        <option value="">年を選択</option>
                      </select>
                      年
                    </label>
                    <label>
                      <select
                        id={`birthMonth2-${index}`}
                        onChange={(e) => selectBirthMonth2(index, e)}
                        className={styles.getu}
                      >
                        <option value="">月を選択</option>
                      </select>
                      月
                    </label>
                  </div>{" "}
                </div>
                <div className={styles["t-area"]}>
                  <p className={styles.kategori}>学校名</p>
                  <input
                    type="text"
                    className={styles.textarea}
                    name={`s_gakkoumei-${index}`}
                    placeholder="○○県立○○学校　○○科　卒業"
                  />
                </div>
                <div className={styles["p-area"]}>
                  <div
                    id={styles.sakujo1}
                    onClick={() => handleDeleteArea(index, "education")}
                  >
                    <i className="gg-trash-empty custom-icon"></i>
                  </div>
                  <h5
                    id="tuika"
                    onClick={() => handleAddArea(index, "education")}
                    className={styles.tuika}
                  >
                    <i className="gg-math-plus custom-icon"></i>
                  </h5>
                </div>
              </div>
            ))}
            <div id={styles.area3}></div>
            <Hozon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gakureki_edit;
