import styles from "./style.module.scss";
import React, { useState, useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Draggable = ({ id, label, date, onClick, onMoveUp }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const [dragging, setDragging] = useState(false);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    if (!isDragging) {
      setDragging(false);
    }
  }, [isDragging]);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleClick = () => {
    if (!dragging) {
      if (onClick) {
        onClick(id);
      } else {
        window.location.href = `/${id}_read`;
      }
    }
  };

  const handleMoveUpClick = (e) => {
    e.stopPropagation();
    if (onMoveUp) {
      onMoveUp(id);
      setIsSliding(true);

      setTimeout(() => setIsSliding(false), 300);
    }
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`${styles.trbox} ${dragging ? styles.dragging : ""} ${
        isSliding ? styles.slideUp : ""
      }`}
      onClick={handleClick}
      onMouseDown={() => setDragging(false)}
      onMouseUp={() => setDragging(isDragging)}
    >
      <th className={styles.aicon}>
        <i className="gg-folder custom-icon"></i>
      </th>
      <th className={styles.aicon3}>
        <span className={styles.tdtext}>{label}</span>
        <span className={styles.tdtext2}>{date}</span>
      </th>
      <th className={styles.aicon2}>
        <select className={styles.pldown} onClick={(e) => e.stopPropagation()}>
          <option value="public">公開</option>
          <option value="private">非公開</option>
        </select>
      </th>
      <th className={styles.aicon4}>
        <div onClick={handleMoveUpClick} className={styles.iconstyle}>
          <i className="gg-chevron-up-o custom-icon"></i>
        </div>
      </th>
    </tr>
  );
};

export default Draggable;
