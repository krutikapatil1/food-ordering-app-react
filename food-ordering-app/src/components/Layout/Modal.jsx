import { Fragment } from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
import Card from "../UI/Card";
const Backdrop = () => {
  return <div className="backdrop"></div>;
};
const Overlay = (props) => {
  return <Card className="overlay">{props.children}</Card>;
};

const overlayElement = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, overlayElement)}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        overlayElement
      )}
    </Fragment>
  );
};

export default Modal;
