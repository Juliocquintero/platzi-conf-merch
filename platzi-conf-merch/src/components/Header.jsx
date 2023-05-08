import reactLogo from "../assets/react.svg";

const Header = () => {


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

    </header>
  );
};

export default Header;
