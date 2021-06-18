import "./MealItem.css";
import Input from "../UI/Input";
import { Fragment } from "react";
const MealItem = (props) => {
  return (
    <Fragment>
      <div className="meal-item">
        <ul className="meal-item__list">
          <li className="meal-item__name">{props.name}</li>
          <li className="meal-item__description">{props.description}</li>
          <li className="meal-item__price">${props.price}</li>
        </ul>
        <Input
          id={"amount-" + props.id}
          type="number"
          label="Amount"
          buttonText="+ Add"
          value="0"
        />
      </div>

      <hr />
    </Fragment>
  );
};
export default MealItem;
