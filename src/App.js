import { Routes, Route } from "react-router-dom";
import { DynamicItem, dummyData } from "./components";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import { NavigationBar } from "./components/navbar/Navbar";
import { useState } from "react";

function App() {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className={`body-area${showNav ? " body-pd" : ""}`}>
      <NavigationBar showNav={showNav} setShowNav={setShowNav} />
      <Sidebar showNav={showNav} />
      {/* <Routes>
          <Route path="/" element={<DynamicItem page="homepage" />} />
          {dummyData &&
            dummyData.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={<DynamicItem page={item.name} />}
              />
            ))}
        </Routes> */}
      {/* </Sidebar> */}
    </div>
  );
}

export default App;
