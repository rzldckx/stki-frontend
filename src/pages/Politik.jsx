import axios from "axios";
import Card from "../components/Card";
import TopicPopuler_Card from "../components/TopicPopuler_Card";
import React, { useEffect, useState } from "react";

const Politik = ({ category }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = category
          ? `${import.meta.env.VITE_API_URL}?category=${category}&page=1`
          : `${import.meta.env.VITE_API_URL}?page=1`;

        const response = await axios.get(url);
        const news = await response.data?.news;
        setData(news);
        console.log(category);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "An error occurred");
      }
    };

    fetchData();
  }, [category]);

  if (error) {
    return <div className="text-red-500">Error fetching data: {error}</div>;
  }

  return (
    <div className="w-full h-full font-mulish">
      <div className=" ml-3 text-xl font-bold text-[#F60E2A] mt-3">
        TOPIK POLITIK
      </div>
      {/* Grid container for cards */}
      <div className="ml-1 grid grid-cols-2 gap-4 pb-4  md:ml-3 lg:pb-0 lg:grid-cols-4 mt-4">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <Card
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
    </div>
  );
};

export default Politik;