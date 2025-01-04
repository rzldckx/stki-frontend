import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Category from "./pages/Category";

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
            <Route path="/" element={<News />} />
            <Route path="/category/:category" element={<Category />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
