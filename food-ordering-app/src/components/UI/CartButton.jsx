import "./CartButton.css";
import { FaShoppingCart } from "react-icons/fa";
const CartButton = () => {
  return (
    <button className="cart">
      <span className="cart__icon">
        <FaShoppingCart />
      </span>
      <span className="cart__text">Add to cart</span>
      <span className="cart__badge">3</span>
    </button>
  );
};
export default CartButton;
