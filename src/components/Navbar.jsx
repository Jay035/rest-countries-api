import PropTypes from "prop-types";

export function Navbar({ setTheme }) {
  return (
    <nav>
      <p>Where in the world?</p>
      <button
        onClick={() =>
          setTheme((prevValue) => (prevValue === "light" ? "dark" : "light"))
        }
      >
        <i className="ri-moon-line"></i> Dark Mode
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  setTheme: PropTypes.func,
};
