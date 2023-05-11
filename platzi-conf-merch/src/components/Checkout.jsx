import { Link } from "react-router-dom";
import "../styles/components/Checkout.css";
import { useContext, useMemo } from "react";
import AppContext from "../context/AppContext";
import CartItem from "./CartItem";
const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const cart = state.cart;

  const totalCart = useMemo(
    () =>
      cart.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      ),
    [cart]
  );

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? (
          <h3>Lista de pedidos: </h3>
        ) : (
          <h3>Sin pedidos </h3>
        )}
        {cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      {console.log(cart)}
      {cart.length > 0 && (

        <div className="Checkout-sidebar">
          <h3>Precio total : ${totalCart}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
