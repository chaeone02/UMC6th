import React from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";

const TodoItem = ({ todo, onDelete, onComplete, buttonText }) => {
  // 버튼 클릭 이벤트 처리
  const handleButtonClick = () => {
    // 버튼 텍스트에 따라 onComplete 또는 onDelete 함수를 호출
    if (buttonText === "완료") {
      onComplete(todo.id);
    } else if (buttonText === "삭제") {
      onDelete(todo.id);
    }
  };


  return (
    <div className={`task_section ${todo.completed ? "completed" : ""}`}>
      <p>{todo.text}</p>
      {buttonText && (
        <button onClick={handleButtonClick}>{buttonText}</button>
      )}
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default TodoItem;
