import React from "react";

const CartItem = ({ product, removeFromCart }) => {
  const handleClick = () => {
    removeFromCart(product);
  };
  return (
    <>
      <div className="Checkout-item">
        <div className="Checkout-element">
          <h4>{product.title}</h4>
          <span>${product.price}</span>
        </div>
        <button type="button" onClick={handleClick}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </>
  );
};

export default CartItem;
