import "./AvailableMeals.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";
const AvailableMeals = (props) => {
  return (
    <Card className="meal-list">
      {props.meals.map((meal) => (
        <MealItem
          key={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </Card>
  );
};
export default AvailableMeals;
