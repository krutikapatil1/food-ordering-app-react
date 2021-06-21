import "./Cart.css";
import Modal from "../Layout/Modal";
import Button from "../UI/Button";
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasItems = ctx.items.length > 0;
  console.log(ctx);
  console.log(ctx);
  return (
    <Modal onClose={props.onHideCart}>
      <div className="cart__items">
        {ctx.items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart__totalAmount">
        <h1>Total Amount</h1>
        <h2>{totalAmount}</h2>
      </div>
      <div className="cart__buttons">
        <Button
          className="close_btn overlay-buttons"
          buttonText="Close"
          onClick={props.onHideCart}
        ></Button>
        {hasItems && (
          <Button
            className="overlay-buttons"
            buttonText="Order"
            onClick={props.onHideCart}
          ></Button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
