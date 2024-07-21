import React, { useState } from "react";
import styles from "./style.module.scss";

const Rirekisho_edit = () => {
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

  return (
    <>
      <div className={styles.area1}>
        <h2 className={styles.titletext}>学　歴</h2>
        {educationAreas.map((area, index) => (
          <div key={index} className={`${styles.gakureki} ${styles.area2}`}>
            <div className={styles["t-area"]}>
              <p className={styles.kategori}>入学年月</p>
              <input type="date" name="nyugaku[]" />
            </div>
            <div className={styles["t-area"]}>
              <p className={styles.kategori}>学校名</p>
              <input
                type="text"
                className={styles.textarea}
                name="n_gakkoumei[]"
                placeholder="○○県立○○学校　○○科　入学"
              />
            </div>
            <div className={styles["t-area"]}>
              <p className={styles.kategori}>卒業年月</p>
              <input type="date" name="sotsugyou[]" />
            </div>
            <div className={styles["t-area"]}>
              <p className={styles.kategori}>学校名</p>
              <input
                type="text"
                className={styles.textarea}
                name="s_gakkoumei[]"
                placeholder="○○県立○○学校　○○科　卒業"
              />
            </div>
            <div className={styles["p-area"]}>
              <div
                id={styles.sakujo1}
                className={styles.trash}
                onClick={() => handleDeleteArea(index, "education")}
              ></div>
              <h5 id="tuika" onClick={() => handleAddArea(index, "education")}>
                ＋
              </h5>
            </div>
          </div>
        ))}
        <div id={styles.area3}></div>

        <h2 className={styles.titletext}>職　歴</h2>
        {workAreas.map((area, index) => (
          <div key={index} className={`${styles.gakureki} ${styles.area4}`}>
            <div className={styles["t-area"]}>
              <p className={styles.kategori}>入社年月</p>
              <input type="date" name="nyuusya[]" />
            </div>
            <div className={styles["t-area"]}>
              <p className={styles.kategori}>会社名</p>
              <input
                type="text"
                className={styles.textarea}
                name="n_kaisyamei[]"
                placeholder="株式会社○○　入社"
              />
            </div>
            <div className={styles["t-area"]}>
              <p className={styles.kategori}>退社年月</p>
              <input type="date" name="taisya[]" />
            </div>
            <div className={styles["t-area"]}>
              <p className={styles.kategori}>会社名</p>
              <input
                type="text"
                className={styles.textarea}
                name="s_kaisyamei[]"
                placeholder="株式会社○○　退社"
              />
            </div>
            <div className={styles["p-area"]}>
              <div
                id={styles.sakujo1}
                className={styles.trash}
                onClick={() => handleDeleteArea(index, "work")}
              ></div>
              <h5 id="tuika2" onClick={() => handleAddArea(index, "work")}>
                ＋
              </h5>
            </div>
          </div>
        ))}
        <div id={styles.area5}></div>

        <h2 className={styles.titletext}>免許・資格</h2>
        <div id="area3" className={styles.area1}>
          {licenseAreas.map((area, index) => (
            <div key={index} className={`${styles.shikaku} ${styles.area6}`}>
              <div className={styles["t-area"]}>
                <p className={styles.kategori}>取得日</p>
                <input type="date" name="syutoku" />
              </div>
              <div className={styles["t-area"]}>
                <p className={styles.kategori}>免許・資格</p>
                <input
                  type="text"
                  className={styles.textarea}
                  name="shikaku[]"
                  placeholder="○○免許　取得"
                />
              </div>
              <div className={styles["p-area"]}>
                <div
                  id={styles.sakujo1}
                  className={styles.trash}
                  onClick={() => handleDeleteArea(index, "license")}
                ></div>
                <h5 id="tuika3" onClick={() => handleAddArea(index, "license")}>
                  ＋
                </h5>
              </div>
            </div>
          ))}
          <div id={styles.area7}></div>
        </div>
      </div>
    </>
  );
};

export default Rirekisho_edit;
