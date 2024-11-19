import React, { useState } from 'react';
import '../App.css';
import { useTodo } from '../context/TodoContext'; // useTodo 훅 import

function ToDoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const { deleteToDo, editToDo, toggleComplete } = useTodo(); // Context에서 함수들 가져오기

  // Handle changes in the input field during editing
  const handleInputChange = (event) => {
    setEditedText(event.target.value); // Update the editedText state
  };

  const handleEditClick = () => {
    if (isEditing && editedText.trim() !== '') {
      editToDo(todo.id, editedText); // Save the edited todo
    }
    setIsEditing(!isEditing); // Toggle edit mode
  };

  const handleDeleteClick = () => {
    deleteToDo(todo.id); // Delete the todo item
  };

  const handleCheckboxChange = (event) => {
    toggleComplete(todo.id, event.target.checked); // Update completion status in parent component
  };

  return (
    <div className="toDoItemContainer">
      <input
        type="checkbox"
        checked={todo.completed} // Use the completed state to check/uncheck
        onChange={handleCheckboxChange}
      />
      {isEditing ? (
        <input
          className="editInputField"
          type="text"
          value={editedText}
          onChange={handleInputChange} // Update the edited text as user types
          autoFocus
        />
      ) : (
        <span
          className="myToDoItem"
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} // Apply line-through if completed
        >
          {todo.text}
        </span>
      )}

      <button className="toDoButton" onClick={handleEditClick}>
        {isEditing ? '수정완료' : '수정'}
      </button>
      <button className="toDoButton" onClick={handleDeleteClick}>
        미션 complete
      </button>
    </div>
  );
}

export default ToDoItem;
