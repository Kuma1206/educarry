import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import SideBar from "../../../../../layout/SideBar";
import Hozon from "../../../../../components/hozonbutton";
import { Link } from "react-router-dom";
import "css.gg/icons/css/math-plus.css";
import "css.gg/icons/css/trash-empty.css";

const Shokureki_edit = () => {
  const [educationAreas, setEducationAreas] = useState([0]);
  const [workAreas, setWorkAreas] = useState([0]);
  const [licenseAreas, setLicenseAreas] = useState([0]);

  const handleAddArea = (index, type) => {
    if (type === "education") {
      const newAreas = [...educationAreas];
      newAreas.splice(index + 1, 0, educationAreas.length + 1);
      setEducationAreas(newAreas);
    } else if (type === "work") {
      const newAreas = [...workAreas];
      newAreas.splice(index + 1, 0, workAreas.length + 1);
      setWorkAreas(newAreas);
    } else if (type === "license") {
      const newAreas = [...licenseAreas];
      newAreas.splice(index + 1, 0, licenseAreas.length + 1);
      setLicenseAreas(newAreas);
    }
  };

  const handleDeleteArea = (index, type) => {
    if (type === "education") {
      const updatedAreas = educationAreas.filter((area, idx) => idx !== index);
      setEducationAreas(updatedAreas);
    } else if (type === "work") {
      const updatedAreas = workAreas.filter((area, idx) => idx !== index);
      setWorkAreas(updatedAreas);
    } else if (type === "license") {
      const updatedAreas = licenseAreas.filter((area, idx) => idx !== index);
      setLicenseAreas(updatedAreas);
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
    workAreas.forEach((area, index) => {
      setYear(`birthYear1-work-${index}`, "2000");
      setMonth(`birthMonth1-work-${index}`);
      setYear(`birthYear2-work-${index}`, "2000");
      setMonth(`birthMonth2-work-${index}`);
    });
  }, [workAreas]);

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
              <Link to="/rirekisho_read">履歴書一覧</Link>／ 職歴
            </h2>
          </div>
          <div className={styles.area1}>
            <h2 className={styles.titletext}>職　歴</h2>
            {workAreas.map((area, index) => (
              <div key={index} className={`${styles.gakureki} ${styles.area4}`}>
                <div className={styles["t-area"]}>
                  <p className={styles.kategori}>入社年月</p>
                  <div>
                    <label>
                      <select
                        id={`birthYear1-work-${index}`}
                        onChange={(e) => selectBirthYear1(index, e)}
                        className={styles.nen}
                      >
                        <option value="">年を選択</option>
                      </select>
                      年
                    </label>
                    <label>
                      <select
                        id={`birthMonth1-work-${index}`}
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
                  <p className={styles.kategori}>会社名</p>
                  <input
                    type="text"
                    className={styles.textarea}
                    name={`n_kaisyamei-${index}`}
                    placeholder="株式会社○○　入社"
                  />
                </div>
                <div className={styles["t-area"]}>
                  <p className={styles.kategori}>退社年月</p>
                  <div>
                    <label>
                      <select
                        id={`birthYear2-work-${index}`}
                        onChange={(e) => selectBirthYear2(index, e)}
                        className={styles.nen}
                      >
                        <option value="">年を選択</option>
                      </select>
                      年
                    </label>
                    <label>
                      <select
                        id={`birthMonth2-work-${index}`}
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
                  <p className={styles.kategori}>会社名</p>
                  <input
                    type="text"
                    className={styles.textarea}
                    name={`s_kaisyamei-${index}`}
                    placeholder="株式会社○○　退社"
                  />
                </div>
                <div className={styles["p-area"]}>
                  <div
                    id={styles.sakujo1}
                    onClick={() => handleDeleteArea(index, "work")}
                  >
                    <i className="gg-trash-empty custom-icon"></i>
                  </div>
                  <h5 id="tuika2" onClick={() => handleAddArea(index, "work")}
                  className={styles.tuika2}>
                    <i className="gg-math-plus custom-icon"></i>
                  </h5>
                </div>
              </div>
            ))}
            <div id={styles.area5}></div>
            <Hozon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shokureki_edit;
