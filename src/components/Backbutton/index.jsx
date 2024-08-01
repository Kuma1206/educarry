import React from 'react'
import styles from "./style.module.scss";
import "css.gg/icons/css/arrow-left.css";

const Backbutton = () => {
  return (
      <div className={styles.icon}>
        <i className="gg-arrow-left custom-icon"></i>Back
      </div>
  );
}

export default Backbutton;
