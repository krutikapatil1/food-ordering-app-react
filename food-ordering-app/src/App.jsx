import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <Meals />
      {cartIsShown && (
        <Cart onHideCart={hideCartHandler} itemName="Sushi" price="26.98" />
      )}
    </CartProvider>
  );
}

export default App;
