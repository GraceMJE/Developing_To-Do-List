import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useTodo } from '../context/TodoContext';

function ToDoItem({ todo }) {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const { deleteToDo, editToDo, toggleComplete } = useTodo();

  const handleInputChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleEditClick = () => {
    if (isEditing && editedText.trim() !== '') {
      editToDo(todo.id, editedText);
    }
    setIsEditing(!isEditing);
  };

  const handleDeleteClick = () => {
    deleteToDo(todo.id);
  };

  const handleCheckboxChange = (event) => {
    toggleComplete(todo.id, event.target.checked);
  };

  const handleDetailClick = () => {
    navigate(`/todo/${todo.id}`); // Navigate to detail page
  };

  return (
    <div className="toDoItemContainer" onClick={handleDetailClick}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
        onClick={(e) => e.stopPropagation()} // Prevent checkbox click from triggering navigation
      />
      {isEditing ? (
        <input
          className="editInputField"
          type="text"
          value={editedText}
          onChange={handleInputChange}
          autoFocus
        />
      ) : (
        <span
          className="myToDoItem"
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </span>
      )}
      <button className="toDoButton" onClick={(e) => { e.stopPropagation(); handleEditClick(); }}>
        {isEditing ? '수정완료' : '수정'}
      </button>
      <button className="toDoButton" onClick={(e) => { e.stopPropagation(); handleDeleteClick(); }}>
        미션 complete
      </button>
    </div>
  );
}

export default ToDoItem;
