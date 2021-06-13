import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import "./Meals.css";
const Meals = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Snitzel",
      description: "A German Delicacy",
      price: 24.67,
    },
    {
      id: "m2",
      name: "Cheese Burger",
      description: "A famous American burger",
      price: 10.51,
    },
    {
      id: "m3",
      name: "Pretzels",
      description: "Creeps",
      price: 16.89,
    },
    {
      id: "m4",
      name: "Beef jerky",
      description: "A famous American beef dish",
      price: 26.89,
    },
    {
      id: "m5",
      name: "Fish and Chips",
      description: "Spicy and crispy fish",
      price: 18.99,
    },
  ];
  return (
    <div className="meals">
      <MealsSummary />
      <AvailableMeals meals={DUMMY_MEALS} />
    </div>
  );
};
export default Meals;
