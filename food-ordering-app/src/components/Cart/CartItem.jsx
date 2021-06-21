import "./CartItem.css";

const CartItem = (props) => {
  return (
    <div className="cart-items">
      {props.items.map((item) => (
        <div className="cart-item">
          <div className="cart-item__details__amount">
            <div className="cart-item__details">
              <p className="cart-item__details__name">{item.name}</p>
              <p className="cart-item__details__price">${item.price}</p>
            </div>
            <div className="cart-item__amount">x{item.amount}</div>
          </div>
          <div>
            <button className="cart-buttons__add-remove">-</button>
            <button className="cart-buttons__add-remove">+</button>
          </div>
          <hr className="cart-item__separator" />
        </div>
      ))}
    </div>
  );
};

export default CartItem;
