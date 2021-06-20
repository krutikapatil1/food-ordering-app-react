import "./Input.css";
import InputForm from "./InputForm";
import Button from "../UI/Button";
import React from "react";

const Input = (props) => {
  return (
    <div className="input">
      <InputForm
        ref={ref}
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
      <Button buttonText={props.buttonText} onClick={props.onSubmit}></Button>
      {!props.isValidAmount && (
        <p className="input-box__error">Please enter a valid amount</p>
      )}
    </div>
  );
});
export default Input;
