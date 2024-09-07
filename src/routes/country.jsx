import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

export default function Country({ data }) {
  const { name } = useParams();

  const selectedCountry = data?.filter((item) => item.name === name);
  console.log(selectedCountry);

  const languageNames = selectedCountry[0]?.languages
    ?.map((language) => language.name)
    .join(", ");

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main className="country">
      <Link to="/" className="back_btn">
        <i className="ri-arrow-left-s-line"></i> Back
      </Link>

      <section className="grid">
        <img
          src={selectedCountry[0]?.flags?.svg}
          alt="country flag"
          className="country_flag"
        />
        <div className="">
          <h1 className="country_name">{selectedCountry[0]?.name}</h1>
          <section>
            <div className="">
              <p className="country_info">
                <span>Native Name:</span> {selectedCountry[0]?.nativeName}
              </p>
              <p className="country_info">
                <span>Population:</span> {selectedCountry[0]?.population}
              </p>
              <p className="country_info">
                <span>Region:</span> {selectedCountry[0]?.region}
              </p>
              <p className="country_info">
                <span>Sub Region:</span> {selectedCountry[0]?.subregion}
              </p>
              <p className="country_info">
                <span>Capital:</span> {selectedCountry[0]?.capital}
              </p>
            </div>
            <div className="">
              <p className="country_info">
                <span>Top Level Domain:</span>{" "}
                {selectedCountry[0]?.topLevelDomain}
              </p>
              <p className="country_info">
                <span>Currencies:</span>{" "}
                {selectedCountry[0]?.currencies[0]?.name}
              </p>
              <p className="country_info">
                <span>Languages:</span> {languageNames}
              </p>
            </div>
          </section>

          <div className="">
            {selectedCountry[0]?.borders && (
              <p className="country_info borders">
                <span>Border Countries:</span>
                <p className="">
                  {selectedCountry[0]?.borders?.map((border) => (
                    <span key={border}>{border}</span>
                  ))}
                </p>
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

Country.propTypes = {
  data: PropTypes.array,
};
