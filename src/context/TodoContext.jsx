import React, { createContext, useContext, useState } from 'react';

// TodoContext 생성
const TodoContext = createContext();

// TodoProvider 컴포넌트 (Provider 역할)
export function TodoProvider({ children }) {
  const [toDoList, setToDoList] = useState([]);
  const [input, setInput] = useState('');
  const [idCounter, setIdCounter] = useState(1); // 초기값 1로 설정

  // Add a new to-do item
  const addToDo = () => {
    if (input.trim() === '') return; // Prevent adding empty to-dos

    // 새로운 할 일 추가
    setToDoList([
      ...toDoList,
      {
        id: idCounter, // idCounter 값 사용
        text: input,
        completed: false,
        date: new Date().toLocaleString(), // 현재 날짜 추가
      },
    ]);

    setIdCounter(idCounter + 1); // 다음 할 일의 ID를 증가
    setInput(''); // 입력 필드 초기화
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
