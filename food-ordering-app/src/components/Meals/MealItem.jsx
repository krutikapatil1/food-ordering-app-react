import "./MealItem.css";
import Input from "../UI/Input";
import { Fragment, useRef, useState, useContext } from "react";
import CartContext from "../../store/cart-context";
const MealItem = (props) => {
  const amountInputRef = useRef();
  const ctx = useContext(CartContext);
  const [amountIsValid, setAmountIsValid] = useState(true);

  const addToCartHandler = (enteredAmountNumber) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: enteredAmountNumber,
      price: props.price,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    addToCartHandler(enteredAmountNumber);
  };
  return (
    <Fragment>
      <div className="meal-item">
        <ul className="meal-item__list">
          <li className="meal-item__name">{props.name}</li>
          <li className="meal-item__description">{props.description}</li>
          <li className="meal-item__price">${props.price}</li>
        </ul>
        <Input
          ref={amountInputRef}
          amountIsValid={amountIsValid}
          id={"amount-" + props.id}
          type="number"
          label="Amount"
          buttonText="+ Add"
          value="0"
          onSubmit={submitHandler}
        />
      </div>

      <hr />
    </Fragment>
  );
};
export default MealItem;
