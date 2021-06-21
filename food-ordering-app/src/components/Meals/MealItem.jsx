import "./MealItem.css";
import Input from "../UI/Input";
import { Fragment, useRef, useContext, useState } from "react";
import CartContext from "../../store/cart-context";
const MealItem = (props) => {
  const amountInputRef = useRef();
  const ctx = useContext(CartContext);
  const [isValidAmount, setValidAmount] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const amountEntered = amountInputRef.current.value;
    const amountEnteredNumber = +amountEntered;
    if (
      amountEntered.trim().length === 0 ||
      amountEnteredNumber < 1 ||
      amountEnteredNumber > 5
    ) {
      setValidAmount(false);
      return;
    }
    setValidAmount(true);
    const item = {
      id: props.id,
      name: props.name,
      amount: amountEnteredNumber,
    };
    ctx.addItem(item);
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
          id={"amount-" + props.id}
          type="number"
          label="Amount"
          buttonText="+ Add"
          value="0"
          onSubmit={submitHandler}
          isValidAmount={isValidAmount}
        />
      </div>
      <hr />
    </Fragment>
  );
};
export default MealItem;
