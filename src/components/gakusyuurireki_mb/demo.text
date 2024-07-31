import React, { useState } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import Urllink from "../Urllink";
import "css.gg/icons/css/folder.css";
import Backbutton from "../Backbutton";

const Gakusyuurireki_mb = () => {
  return (
    <>
      <div className={styles.zenbu}>
        <div className={styles.header}>
          <div className={styles.backbutton}>
            <Link to="/profile">
              <Backbutton />
            </Link>
          </div>
        </div>
        <div className={styles.btitle}>
          <h2 className={styles.title}>学習履歴フォルダ</h2>
        </div>
        <div className={styles.home}>
          <div className={styles.hyoutotle}>
            <table>
              <thead>
                <tr className={styles.trmainbox}>
                  <th className={styles.thbox}></th>
                  <th className={styles.thtext}>
                    <Urllink initialText="ファイル名" />
                  </th>
                  <th className={styles.thtext}>
                    <Urllink initialText="公開" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={styles.trbox}
                  onClick={() => (window.location.href = "/rirekisho_read")}
                >
                  <td className={styles.aicon}>
                    <i className="gg-folder custom-icon"></i>
                  </td>
                  <div className={styles.rirekishobox}>
                    <td className={styles.tdtext}>履歴書</td>
                    <td className={styles.tdtext2}>2024-07-18</td>
                  </div>
                  <td className={styles.tdtext3}>
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
                  onClick={() => (window.location.href = "/shokurekisho_read")}
                >
                  <td className={styles.aicon}>
                    <i className="gg-folder custom-icon"></i>
                  </td>{" "}
                  <td className={styles.tdtext}>職務経歴書</td>
                  <td className={styles.tdtext2}>2024-07-17</td>
                  <td className={styles.tdtext3}>
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
                  onClick={() => (window.location.href = "/portfolio_read")}
                >
                  <td className={styles.aicon}>
                    <i className="gg-folder custom-icon"></i>
                  </td>{" "}
                  <td className={styles.tdtext}>ポートフォリオ</td>
                  <td className={styles.tdtext2}>2024-07-17</td>
                  <td className={styles.tdtext3}>
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
                  onClick={() => (window.location.href = "/oitachi_read")}
                >
                  <td className={styles.aicon}>
                    <i className="gg-folder custom-icon"></i>
                  </td>{" "}
                  <td className={styles.tdtext}>生い立ち</td>
                  <td className={styles.tdtext2}>2024-07-17</td>
                  <td className={styles.tdtext3}>
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
                  onClick={() => (window.location.href = "/gakkou_read")}
                >
                  <td className={styles.aicon}>
                    <i className="gg-folder custom-icon"></i>
                  </td>{" "}
                  <td className={styles.tdtext}>学習歴_学校</td>
                  <td className={styles.tdtext2}>2024-07-17</td>
                  <td className={styles.tdtext3}>
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
                  onClick={() => (window.location.href = "/syakai_read")}
                >
                  <td className={styles.aicon}>
                    <i className="gg-folder custom-icon"></i>
                  </td>{" "}
                  <td className={styles.tdtext}>学習歴_社会 </td>
                  <td className={styles.tdtext2}>2024-07-17</td>
                  <td className={styles.tdtext3}>
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
                  onClick={() => (window.location.href = "/shikakukiroku_read")}
                >
                  <td className={styles.aicon}>
                    <i className="gg-folder custom-icon"></i>
                  </td>{" "}
                  <td className={styles.tdtext}>資格記録 </td>
                  <td className={styles.tdtext2}>2024-07-17</td>
                  <td className={styles.tdtext3}>
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
                  onClick={() => (window.location.href = "/syakaikeiken_read")}
                >
                  <td className={styles.aicon}>
                    <i className="gg-folder custom-icon"></i>
                  </td>{" "}
                  <td className={styles.tdtext}>社会経験記録 </td>
                  <td className={styles.tdtext2}>2024-07-17</td>
                  <td className={styles.tdtext3}>
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
                  onClick={() => (window.location.href = "/kenkyuu_read")}
                >
                  <td className={styles.aicon}>
                    <i className="gg-folder custom-icon"></i>
                  </td>{" "}
                  <td className={styles.tdtext}>研究記録 </td>
                  <td className={styles.tdtext2}>2024-07-17</td>
                  <td className={styles.tdtext3}>
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

export default Gakusyuurireki_mb;
