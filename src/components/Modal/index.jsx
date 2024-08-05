import React from 'react'
import styles from "./style.module.scss";

const Modal = ({ show, handleClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalBackdrop} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeButton} onClick={handleClose}>
          &times;
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
