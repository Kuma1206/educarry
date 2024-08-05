import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import Backbutton from "../../components/Backbutton";

const Rirekisho_top_mb = () => {
  return (
    <div className={styles.home}>
      <div className={styles.backbutton}>
        <Link to="/profile">
          <Backbutton />
        </Link>
      </div>
      <div className={styles.mainbox}>
        履歴書
        <div className={styles.rirekishobox}>履歴書を登録しよう！</div>
      </div>
    </div>
  );
};

export default Rirekisho_top_mb;
