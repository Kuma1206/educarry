import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import styles from "./style.module.scss";

const SortableItem = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={styles.trbox}
      onClick={() => (window.location.href = item.link)}
    >
      <td className={styles.aicon}>
        <i className="gg-folder custom-icon"></i>
      </td>
      <td className={styles.tdtext}>{item.name}</td>
      <td className={styles.tdtext2}>{item.date}</td>
      <td className={styles.tdtext3}>
        <select className={styles.pldown} onClick={(e) => e.stopPropagation()}>
          <option value="public">公開</option>
          <option value="private">非公開</option>
        </select>
      </td>
    </tr>
  );
};

export default SortableItem;
