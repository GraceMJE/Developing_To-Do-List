// TodoContext.js
import React, { createContext, useContext, useState } from 'react';

// TodoContext 생성
const TodoContext = createContext();

// TodoProvider 컴포넌트 (Provider 역할)
export function TodoProvider({ children }) {
  const [toDoList, setToDoList] = useState([]);
  const [input, setInput] = useState('');

  // Add a new to-do item
  const addToDo = () => {
    if (input.trim() === '') return; // Prevent adding empty to-dos
    setToDoList([...toDoList, { id: Date.now(), text: input, completed: false }]);
    setInput(''); // Clear the input field after adding
  };

  // Delete a to-do item by ID
  const deleteToDo = (id) => {
    setToDoList(toDoList.filter((item) => item.id !== id));
  };

  // Edit a to-do item by ID
  const editToDo = (id, revisedText) => {
    setToDoList(
      toDoList.map((item) =>
        item.id === id ? { ...item, text: revisedText } : item
      )
    );
  };

  // Toggle the completion state of a todo
  const toggleComplete = (id, completed) => {
    setToDoList(
      toDoList.map((item) =>
        item.id === id ? { ...item, completed: completed } : item
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        toDoList,
        input,
        setInput,
        addToDo,
        deleteToDo,
        editToDo,
        toggleComplete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

// useTodo hook으로 Context에 접근할 수 있도록 함
export const useTodo = () => {
  return useContext(TodoContext);
};
