import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import SideBar from "../../layout/SideBar";

const Gakusyuurireki = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />

        <div>
          <div className={styles.btitle}>
            <h2 className={styles.title}>学習履歴フォルダ</h2>
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
                  onClick={() => (window.location.href = "/rirekisho_read")}
                >
                  <td className={styles.tdtext}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                  <td className={styles.aicon}>📁</td>
                  <td className={styles.tdtext}>履歴書</td>
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
                  onClick={() => (window.location.href = "/shokureki_read")}
                >
                  <td className={styles.tdtext}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                  <td className={styles.aicon}>📁</td>
                  <td className={styles.tdtext}>職務経歴書</td>
                  <td className={styles.tdtext}>2024-07-17</td>
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
                  onClick={() => (window.location.href = "/portfolio_read")}
                >
                  <td className={styles.tdtext}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                  <td className={styles.aicon}>📁</td>
                  <td className={styles.tdtext}>ポートフォリオ</td>
                  <td className={styles.tdtext}>2024-07-17</td>
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
                  onClick={() => (window.location.href = "/oitachi_read")}
                >
                  <td className={styles.tdtext}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                  <td className={styles.aicon}>📁</td>
                  <td className={styles.tdtext}>生い立ち</td>
                  <td className={styles.tdtext}>2024-07-17</td>
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
                  onClick={() => (window.location.href = "/gakkou_read")}
                >
                  <td className={styles.tdtext}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                  <td className={styles.aicon}>📁</td>
                  <td className={styles.tdtext}>学習歴_学校</td>
                  <td className={styles.tdtext}>2024-07-17</td>
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
                  onClick={() => (window.location.href = "/syakai_read")}
                >
                  <td className={styles.tdtext}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                  <td className={styles.aicon}>📁</td>
                  <td className={styles.tdtext}>学習歴_社会 </td>
                  <td className={styles.tdtext}>2024-07-17</td>
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
                  onClick={() => (window.location.href = "/shikakukiroku_read")}
                >
                  <td className={styles.tdtext}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                  <td className={styles.aicon}>📁</td>
                  <td className={styles.tdtext}>資格記録 </td>
                  <td className={styles.tdtext}>2024-07-17</td>
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
                  onClick={() => (window.location.href = "/syakaikeiken_read")}
                >
                  <td className={styles.tdtext}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                  <td className={styles.aicon}>📁</td>
                  <td className={styles.tdtext}>社会経験記録 </td>
                  <td className={styles.tdtext}>2024-07-17</td>
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
                  onClick={() => (window.location.href = "/kenkyuu_read")}
                >
                  <td className={styles.tdtext}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                  <td className={styles.aicon}>📁</td>
                  <td className={styles.tdtext}>研究記録 </td>
                  <td className={styles.tdtext}>2024-07-17</td>
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

        {/* <div className={styles.boxmyresume}>
          <Link to="/rirekisho_read" className={styles.bbutton}>
            <button className={styles.btext}>履歴書</button>
          </Link>
          <Link to="/shokumu_keireki" className={styles.bbutton}>
            <button className={styles.btext}>職務経歴書</button>
          </Link>
          <Link to="/portfolio" className={styles.bbutton}>
            <button className={styles.btext}>ポートフォリオ</button>
          </Link>
          <Link to="/sei_risshu" className={styles.bbutton}>
            <button className={styles.btext}>生い立ち</button>
          </Link>
          <Link to="/rirekisho_read" className={styles.bbutton}>
            <button className={styles.btext}>学習記録</button>
          </Link>
          <Link to="/shokumu_keireki" className={styles.bbutton}>
            <button className={styles.btext}>資格記録</button>
          </Link>
          <Link to="/portfolio" className={styles.bbutton}>
            <button className={styles.btext}>社会経験記録</button>
          </Link>
          <Link to="/sei_risshu" className={styles.bbutton}>
            <button className={styles.btext}>研究記録</button>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Gakusyuurireki;
