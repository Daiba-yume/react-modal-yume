import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import "./Modal.css";

function Modal({ isOpen, onClose, style = {}, overlayStyle = {}, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="overlay" style={overlayStyle}>
        <div
          className="modalContent"
          style={style}
          onClick={(e) => e.stopPropagation()}
        >
          <IoCloseCircle className="closeIcon" onClick={onClose} />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
