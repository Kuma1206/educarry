import React from "react";
import Gakusyuurireki_dt from "../../components/gakusyuurireki_dt";
import { useMediaQuery } from "react-responsive";
import Gakusyuurireki_mb from "../../components/gakusyuurireki_mb";

const Gakusyuurireki = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      <div>
        {" "}
        {/* 768px以上の時は、デスクトップ用のコンポーネントを表示 */}
        {isDesktop && <Gakusyuurireki_dt />}
        {/* 768px未満の時は、 モバイル用のコンポーネントを表示 */}
        {!isDesktop && <Gakusyuurireki_mb />}
      </div>
    </>
  );
};

export default Gakusyuurireki;
