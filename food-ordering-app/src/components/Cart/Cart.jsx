import "./Cart.css";
import Modal from "../Layout/Modal";
import Button from "../UI/Button";

const Cart = (props) => {
  return (
    <Modal>
      <div className="cart__heading">
        <h3>{props.itemName}</h3>
      </div>

      <div className="cart__contents">
        <h1>Total Amount</h1>
        <h2>${props.price}</h2>
      </div>
      <div className="cart__buttons">
        <Button
          className="close_btn overlay-buttons"
          buttonText="Close"
        ></Button>
        <Button className="overlay-buttons" buttonText="Okay"></Button>
      </div>
    </Modal>
  );
};
export default Cart;
