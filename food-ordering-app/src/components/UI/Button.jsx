import "./Button.css";
const Button = (props) => {
  return (
    <button className={`button ${props.className}`} onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
};
export default Button;
