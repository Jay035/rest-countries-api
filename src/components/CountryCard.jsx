import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function CountryCard({ data }) {
  return (
    <div className="country_card">
      <img src={data?.flags?.svg} alt="country flag" className="country_flag" />
      <div className="country_details">
        <Link to={`country/${data?.name}`}>
          <h1 className="country_name">{data?.name}</h1>
        </Link>
        <p className="country_info">
          <span>Population:</span> {data?.population}
        </p>
        <p className="country_info">
          <span>Region:</span> {data?.region}
        </p>
        <p className="country_info">
          <span>Capital: </span> {data?.capital}
        </p>
      </div>
    </div>
  );
}

CountryCard.propTypes = {
  data: PropTypes.object,
};
