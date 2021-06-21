import "./CartButton.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { FaShoppingCart } from "react-icons/fa";
const CartButton = (props) => {
  const ctx = useContext(CartContext);
  const numOfItems = ctx.items.reduce((curAmount, item) => {
    return curAmount + item.amount;
  }, 0);

  return (
    <button className="cart" onClick={props.onClick}>
      <span className="cart__icon">
        <FaShoppingCart />
      </span>
      <span className="cart__text">Add to cart</span>
      <span className="cart__badge">{numOfItems}</span>
    </button>
  );
};
export default CartButton;
