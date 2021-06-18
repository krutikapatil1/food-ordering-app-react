import "./Input.css";
import InputForm from "./InputForm";
const Input = (props) => {
  return (
    <div className="input">
      <InputForm
        input={{
          label: "Amount",
          id: props.id,
          type: "Number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="input__button">{props.buttonText}</button>
    </div>
  );
};
export default Input;
