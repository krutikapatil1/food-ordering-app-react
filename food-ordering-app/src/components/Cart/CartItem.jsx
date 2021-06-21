import "./CartItem.css";

const CartItem = (props) => {
  console.log(props.items);
  return (
    <div key={props.item.id} className="cart-item">
      <div className="cart-item__details__amount">
        <div className="cart-item__details">
          <p className="cart-item__details__name">{props.item.name}</p>
          <p className="cart-item__details__price">${props.item.price}</p>
        </div>
        <div className="cart-item__amount">x{props.item.amount}</div>
      </div>
      <div>
        <button className="cart-buttons__add-remove">-</button>
        <button className="cart-buttons__add-remove">+</button>
      </div>
      <hr className="cart-item__separator" />
    </div>
  );
};

export default CartItem;
