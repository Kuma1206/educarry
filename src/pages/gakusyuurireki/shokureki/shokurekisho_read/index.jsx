import React, { useState } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import SideBar from "../../../../layout/SideBar";
import "css.gg/icons/css/file.css";
import "css.gg/icons/css/file-add.css";

const Shokurekisho_read = () => {
  const [tbodies, setTbodies] = useState([]);

  // 新しい tbody を追加する関数
  const handleAddTbody = () => {
    const newTbody = (
      <tbody key={tbodies.length}>
        <tr
          className={styles.trbox}
          onClick={() => (window.location.href = "/shokurekisho_edit")}
        >
          <td className={styles.tdtext}>
            <input
              type="checkbox"
              className={styles.checkbox}
              onClick={(e) => e.stopPropagation()}
            />
          </td>
          <td className={styles.aicon}>
            <i className="gg-file custom-icon"></i>
          </td>
          <td className={styles.tdtext}>入社日</td>
          <td className={styles.tdtext}>企業名</td>
          <td className={styles.tdtext}>2024-07-18</td>
          <td className={styles.tdtext}>
            <select
              className={styles.pldown}
              onClick={(e) => e.stopPropagation()}
            >
              <option value="public">公開</option>
              <option value="private">非公開</option>
            </select>
          </td>
        </tr>
      </tbody>
    );
    setTbodies([...tbodies, newTbody]);
  };

  return (
    <>
      <div className={styles.home}>
        <SideBar />

        <div>
          <div className={styles.btitle}>
            <h2 className={styles.title}>
              <Link to="/gakusyuurireki">学習履歴フォルダ</Link>／職務経歴書
            </h2>
          </div>
          <div className={styles.hyoutotle}>
            <table>
              <thead>
                <tr className={styles.trmainbox}>
                  <th className={styles.thbox}>□</th>
                  <th></th>
                  <th className={styles.thtext}>入社日</th>
                  <th className={styles.thtext}>企業名</th>
                  <th className={styles.thtext}>更新日</th>
                  <th className={styles.thtext}>公開/非公開</th>
                </tr>
              </thead>
              {tbodies}
              <tbody>
                <tr
                  className={styles.trbox}
                  onClick={() => (window.location.href = "/shokurekisho_edit")}
                >
                  <td className={styles.tdtext}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                  <td className={styles.aicon}>
                    <i className="gg-file custom-icon"></i>
                  </td>
                  <td className={styles.tdtext}>入社日</td>
                  <td className={styles.tdtext}>企業名</td>
                  <td className={styles.tdtext}>2024-07-18</td>
                  <td className={styles.tdtext}>
                    <select
                      className={styles.pldown}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <option value="public">公開</option>
                      <option value="private">非公開</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <div id={styles.area3}></div>
            <tbody>
              <tr className={styles.trbox2}>
                <td className={styles.tdtext2} onClick={handleAddTbody}>
                  <i className="gg-file-add custom-icon"></i>
                </td>
              </tr>
            </tbody>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shokurekisho_read;
