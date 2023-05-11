import React, { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    const newCart = state.cart.filter((cart) => cart.id !== payload.id);
    setState({ ...state, cart: newCart });
  };

  const addToBuyer = (payload) => {
    setState({ ...state, buyer: [...state.buyer, payload] });
  };

  return { state, addToCart, removeFromCart, addToBuyer };
};

export default useInitialState;
