import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import "./components/about.css";
// import Image01 from "./image/a1.jpg";
// import Image02 from "./image/a2.jpg";
// import Image03 from "./image/m1.webp";
// import Image04 from "./image/m2.webp";
// import Image05 from "./image/m3.webp";
// import Image06 from "./image/m4.webp";
// import Image07 from "./image/m12.jpeg";
// import Image08 from "./image/a4.webp";
// import Image09 from "./image/a5.jpeg";
// import Image012 from "./image/m6.jpeg";
// import Image010 from "./image/a6.webp";
// import Image011 from "./image/a7.jpg";
import Image from "./components/Image";
import Video from "./components/Video";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/" className="tit">
          <h1 className="title">Blitz</h1>
        </Link>
        <Routes>
          <Route path="/image" element={<Image />} />
          <Route path="/video" element={<Video />} />
          <Route path="/" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
