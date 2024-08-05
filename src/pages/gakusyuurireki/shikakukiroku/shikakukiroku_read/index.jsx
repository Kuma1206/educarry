import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import SideBar from "../../../../layout/SideBar";
import "css.gg/icons/css/file.css";

const Shikakukiroku_read = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />

        <div>
          <div className={styles.btitle}>
            <h2 className={styles.title}>
              <Link to="/gakusyuurireki">学習履歴フォルダ</Link>／資格記録
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
                <tr className={styles.trbox}>
                  <td className={styles.tdtext}>
                    <input type="checkbox" className={styles.checkbox} />
                  </td>
                  <td className={styles.aicon}>
                    <i className="gg-file custom-icon"></i>
                  </td>
                  <td className={styles.tdtext}>資格名</td>
                  <td className={styles.tdtext}>2024-07-18</td>
                  <td className={styles.tdtext}>
                    <select className={styles.pldown}>
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

export default Shikakukiroku_read;
