import { Fragment } from "react";
import reactMeals from "../../assets/react-meals.jpg";
import CartButton from "../UI/CartButton";
import "./Header.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1 className="header__heading">React Meals</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <img
        src={reactMeals}
        alt="A table full of delicious food!"
        className="header__image"
      />
    </Fragment>
  );
};
export default Header;
