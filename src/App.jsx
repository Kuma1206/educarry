import Profile from "./pages/profile";
import Chart from "./pages/chart";
import Home from "./pages/home";
import Hozon from "./components/hozonbutton";
import Urllink from "./components/Urllink";
import Biography from "./pages/biography";
import Mypage_edit from "./pages/mypage_edit";
import Rirekisho1_read from "./pages/gakusyuurireki/rirekisho/rirekisho_read";
import Rirekisho_edit from "./pages/gakusyuurireki/rirekisho/rirekisho_read/kojinjoho_edit";
import Rirekisho_top from "./pages/gakusyuurireki/rirekisho_top";
// import Rirekisho_top_mb from "./components/Rirekisho_top_mb";
import Shokurekisho_read from "./pages/gakusyuurireki/shokureki/shokurekisho_read";
import Kojinjoho_edit from "./pages/gakusyuurireki/rirekisho/rirekisho_read/kojinjoho_edit";
import Gakureki_edit from "./pages/gakusyuurireki/rirekisho/rirekisho_read/gakureki_edit";
import Shokureki_edit from "./pages/gakusyuurireki/rirekisho/rirekisho_read/shokureki_edit";
import Shokurekisho_edit from "./pages/gakusyuurireki/shokureki/shokurekisho_edit";
import Portfolio_read from "./pages/gakusyuurireki/portfolio/portfolio_read";
import Oitachi_read from "./pages/gakusyuurireki/oitachi/oitachi_read";
import Syakai_read from "./pages/gakusyuurireki/gakusyuureki_syakai/syakai_read";
import Gakkou_read from "./pages/gakusyuurireki/gakusyuureki_gakkou/gakkou_read";
import Shikakukiroku_read from "./pages/gakusyuurireki/shikakukiroku/shikakukiroku_read";
import Syakaikeiken_read from "./pages/gakusyuurireki/syakaikeiken/syakaikeiken_read";
import Kenkyuu_read from "./pages/gakusyuurireki/kenkyuu/kenkyuu_read";
import Gakusyuurireki from "./pages/gakusyuurireki";
import Gakusyuurireki_mb from "./components/gakusyuurireki_mb";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound404 from "./pages/notfound";
import Resumemenu_dt from "./pages/resumemenu_dt";
import Resumemenu_mb from "./pages/resumemenu_mb";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      {/*  */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/urllink" element={<Urllink />} />
          <Route path="/hozonbutton" element={<Hozon />} />
          <Route path="/mypage_edit" element={<Mypage_edit />} />
          <Route path="/rirekisho_read" element={<Rirekisho1_read />} />
          <Route path="/rirekisho_edit" element={<Rirekisho_edit />} />
          <Route path="/rirekisho_top" element={<Rirekisho_top />} />
          {/* <Route path="/rirekisho_top_mb" element={<Rirekisho_top_mb />} /> */}
          <Route path="/kojinjoho_edit" element={<Kojinjoho_edit />} />
          <Route path="/gakureki_edit" element={<Gakureki_edit />} />
          <Route path="/shokureki_edit" element={<Shokureki_edit />} />
          <Route path="/shokurekisho_read" element={<Shokurekisho_read />} />
          <Route path="/shokurekisho_edit" element={<Shokurekisho_edit />} />
          <Route path="/portfolio_read" element={<Portfolio_read />} />
          <Route path="/oitachi_read" element={<Oitachi_read />} />
          <Route path="/gakkou_read" element={<Gakkou_read />} />
          <Route path="/syakai_read" element={<Syakai_read />} />
          <Route path="/shikakukiroku_read" element={<Shikakukiroku_read />} />
          <Route path="/syakaikeiken_read" element={<Syakaikeiken_read />} />
          <Route path="/kenkyuu_read" element={<Kenkyuu_read />} />
          <Route path="/resumemenu_dt" element={<Resumemenu_dt />} />
          <Route path="/resumemenu_mb" element={<Resumemenu_mb />} />
          <Route path="/gakusyuurireki" element={<Gakusyuurireki />} />
          <Route path="/gakusyuurireki_mb" element={<Gakusyuurireki_mb />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>
      {/*  */}
    </>
  );
}

export default App;
