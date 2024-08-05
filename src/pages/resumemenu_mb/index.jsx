<<<<<<< HEAD
import React, { useState } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  DragOverlay,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import SortableItem2 from "../../components/SortableItem2/SortableItem2"; // SortableItemコンポーネントを別ファイルに定義

const Resumemenu_mb = () => {
  const [items, setItems] = useState(["履歴書", "職務経歴書", "ポートフォリオ"]);
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    setActiveId(null);

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

=======
// rafce リアクトの雛形が作れるショートカットです🤗

import React from "react";
// cssを紐づける
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const Resumemenu_mb = () => {
>>>>>>> 2c60dfe4d204653b19f71fd6c0ce1419125a78a9
  return (
    <>
      <div className={styles.boxmyresumetop}>
        <ul className={styles.boxmyresume}>
          <Link to="/rirekisho_top" className={styles.bbutton1}>
            <li>履歴書</li>
          </Link>
          <Link
            to="/shokumu_keireki"
            className={styles.bbutton2}
            style={{ lineHeight: "1.5" }}
          >
            <li>
              職務
              <br />
              経歴書
            </li>
          </Link>
          <Link
            to="/portfolio"
            className={styles.bbutton3}
            style={{ lineHeight: "1.5" }}
          >
            <li>
              ポート
              <br />
              フォリオ
            </li>
          </Link>
<<<<<<< HEAD
        </ul>
        <ul className={styles.boxmyresume}>
          <Link to="/sei_risshu" className={styles.bbutton4}>
            <li>生い立ち</li>
          </Link>
=======
          <Link to="/sei_risshu" className={styles.bbutton4}>
            <li>生い立ち</li>
          </Link>
        </ul>

        <ul className={styles.boxmyresume}>
>>>>>>> 2c60dfe4d204653b19f71fd6c0ce1419125a78a9
          <Link to="/rirekisho_read" className={styles.bbutton5}>
            <li>学習記録</li>
          </Link>
          <Link to="/shokumu_keireki" className={styles.bbutton6}>
            <li>資格記録</li>
          </Link>
<<<<<<< HEAD
        </ul>
        <ul className={styles.boxmyresume}>
=======
>>>>>>> 2c60dfe4d204653b19f71fd6c0ce1419125a78a9
          <Link
            to="/portfolio"
            className={styles.bbutton7}
            style={{ lineHeight: "1.5" }}
          >
            <li>
              社会
              <br />
              経験記録
            </li>
          </Link>
          <Link to="/sei_risshu" className={styles.bbutton8}>
            <li>研究記録</li>
          </Link>
        </ul>
<<<<<<< HEAD
        <div className={styles.ddbox}>
          <DndContext
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items}
              strategy={verticalListSortingStrategy}
            >
              {items.map((item) => (
                <SortableItem2 key={item} id={item} />
              ))}
            </SortableContext>
            <DragOverlay>
              {activeId ? <SortableItem2 id={activeId} /> : null}
            </DragOverlay>
          </DndContext>
        </div>
=======
>>>>>>> 2c60dfe4d204653b19f71fd6c0ce1419125a78a9
      </div>
    </>
  );
};

export default Resumemenu_mb;
