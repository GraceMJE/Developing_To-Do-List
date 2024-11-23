import React from "react";
import "../App.css";
import { useTodoListLogic } from "../hooks/todoListLogic";

function TodoList({ todos, patchTodoMutation, deleteTodoMutation }) {
  const {
    editingId,
    editTitle,
    editContent,
    setEditTitle,
    setEditContent,
    handleEditClick,
    handleSaveClick,
    handleContainerClick,
  } = useTodoListLogic({ patchTodoMutation });

  return (
    <div className="toDoListContainer">
      {todos.map((todo) => (
        <div
          className="toDoItemContainer"
          key={todo.id}
          onClick={() => handleContainerClick(todo.id)} // 클릭 시 상세 페이지 이동
          style={{ cursor: "pointer" }} // 마우스 커서 변경
        >
          <input
            type="checkbox"
            checked={todo.checked}
            onClick={(e) => e.stopPropagation()} // 클릭 이벤트 전파 방지
            onChange={() =>
              patchTodoMutation({ id: todo.id, checked: !todo.checked })
            }
          />
          {editingId === todo.id ? (
            <>
              {/* 수정 중일 때 */}
              <div>
                <input
                  className="editInputField"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  placeholder="제목 수정"
                />
                <input
                  className="editInputField"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  placeholder="내용 수정"
                />
              </div>
              <button
                className="toDoButton"
                onClick={() => handleSaveClick(todo.id)}
              >
                저장
              </button>
              <button
                className="toDoButton"
                onClick={() => setEditingId(null)}
              >
                취소
              </button>
            </>
          ) : (
            <>
              {/* 수정 중이 아닐 때 */}
              <div>
                <p
                  className="myToDoItem"
                  style={{
                    fontWeight: "bold",
                    textDecorationLine: "underline",
                  }}
                >
                  {todo.title}
                </p>
                <p className="myToDoItem" style={{ fontStyle: "italic" }}>
                  {todo.content}
                </p>
              </div>
              <button
                className="toDoButton"
                onClick={(e) => {
                  e.stopPropagation(); // 클릭 이벤트 전파 방지
                  handleEditClick(todo);
                }}
              >
                수정
              </button>
              <button
                className="toDoButton"
                onClick={(e) => {
                  e.stopPropagation(); // 클릭 이벤트 전파 방지
                  deleteTodoMutation({ id: todo.id });
                }}
              >
                삭제
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
