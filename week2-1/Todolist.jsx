import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: inputText, completed: false }]);
      setInputText("");
    }
  };

  const handleCompleteTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {

    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className="title-section">
        <br></br><br></br><br></br><br></br>
        <h1>UMC STUDY PLAN</h1>
        <br></br><br></br><br></br>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleAddTodo}
          placeholder="Add a new todo"
        />
        <br></br><br></br><br></br>
      </div>
      <div className="tasks">
        <div className="task-column1">
          <h2>해야 할 일</h2>
          {todos.filter(todo => !todo.completed).map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onComplete={handleCompleteTodo}
              onDelete={handleDeleteTodo}
              buttonText="완료"
            />
          ))}
        </div>
        <div className="task-column2">
          <h2>해낸 일</h2>
          {todos.filter(todo => todo.completed).map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={handleDeleteTodo}
              onComplete={handleCompleteTodo}
              buttonText="삭제"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;

