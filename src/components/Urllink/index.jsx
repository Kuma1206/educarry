import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./style.module.scss";

const Urllink = ({ initialText }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [isEditingText, setIsEditingText] = useState(false);
  const [url, setUrl] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [text, setText] = useState(initialText);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleUrlSubmit = (e) => {
    if (e.key === "Enter") {
      setLinkUrl(url);
      setIsEditingUrl(false);
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleTextSubmit = (e) => {
    if (e.key === "Enter" || e.type === "blur") {
      setIsEditingText(false);
    }
  };

  return (
    <td
      className={styles.thtext}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative" }} // 必要に応じて追加
    >
      {linkUrl ? (
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ) : (
        <span onClick={() => setIsEditingText(true)}>{text}</span>
      )}
      {isHovered && !isEditingUrl && !isEditingText && (
        <div className={styles.iconsContainer}>
          <span
            onClick={() => setIsEditingUrl(true)}
            className={styles.linkIcon} // アイコンのスタイルを適用
          >
            🔗
          </span>
          <span
            onClick={() => setIsEditingText(true)}
            className={styles.editIcon} // アイコンのスタイルを適用
          >
            ✎
          </span>
        </div>
      )}
      <CSSTransition
        in={isEditingUrl}
        timeout={0}
        classNames={{
          enter: styles.popUpEnter,
          enterActive: styles.popUpEnterActive,
          exit: styles.popUpExit,
          exitActive: styles.popUpExitActive,
        }}
        unmountOnExit
      >
        <div className={styles.popUp}>
          <input
            type="text"
            value={url}
            onChange={handleUrlChange}
            onKeyDown={handleUrlSubmit}
            onBlur={() => setIsEditingUrl(false)}
            className={styles.inputbox}
            placeholder="URLを挿入"
            autoFocus
          />
        </div>
      </CSSTransition>
      <CSSTransition
        in={isEditingText}
        timeout={0}
        classNames={{
          enter: styles.popUpEnter,
          enterActive: styles.popUpEnterActive,
          exit: styles.popUpExit,
          exitActive: styles.popUpExitActive,
        }}
        unmountOnExit
      >
        <div className={styles.popUp2}>
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            onKeyDown={handleTextSubmit}
            onBlur={handleTextSubmit}
            placeholder="テキストを入力"
            className={styles.inputbox}
            autoFocus
          />
        </div>
      </CSSTransition>
    </td>
  );
};

export default Urllink;
