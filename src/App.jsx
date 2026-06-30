import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Page1HomePage from "./component/Page1HomePage";
import Page2HomePage from "./component/Page2HomePage";
import AppWeather from "./component/AppWeather";
import Alibrzn from "./component/Alibrzn";

function App() {
  return (
    <div>
      <div className="bg-red-50">
        <div className="fixed right-0 left-0 top-0">
          <img className="w-full" src="../src/assets/Image2.svg" alt="" />
          <img className="w-full" src="../src/assets/Image1.svg" alt="" />
        </div>

        <Router>
          <Routes>
            <Route path="/" element={<Page1HomePage />} />
            <Route path="/page2" element={<Page2HomePage />}>
              <Route path="homepage" element={<AppWeather />} />
            </Route>
          </Routes>
        </Router>
      </div>

      <Alibrzn />
    </div>
  );
}
export default App;
