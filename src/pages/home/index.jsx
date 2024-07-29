import React from "react";
import Profile_dt from "../../components/Profile_dt";
import { useMediaQuery } from "react-responsive";
import Profile_mb from "../../components/Profile_mb";

const Mypage = () => {
    const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      <div>
        {" "}
        {/* 768px以上の時は、デスクトップ用のコンポーネントを表示 */}
        {isDesktop && <Profile_dt />}
        {/* 768px未満の時は、 モバイル用のコンポーネントを表示 */}
        {!isDesktop && <Profile_mb />}
      </div>
    </>
  );
};

export default Mypage;
