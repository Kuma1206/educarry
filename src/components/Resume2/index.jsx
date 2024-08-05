import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import Rirekisho from "../../pages/rirekisho";
import Shokureki from "../../pages/shokureki";
import Portfolio from "../../pages/portfolio";
import Biography from "../../pages/biography";


const Resume2 = () => {
  const [selectedTab, setSelectedTab] = useState("syorui");

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <>
      <div className={styles.tabs}>
        {/* 書類選考タブ */}
        <input
          id="syorui"
          type="radio"
          name="tab_item"
          checked={selectedTab === "syorui"}
          onChange={() => handleTabChange("syorui")}
        />
        <label className={styles.tab_item} htmlFor="syorui">
          履歴書
        </label>

        {/* 一次面接タブ */}
        <input
          id="itiji"
          type="radio"
          name="tab_item"
          checked={selectedTab === "itiji"}
          onChange={() => handleTabChange("itiji")}
        />
        <label className={styles.tab_item} htmlFor="itiji">
          職務経歴書
        </label>

        {/* 二次面接タブ */}
        <input
          id="niji"
          type="radio"
          name="tab_item"
          checked={selectedTab === "niji"}
          onChange={() => handleTabChange("niji")}
        />
        <label className={styles.tab_item} htmlFor="niji">
          ポートフォリオ
        </label>

        {/* 採用確定タブ */}
        <input
          id="saiyou"
          type="radio"
          name="tab_item"
          checked={selectedTab === "saiyou"}
          onChange={() => handleTabChange("saiyou")}
        />
        <label className={styles.tab_item} htmlFor="saiyou">
          Biography
        </label>

        {/* 各タブのコンテンツ */}
        <div
          className="tab_content"
          id="syorui_content"
          style={{ display: selectedTab === "syorui" ? "block" : "none" }}
        >
        <Rirekisho />
        </div>
        <div
          className="tab_content"
          id="itiji_content"
          style={{ display: selectedTab === "itiji" ? "block" : "none" }}
        >
        <Shokureki />
        </div>
        <div
          className="tab_content"
          id="niji_content"
          style={{ display: selectedTab === "niji" ? "block" : "none" }}
        >
        <Portfolio />
        </div>
        <div
          className="tab_content"
          id="saiyou_content"
          style={{ display: selectedTab === "saiyou" ? "block" : "none" }}
        >
        <Biography />
        </div>
      </div>
    </>
  );
};

export default Resume2;
