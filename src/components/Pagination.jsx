import React from "react";
import { useNavigate } from "react-router-dom";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    onPageChange(page);
    navigate(`?page=${page}`);
  };

  const renderPageNumbers = () => {
    let startPage, endPage;
    if (totalPages <= 3) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage === 1) {
      startPage = 1;
      endPage = 3;
    } else if (currentPage === totalPages) {
      startPage = totalPages - 2;
      endPage = totalPages;
    } else {
      startPage = currentPage - 1;
      endPage = currentPage + 1;
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center gap-5 sm:mb-5 xl:mb-2">
      <button
        className="btn btn-square"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          color: currentPage === 1 ? "gray" : "black",
          borderColor: currentPage === 1 ? "gray" : "black",
        }}
      >
        Prev
      </button>
      <div className="join">
        {renderPageNumbers().map((page) => (
          <input
            key={page}
            className={`join-item btn btn-square hover:bg-[#C9C7C5] ${
              currentPage === page ? "bg-[#C9C7C5]" : "bg-white"
            }`}
            type="button"
            name="options"
            aria-label={page}
            value={page}
            onClick={() => handlePageChange(page)}
          />
        ))}
      </div>
      <button
        className="btn btn-square"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          color: currentPage === totalPages ? "gray" : "black",
          borderColor: currentPage === totalPages ? "gray" : "black",
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
