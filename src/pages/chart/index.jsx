import React from "react";
import styles from "./style.module.scss";
import SideBar from "../../layout/SideBar";
import ChartBar from "../../components/ChartBar";

const Chart = () => {
  return (
    <>
      <div className={styles.chart}>
        <SideBar />
        <ChartBar />
      </div>
    </>
  );
};

export default Chart;
