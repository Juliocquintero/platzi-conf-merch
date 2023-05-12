import React, { useEffect, useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    return () => {};
  }, []);

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

  const addNewOrder = (payload) => {
    setState({ ...state, orders: [...state.orders, payload] });
  };

  return { state, addToCart, removeFromCart, addToBuyer, addNewOrder };
};

export default useInitialState;
