import axios from "axios";
import Card from "../components/Card";
import TopicPopuler_Card from "../components/TopicPopuler_Card";
import React, { useEffect, useState } from "react";

const News = ({ category }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [popularData, setPopular] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = category
          ? `${import.meta.env.VITE_API_URL}/news?category=${category}&page=1`
          : `${import.meta.env.VITE_API_URL}/news?page=1`;

        const response = await axios.get(url);
        const news = await response.data?.news;
        setData(news);
        console.log(category);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "An error occurred");
      }
    };

    const popularData = async () => {
      try {
        const url = category
          ? `${import.meta.env.VITE_API_URL}/news?category=${category}&page=2`
          : `${import.meta.env.VITE_API_URL}/news?page=1`;

        const response = await axios.get(url);
        const news = await response.data?.news;
        setPopular(news);
        console.log(category);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "An error occurred");
      }
    };
    fetchData();
    popularData();
  }, [category]);

  if (error) {
    return <div className="text-red-500">Error fetching data: {error}</div>;
  }

  return (
    <div className="w-full h-full font-mulish">
      <div className="max-w-screen-xl mx-auto">
        <div className="font-black text-[#F60E2A] text-xl lg:text-2xl mb-4 lg:mt-2 lg:ml-3">
          BERITA TERBARU
        </div>
        {/* Grid untuk kartu */}
        <div className="ml-3 grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          {Array.isArray(popularData) && popularData.length > 0 ? (
            popularData.slice(0, 4).map((item) => (
              <TopicPopuler_Card
                key={item.id} // Pastikan ada key unik
                title={item.title}
                image={item.image}
                category={item.category}
              />
            ))
          ) : (
            <div>No data available</div>
          )}
        </div>
        {/* Grid container for cards */}
        <div className="ml-1 grid grid-cols-2 gap-4 pb-4 md:ml-3 lg:pb-0 lg:grid-cols-4 mt-4">
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item) => (
              <Card
                key={item.id} // Pastikan ada key unik
                url={`/news/${item.id}`}
                title={item.title}
                image={item.image}
                category={item.category}
              />
            ))
          ) : (
            <div>No data available</div>
          )}
        </div>
        <div className="flex justify-center items-center gap-5 sm:mb-5 xl:mb-2">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M199.81,34a16,16,0,0,0-16.24.43L64,109.23V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0V146.77l119.57,74.78A15.95,15.95,0,0,0,208,208.12V47.88A15.86,15.86,0,0,0,199.81,34ZM192,208,64.16,128,192,48.07Z"></path>
            </svg>
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M200,32a8,8,0,0,0-8,8v69.23L72.43,34.45A15.95,15.95,0,0,0,48,47.88V208.12a16,16,0,0,0,24.43,13.43L192,146.77V216a8,8,0,0,0,16,0V40A8,8,0,0,0,200,32ZM64,207.93V48.05l127.84,80Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
