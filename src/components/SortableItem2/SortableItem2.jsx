import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import styles from "./style.module.scss";

const SortableItem2 = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    // opacity: isDragging ? 0.5 : 1,
    // backgroundColor: isDragging ? '#f4a9b4' : '#fff', // ドラッグ中の背景色
    // border: isDragging ? '1px solid #e08a8a' : '1px solid #ccc', // ドラッグ中のボーダー
    // boxShadow: isDragging ? '0 0 0 2px rgba(0, 0, 0, 0.2)' : 'none', // ドラッグ中のシャドウ
    // padding: '10px',
    // borderRadius: '4px',
  };

  return (
    <div
      ref={setNodeRef}
      className={`${styles.ddbox} ${isDragging ? styles.dragging : ''}`}
      style={style}
      {...attributes}
      {...listeners}
    >
      {id}
    </div>
  );
};

export default SortableItem2;
