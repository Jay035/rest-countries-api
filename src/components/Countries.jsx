import { CountryCard } from "./CountryCard";
import { Pagination } from "./Pagination";
import { useState } from "react";
import PropTypes from "prop-types";

export function Countries({ list }) {
  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedItems = list?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="countries">
      <div className="">
        {paginatedItems.map((country, index) => (
          <CountryCard key={index} data={country} />
        ))}
      </div>

      {list?.length > 0 && (
        <Pagination
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          dataLength={list?.length}
          currentPage={currentPage}
        />
      )}
    </section>
  );
}

Countries.propTypes = {
  list: PropTypes.array,
};
