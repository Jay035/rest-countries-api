import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export function Filter({ query, setQuery }) {
  const options = [
    { id: "africa", label: "Africa" },
    { id: "americas", label: "America" },
    { id: "asia", label: "Asia" },
    { id: "europe", label: "Europe" },
    { id: "oceania", label: "Oceania" },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (value) => {
    setQuery(value);
    setDropdownOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="filter wrapper dropdown"
      onClick={() => {
        setDropdownOpen((prevState) => !prevState);
      }}
      ref={dropdownRef}
    >
      <div className={``}>
        {!query ? (
          <p className="dropdown-header">
            Filter by Region <i className="ri-arrow-down-s-line"></i>
          </p>
        ) : (
          <p className="dropdown-header">
            <span>
            {query}
            </span>
             <i className="ri-arrow-down-s-line"></i>
          </p>
        )}
      </div>
      {dropdownOpen && (
        <div className="dropdown-options">
          {options?.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                handleOptionClick(option.id);
                setDropdownOpen((prevState) => !prevState);
              }}
              className="option"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

Filter.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
};
