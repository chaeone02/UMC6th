//isModalOpen 상태와 이를 변경하는 함수를 useState 훅을 사용하여 선언
//모달을 열고 닫는 함수를 만들고, 버튼 클릭 시 모달을 열도록 합니다.
import React, { useState } from "react";
import Modal from "./Modal";

const App2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button className="open" onClick={openModal}>버튼 열기</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App2;
