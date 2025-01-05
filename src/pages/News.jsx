import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import fetchData from "../api/News";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader"; // Import the Loader component

const News = ({ category }) => {
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
    const getData = async () => {
      setLoading(true); // Set loading to true before fetching data
      const { data, total_pages, error } = await fetchData({
        category,
        page: currentPage,
      });
      if (error) {
        setError(error);
      } else {
        setData(data);
        setTotalPages(total_pages);
        console.log("Total hlm: " + total_pages);
      }
      setLoading(false); // Set loading to false after fetching data
    };

    getData();
  }, [category, currentPage]);

  const handlePageChange = (page) => {
    navigate(`?page=${page}`);
  };

  if (error) {
    return <div className="text-red-500">Error fetching data: {error}</div>;
  }

  return (
    <div className="w-full h-full font-mulish">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="font-black text-[#F60E2A] text-xl lg:text-2xl mb-4">
          NEWS
        </div>
        {loading ? ( // Show loader if loading is true
          <Loader />
        ) : (
          <>
            {/* Render data */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  category={item.category}
                />
              ))}
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

export default News;
