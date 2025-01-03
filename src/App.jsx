import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Hot from "./pages/Hot";
import Lifestyle from "./pages/Lifestyle";
import Sport from "./pages/Sport";
import Business from "./pages/Business";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <div className="font-mulish">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/home" element={<Home />} />
            <Route path="/category/news" element={<News />} />
            <Route path="/category/hot" element={<Hot />} />
            <Route path="/category/sport" element={<Sport />} />
            <Route path="/category/lifestyle" element={<Lifestyle />} />
            <Route path="/category/business" element={<Business />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
