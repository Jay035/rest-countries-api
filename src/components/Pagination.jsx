import PropTypes from "prop-types";

export function Pagination({
  currentPage,
  dataLength,
  itemsPerPage,
  onPageChange,
  maxVisiblePages = 5,
}) {
  const totalPages = Math.ceil(dataLength / itemsPerPage);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];

    // Always show the first page
    pageNumbers.push(1);

    if (currentPage > maxVisiblePages) {
      pageNumbers.push("...");
    }

    // Show middle pages
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (currentPage < totalPages - maxVisiblePages + 1) {
      pageNumbers.push("...");
    }

    // Always show the last page
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        className=""
        onClick={() => handlePageClick(currentPage - 1)}
      >
        <i className="ri-arrow-left-line"></i>
        {/* Previous */}
      </button>
      {/* <div className="">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className={`border w-8 h-8 rounded-lg 
              `}
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div> */}
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          className={`pagination-btn ${page === currentPage ? "active" : ""}`}
          disabled={typeof page !== "number"}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        className=""
        onClick={() => handlePageClick(currentPage + 1)}
      >
        <i className="ri-arrow-right-line"></i>
        {/* Next */}
      </button>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  dataLength: PropTypes.number,
  itemsPerPage: PropTypes.number,
  onPageChange: PropTypes.func,
  maxVisiblePages: PropTypes.number,
};
