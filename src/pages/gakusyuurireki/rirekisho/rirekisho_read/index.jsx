import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import SideBar from "../../../../layout/SideBar";
import "css.gg/icons/css/file.css";

const Rirekisho1_read = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <div>
          <div className={styles.btitle}>
            <h2 className={styles.title}>
              <Link to="/gakusyuurireki">学習履歴フォルダ</Link>／履歴書
            </h2>
          </div>
          <div className={styles.hyoutotle}>
            <table>
              <thead>
                <tr className={styles.trmainbox}>
                  <th className={styles.thbox}>□</th>
                  <th></th>
                  <th className={styles.thtext}>フォルダ名</th>
                  <th className={styles.thtext}>更新日</th>
                  <th className={styles.thtext}>公開/非公開</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={styles.trbox}
                  onClick={() => (window.location.href = "/kojinjoho_edit")}
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
                  <td className={styles.tdtext}>個人情報</td>
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
                <tr
                  className={styles.trbox}
                  onClick={() => (window.location.href = "/gakureki_edit")}
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
                  <td className={styles.tdtext}>学歴</td>
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
                <tr
                  className={styles.trbox}
                  onClick={() => (window.location.href = "/shokureki_edit")}
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
                  <td className={styles.tdtext}>職歴</td>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Rirekisho1_read;
