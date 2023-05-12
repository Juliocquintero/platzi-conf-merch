import { useContext, useMemo } from "react";
import "../styles/components/Payment.css";
import AppContext from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const Payments = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const cart = state.cart;
  const navigate = useNavigate();
  const initialOptions = {
    "client-id":
      "Aag8Qw9FFK8g4cHalFOfHe-CF7N4w2s66Ti1UXD0lCfoW2OtjNoykoOG-wS9Qf5WcSHkk4Fz1_Y8w45T",
    intent: "capture",
    currency: "USD",
  };

  const totalCart = useMemo(
    () =>
      cart.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      ),
    [cart]
  );

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalCart,
          },
        },
      ],
    });
  };

  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      addNewOrder(details);
      navigate("/checkout/success", { state: details });
    });
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div key={item.id} className="Payment-item">
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          {/* <Link to="/checkout/success">Boton de pago con Paypal</Link> */}
          <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
              style={{ layout: "horizontal" }}
              createOrder={createOrder}
              onApprove={handleApprove}
            />
          </PayPalScriptProvider>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payments;
