import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Category from "./pages/Category";
import NewsDetails from "./pages/NewsDetails";
import SearchPage from "./pages/SearchPage";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className="font-mulish">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/news/:id" element={<NewsDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
