import "./MealItem.css";
import { Fragment } from "react";
const MealItem = (props) => {
  return (
    <Fragment>
      <ul className="meal-item">
        <li className="meal-item__name">{props.name}</li>
        <li className="meal-item__description">{props.description}</li>
        <li className="meal-item__price">${props.price}</li>
      </ul>
      <hr />
    </Fragment>
  );
};
export default MealItem;
