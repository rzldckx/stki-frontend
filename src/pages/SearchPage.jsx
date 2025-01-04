import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import PreviewArticle_Card from "../components/PreviewArticle_Card";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Ambil data hasil pencarian dari state
    const searchResults = location.state?.results || [];
    setData(searchResults);
  }, [location.state]);

  if (!data.length) {
    return <div>Loading or no results found...</div>;
  }

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto w-full px-4 lg:px-8">
        <div className="font-black text-[#F60E2A] text-xl lg:text-2xl lg:ml-4 mb-4">
          HASIL PENCARIAN
        </div>
        <div className="ml-1 grid grid-cols-2 gap-4 pb-4 md:ml-3 lg:pb-0 lg:grid-cols-4 mt-4">
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item, index) => (
              <Card
                key={index} // Pastikan key unik, gunakan index jika id tidak tersedia
                title={item.title}
                image={item.image}
                category={item.category}
              />
            ))
          ) : (
            <div>No data available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
