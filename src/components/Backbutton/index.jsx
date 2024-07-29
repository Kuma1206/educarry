import React from 'react'
import styles from "./style.module.scss";
import "css.gg/icons/css/arrow-left.css";

const Backbutton = () => {
  return (
      <td className={styles.icon}>
        <i className="gg-arrow-left custom-icon"></i>Back
      </td>
  );
}

export default Backbutton;
