import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import Resumemenu_mb from "../../pages/resumemenu_mb";
import "css.gg/icons/css/profile.css";
import SideBar_mb from "../../layout/SideBar_mb";
import QRcode from "react-qr-code";
import Modal from "../Modal";

const Profile_mb = () => {
  const [showModal, setShowModal] = useState(false);

  const handleQRCodeClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className={styles.home}>
        <div className={styles.hamburgermenu}>
          <SideBar_mb />
        </div>
        <div className={styles.profile}>
          <div className={styles.image}></div>
          <div className={styles.pbox}>
            <div className={styles.plofilebox1}>
              <p className={styles.jikopr}>現職：</p>
              {/* <textarea name="" id="" className={styles.textarea1}></textarea> */}
            </div>
            <div className={styles.plofilebox2}>
              <p className={styles.skiil}>所属：</p>
              {/* <textarea name="" id="" className={styles.textarea2}></textarea> */}
            </div>
            <div className={styles.plofilebox2}>
              <p className={styles.skiil}>部署：</p>
              {/* <textarea name="" id="" className={styles.textarea2}></textarea> */}
            </div>
          </div>
          <div className={styles.qrcode} onClick={handleQRCodeClick}>
            <QRcode value="http://localhost:5173/profile" />
          </div>
        </div>
        <div className={styles.skillbox}>
          <div className={styles.skill}>自己PR：</div>
          <div className={styles.skill}>所属スキル：</div>
        </div>
        <div className={styles.resumebox}>
          <Resumemenu_mb />
        </div>
      </div>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <QRcode value="https://educarry-w7df.vercel.app/" size={256} />
      </Modal>
    </>
  );
};

export default Profile_mb;
