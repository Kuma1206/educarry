import React from "react";
import styles from "./style.module.scss";
import SideBar from "../../layout/SideBar";
import Rirekisho_edit from "../gakusyuurireki/rirekisho/rirekisho_read/kojinjoho_edit";

const Mypage_edit = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <div className={styles.contents}>
          <Rirekisho_edit />
        </div>
      </div>
    </>
  );
};

export default Mypage_edit;
