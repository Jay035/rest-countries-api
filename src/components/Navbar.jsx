import PropTypes from "prop-types";

export function Navbar({ theme, setTheme }) {
  return (
    <nav>
      <p>Where in the world?</p>
      <button
        onClick={() =>
          setTheme((prevValue) => (prevValue === "light" ? "dark" : "light"))
        }
      >
        <i
          className={`${theme === "light" ? "ri-moon-line" : "ri-moon-fill"}`}
        ></i>{" "}
        Dark Mode
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
};
