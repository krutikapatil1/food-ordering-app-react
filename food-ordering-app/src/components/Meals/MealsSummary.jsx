import "./MealsSummary.css";
import Card from "../UI/Card";
const MealsSummary = () => {
  return (
    <Card className="meals-summary">
      <h1 className="meals-summary__heading">
        Delicious food, Delivered to you
      </h1>
      <p className="meals-summary__body">
        Choose your favorite meal from our broad collection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className="meals-summary__body">
        All our meals are cooked with high quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Card>
  );
};
export default MealsSummary;
