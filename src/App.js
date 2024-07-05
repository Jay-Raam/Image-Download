import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Image from "./components/Image";
import About from "./components/About";
import Video from "./components/Video";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/Image-Download" className="tit">
          <h1 className="title">Blitz</h1>
        </Link>
        <Routes>
          <Route path="/Image-Download" element={<About />} />
          <Route path="/image" element={<Image />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
