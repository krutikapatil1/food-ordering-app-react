import "./InputForm.css";
import React from "react";
const InputForm = React.forwardRef((props, ref) => {
  return (
    <div className="input-box">
      <label className="input-box__label" htmlFor={props.id}>
        {props.input.label}
      </label>
      <input ref={ref} className="input-box__input" {...props.input} />
    </div>
  );
});
export default InputForm;
