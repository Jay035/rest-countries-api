import { useEffect, useState } from "react";
import { Countries } from "../components/Countries";
import { Filter } from "../components/Filter";
import { Search } from "../components/Search";
import data from "../../data.json";

function Root() {
  const [searchQueryByName, setSearchQueryByName] = useState("");
  const [searchQueryByRegion, setSearchQueryByRegion] = useState("");

  // Filtered list based on region
  const filteredCountries = data.filter((country) => {
    return (
      (!searchQueryByName ||
        country.name.toLowerCase().includes(searchQueryByName.toLowerCase())) &&
      (!searchQueryByRegion ||
        country.region.toLowerCase() === searchQueryByRegion.toLowerCase())
    );
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    setSearchQueryByRegion("");
  }, [searchQueryByName]);

  useEffect(() => {
    setSearchQueryByName("");
  }, [searchQueryByRegion]);

  return (
    <main>
      <div className="search_filter_wrapper">
        <Search query={searchQueryByName} setQuery={setSearchQueryByName} />
        <Filter query={searchQueryByRegion} setQuery={setSearchQueryByRegion} />
      </div>
      <Countries list={filteredCountries} />
    </main>
  );
}

export default Root;
