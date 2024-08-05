import React, { useState } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import Urllink from "../Urllink";
import "css.gg/icons/css/folder.css";
import "css.gg/icons/css/chevron-up-o.css";
import Backbutton from "../Backbutton";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import Draggable from "../../components/Draggable";

const Gakusyuurireki_mb = () => {
  const [items, setItems] = useState([
    { id: "item1", label: "履歴書", date: "2024-07-18" },
    { id: "item2", label: "職務経歴書", date: "2024-07-17" },
    { id: "item3", label: "ポートフォリオ", date: "2024-07-17" },
    { id: "item4", label: "生い立ち", date: "2024-07-17" },
    { id: "item5", label: "学習歴_学校", date: "2024-07-17" },
    { id: "item6", label: "学習歴_社会", date: "2024-07-17" },
    { id: "item7", label: "資格記録", date: "2024-07-17" },
    { id: "item8", label: "研究記録", date: "2024-07-17" },
  ]);

  function reorderArray(array, activeId, overId) {
    const activeIndex = array.findIndex((item) => item.id === activeId);
    const overIndex = array.findIndex((item) => item.id === overId);

    if (activeIndex === -1 || overIndex === -1) {
      throw new Error("要素が配列内に存在しません。");
    }

    const newArray = [...array];
    const [movedItem] = newArray.splice(activeIndex, 1);
    newArray.splice(overIndex, 0, movedItem);

    return newArray;
  }

  function handleDragOver(event) {
    const { over, active } = event;

    if (over && active && over.id !== active.id) {
      setItems((prevItems) => reorderArray(prevItems, active.id, over.id));
    }
  }

  const handleClick = (id) => {
    if (id === "item1") {
      window.location.href = "/rirekisho_read";
    }
  };


  const handleMoveUp = (id) => {
    const index = items.findIndex((item) => item.id === id);
    if (index > 0) {
      const newList = [...items];
      const [item] = newList.splice(index, 1);
      newList.splice(index - 1, 0, item);
      setItems(newList);
    }
  };

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
                  <th className={styles.thtext3}>
                    <Urllink initialText="公開" />
                  </th>
                  <th className={styles.thtext2}>
                    <Urllink initialText="" />
                  </th>
                </tr>
              </thead>
              {/* <DndContext onDragOver={handleDragOver}> */}
                <tbody className={styles.zenbu}>
                  <SortableContext items={items.map((item) => item.id)}>
                    {items.map((item) => (
                      <Draggable
                        key={item.id}
                        id={item.id}
                        label={item.label}
                        date={item.date}
                        onClick={handleClick}
                        onMoveUp={handleMoveUp}
                      />
                    ))}
                  </SortableContext>
                </tbody>
              {/* </DndContext> */}
              {/* <tbody>
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
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gakusyuurireki_mb;
