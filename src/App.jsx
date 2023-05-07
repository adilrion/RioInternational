import { useState } from "react";

import "./App.css";
import { Nav } from "./Components/Header/Nav";
import Banner from "./Components/Banner/Banner";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import Fashion from "./Pages/Fashion/Fashion";
import Groceries from "./Pages/Groceries/Groceries";
import HealthBeauty from "./Pages/Health&Beauty/HealthBeauty";
import HomeLifeStyle from "./Pages/HomeLifeStyle/HomeLifeStyle";
import MobilesTablets from "./Pages/MobilesTablets/MobilesTablets";
import Automobiles from "./Pages/Automobiles/Automobiles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="Fashion" element={<Fashion />} />
            <Route path="groceries" element={<Groceries />} />
            <Route path="health-beauty" element={<HealthBeauty />} />
            <Route path="home-life-style" element={<HomeLifeStyle />} />
            <Route path="mobiles-tablets" element={<MobilesTablets />} />
            <Route path="automobiles" element={<Automobiles />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
