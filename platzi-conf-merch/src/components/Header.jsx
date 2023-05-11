import { Link, NavLink } from "react-router-dom";
import "../styles/components/Header.css";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const Header = () => {
  const { state } = useContext(AppContext);
  const cart = state.cart;

  return (
    <header className="Header">
      <Link to="/">
        <h1 className="Header-title">PlatziConf Merch </h1>
      </Link>
      <div className="Header-checkout">
        <NavLink
          to="/checkout"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <i className="fas fa-shopping-basket"></i>
        </NavLink>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </header>
  );
};

export default Header;
