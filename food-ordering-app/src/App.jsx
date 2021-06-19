import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div className="App">
      <Header onShowCart={showCartHandler} />
      <Meals />
      {cartIsShown && (
        <Cart onHideCart={hideCartHandler} itemName="Sushi" price="26.98" />
      )}
    </div>
  );
}

export default App;
