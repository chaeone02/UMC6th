//isOpen prop으로 모달의 열림 여부를 받음
//isOpen이 true이면 모달을 보여주고, 닫기 버튼을 누르면 모달을 닫음
import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal_body">
        <h2>안녕하세요</h2>
        <p>모달 내용은 어쩌고저쩌고...</p>
        <div className="close_wrap">
          <button className="close" onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
  };
  
export default Modal;
