import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import Loader from "../components/Loader"; // Import the Loader component

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state
  const keyword = location.state?.keyword || "";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/search?q=${keyword}`
        );
        console.log("Fetched data:", response.data); // Log fetched data
        setData(response.data.news);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    if (keyword) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [keyword]);

  if (loading) {
    return <Loader />; // Use Loader component
  }

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto w-full px-4 lg:px-8">
        <div className="font-black text-[#F60E2A] text-xl lg:text-2xl lg:ml-4 mb-4">
          HASIL PENCARIAN
        </div>
        <div className="text-lg lg:text-xl lg:ml-4 mb-4">
          Hasil pencarian untuk kata kunci &quot;{keyword}&quot;
        </div>
        <div className="ml-1 grid grid-cols-2 gap-4 pb-4 md:ml-3 lg:pb-0 lg:grid-cols-4 mt-4">
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                category={item.category}
              />
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
