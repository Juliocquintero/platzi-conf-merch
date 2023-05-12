import { useContext, useMemo } from "react";
import reactLogo from "../../assets/react.svg";
import "./styles.css";
import { ThemeContext } from "../../context/Theme";
const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleClick = () => {
    toggleDarkMode();
  };

  const modeActive = useMemo(() => {
    return !darkMode ? "Dark Mode" : "Light Mode";
  }, [darkMode]);

  return (
    <header className="header">
      <div className="header-logo-container ">
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="logo logo-header react"
            alt="React logo"
          />
        </a>
      </div>
      <div>
        <button onClick={handleClick}>{modeActive}</button>
      </div>
    </header>
  );
};

export default Header;
