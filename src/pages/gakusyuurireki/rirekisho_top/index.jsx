import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import Rirekisho_top_mb from "../../../components/Rirekisho_top_mb";

const Rirekisho_top = () => {
  return (
    <div className={styles.home}>
      <Rirekisho_top_mb />
    </div>
  );
};

export default Rirekisho_top;
