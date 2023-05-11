import { Link, useNavigate } from "react-router-dom";
import "../styles/components/Information.css";
import AppContext from "../context/AppContext";
import { useContext, useRef } from "react";
import InformationItem from "./InformationItem";

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);

  const formRef = useRef(null);

  const cart = state.cart;

  const navigate = useNavigate();

  const handleSubmit = () => {
    const formData = new FormData(formRef.current);
    const buyer = Object.fromEntries(formData);
    addToBuyer(buyer);
    navigate("/checkout/payment", { buyer });
  };
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={formRef}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="email" placeholder="Correo Electronico" name="email" />
            <fieldset className="Information-addres-container">
              <input type="text" placeholder="Direccion" name="addres" />
              <input type="text" placeholder="Dpto" name="dpto" />
              <input type="text" placeholder="Pais" name="country" />
              <input type="text" placeholder="Estado" name="state" />
              <input type="text" placeholder="Ciudad" name="city" />
              <input type="text" placeholder="Codigo postal" name="cp" />
            </fieldset>
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>

          <div className="Information-next">
            <button onClick={handleSubmit}>Pagar </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((product) => (
          <InformationItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Information;
