import PropTypes from "prop-types";

export function Search({ query, setQuery }) {
  return (
    <div className="search wrapper">
      <i className="ri-search-line"></i>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder="Search for a country..."
      />
    </div>
  );
}

Search.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
};
