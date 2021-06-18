import "./InputForm.css";
const InputForm = (props) => {
  return (
    <div className="input-box">
      <label className="input-box__label" htmlFor={props.id}>
        {props.input.label}
      </label>
      <input className="input-box__input" {...props.input} />
    </div>
  );
};
export default InputForm;
