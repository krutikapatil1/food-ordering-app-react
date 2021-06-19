import "./Input.css";
import InputForm from "./InputForm";
import React from "react";

const Input = React.forwardRef((props, ref) => {
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
        amountIsValid={props.amountIsValid}
        ref={ref}
        onClick={props.onSubmit}
      />
    </div>
  );
});
export default Input;
