import { useState } from "react";

import "./App.css";
import { Nav } from "./Components/Header/Nav";
import Banner from "./Components/Banner/Banner";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav></Nav>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
