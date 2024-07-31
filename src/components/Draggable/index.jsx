  import styles from "./style.module.scss";
  import React, { useState, useEffect } from "react";
  import { useSortable } from "@dnd-kit/sortable";
  import { CSS } from "@dnd-kit/utilities";

  const Draggable = ({ id, label, date, onClick }) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({ id });

    const [dragging, setDragging] = useState(false);

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

    return (
      <tr
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className={styles.trbox}
        onClick={handleClick}
        onMouseDown={() => setDragging(false)}
        onMouseUp={() => setDragging(isDragging)}
      >
        <td className={styles.aicon}>
          <i className="gg-folder custom-icon"></i>
        </td>
        <td className={styles.tdtext}>{label}</td>
        <td className={styles.tdtext2}>{date}</td>
        <td className={styles.tdtext3}>
          <select className={styles.pldown} onClick={(e) => e.stopPropagation()}>
            <option value="public">公開</option>
            <option value="private">非公開</option>
          </select>
        </td>
      </tr>
    );
  };

  export default Draggable;
