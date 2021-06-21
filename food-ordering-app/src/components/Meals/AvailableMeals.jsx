import "./AvailableMeals.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import { FaMailBulk } from "react-icons/fa";
const AvailableMeals = (props) => {
  return (
    <Card className="meal-list">
      {props.meals.map((meal) => (
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </Card>
  );
};
export default AvailableMeals;
