import React from "react";
import "./Modal.css";

const Modal = (props) => {
  const { closeModal, children } = props;
  return (
    <div className='modal-wrapper'>
      <i
        onClick={closeModal}
        className='close-icon fa fa-times-circle-o'
        aria-hidden='true'
      ></i>

      <div className='modal-content'>{children}</div>
    </div>
  );
};

export default Modal;
