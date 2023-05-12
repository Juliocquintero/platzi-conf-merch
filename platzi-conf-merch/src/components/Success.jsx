import "../styles/components/Success.css";
import { useLocation } from "react-router-dom";
import MapLeaflet from "./Map";

const Success = () => {
  const { state } = useLocation();

  const {
    name: { given_name },
  } = state.payer;

  const address = state.purchase_units[0].shipping.address;

  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{given_name}, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <MapLeaflet address={address} />
        </div>
      </div>
    </div>
  );
};

export default Success;
