import Mypage from "./pages/mypage";
import Chart from "./pages/chart";
import Home from "./pages/home";
import Rirekisho_edit from "./pages/gakusyuurireki/rirekisho/rirekisho_edit";
import Shokureki from "./pages/gakusyuurireki/shokureki/shokureki_edit";
import Biography from "./pages/biography";
import Mypage_edit from "./pages/mypage_edit";
import Rirekisho1_read from "./pages/gakusyuurireki/rirekisho/rirekisho_read";
import Shokureki_read from "./pages/gakusyuurireki/shokureki/shokureki_read";
import Shokureki_edit from "./pages/gakusyuurireki/shokureki/shokureki_edit";
import Portfolio_read from "./pages/gakusyuurireki/portfolio/portfolio_read";
import Oitachi_read from "./pages/gakusyuurireki/oitachi/oitachi_read";
import Syakai_read from "./pages/gakusyuurireki/gakusyuureki_syakai/syakai_read";
import Gakkou_read from "./pages/gakusyuurireki/gakusyuureki_gakkou/gakkou_read";
import Shikakukiroku_read from "./pages/gakusyuurireki/shikakukiroku/shikakukiroku_read";
import Syakaikeiken_read from "./pages/gakusyuurireki/syakaikeiken/syakaikeiken_read";
import Kenkyuu_read from "./pages/gakusyuurireki/kenkyuu/kenkyuu_read";
import Gakusyuurireki from "./pages/gakusyuurireki";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound404 from "./pages/notfound";
import Resumemenu from "./pages/resumemenu";


function App() {
  return (
    <>
      {/*  */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Mypage />} />
          <Route path="/shokureki" element={<Shokureki />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/mypage_edit" element={<Mypage_edit />} />
          <Route path="/rirekisho_read" element={<Rirekisho1_read />} />
          <Route path="/rirekisho_edit" element={<Rirekisho_edit />} />
          <Route path="/shokureki_read" element={<Shokureki_read />} />
          <Route path="/shokureki_edit" element={<Shokureki_edit />} />
          <Route path="/portfolio_read" element={<Portfolio_read />} />
          <Route path="/oitachi_read" element={<Oitachi_read />} />
          <Route path="/gakkou_read" element={<Gakkou_read />} />
          <Route path="/syakai_read" element={<Syakai_read />} />
          <Route path="/shikakukiroku_read" element={<Shikakukiroku_read />} />
          <Route path="/syakaikeiken_read" element={<Syakaikeiken_read />} />
          <Route path="/kenkyuu_read" element={<Kenkyuu_read />} />
          <Route path="/resumemenu" element={<Resumemenu />} />
          <Route path="/gakusyuurireki" element={<Gakusyuurireki />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>
      {/*  */}
    </>
  );
}

export default App;
