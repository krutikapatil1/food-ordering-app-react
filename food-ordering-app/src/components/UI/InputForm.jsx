import "./InputForm.css";
import Button from "./Button";
import React, { Fragment } from "react";
const InputForm = React.forwardRef((props, ref) => {
  return (
    <Fragment>
      <div className="input-box">
        <label className="input-box__label" htmlFor={props.id}>
          {props.input.label}
        </label>
        <input ref={ref} className="input-box__input" {...props.input} />
      </div>
      <Button onClick={props.onClick} buttonText="+ Add"></Button>
      {!props.amountIsValid && (
        <p className="input-box__error">Please enter a valid amount</p>
      )}
    </Fragment>
  );
});
export default InputForm;
