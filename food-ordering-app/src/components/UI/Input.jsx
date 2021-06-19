import "./Input.css";
import InputForm from "./InputForm";
import Button from "../UI/Button";

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
      <Button buttonText={props.buttonText}></Button>
    </div>
  );
};
export default Input;
