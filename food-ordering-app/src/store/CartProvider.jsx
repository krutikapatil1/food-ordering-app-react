import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedAmount =
      state.items.totalAmount + action.item.price * action.item.amount;
    const newItem = {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
    return newItem;
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);
  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemHandler = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
