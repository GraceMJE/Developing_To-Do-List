import React from 'react';
import '../App.css';
import { useTodo } from '../context/TodoContext';
import ToDoItem from '../components/ToDoItem';

function Home() {
  const { toDoList, input, setInput, addToDo } = useTodo();

  return (
    <div className="appContainer">
      <h1 className="titleToDo">🍄 June's todoList 🍄</h1>
      <div className="inputContainer">
        <input
          className="inputField"
          placeholder="할 일이 무엇이다냥 😺"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="inputButton" onClick={addToDo}>
          등록
        </button>
      </div>
      <div className="toDoListContainer">
        {toDoList.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default Home;
