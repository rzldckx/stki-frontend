import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader"; // Import the Loader component
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate

const Ekonomi = ({ category }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false); // Add loading state
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get("page")) || 1;
    setCurrentPage(page);
  }, [location.search]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        const url = category
          ? `${
              import.meta.env.VITE_API_URL
            }/news?category=${category}&page=${currentPage}`
          : `${import.meta.env.VITE_API_URL}/news?page=${currentPage}`;

        const response = await axios.get(url);
        const news = await response.data?.news;
        setData(news);
        setTotalPages(response.data?.total_pages || 1);
        console.log(category);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "An error occurred");
      }
      setLoading(false); // Set loading to false after fetching data
    };

    fetchData();
  }, [category, currentPage]);

  if (error) {
    return <div className="text-red-500">Error fetching data: {error}</div>;
  }

  const handlePageChange = (page) => {
    navigate(`?page=${page}`);
  };

  return (
    <div className="flex items-start lg:ml-3 font-mulish">
      <div className="max-w-screen-xl mt-2 mx-auto w-full px-4 lg:px-8">
        <div className="font-black text-[#F60E2A] text-xl lg:text-2xl mb-4">
          BERITA EKONOMI
        </div>
        {loading ? ( // Show loader if loading is true
          <Loader />
        ) : (
          <>
            {/* Grid container for cards */}
            <div className="grid grid-cols-2 gap-4 pb-4 lg:pb-0 lg:grid-cols-4 mt-4">
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
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages} // Use totalPages from state
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Ekonomi;
