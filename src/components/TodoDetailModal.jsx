import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../cssFile/TodoDetailModal.css"
import styled from "styled-components";

const DetailBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 21px;
  padding: 5px;
  font-family: monospace;
  // justify-content: center;
  margin-bottom: 5px;
`

const CategoryBox = styled.label`
  margin: 3px;
  width: 100px;
  text-align: left;
`

const ContentBox = styled.p`
  margin: 2px;
  text-align: left;
  width: 165px;
  
`

function TodoDetailModal({ todos, patchTodoMutation, deleteTodoMutation }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = todos.find((item) => item.id === Number(id));

  if (!todo) return null;

  const [editTitle, setEditTitle] = useState(todo.title);
  const [editContent, setEditContent] = useState(todo.content);

  const handleSave = () => {
    patchTodoMutation({ id: todo.id, title: editTitle, content: editContent });
    alert("수정 완료!");
    navigate("/");
  };

  const handleDelete = () => {
    deleteTodoMutation({ id: todo.id });
    alert("삭제 완료!");
    navigate("/");
  };

  const closeModal = () => navigate("/");

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <h2 className="descriptionTitle">📔 Description of my todo 💜</h2>
        <DetailBox>
          <CategoryBox>📍title: </CategoryBox>
          <input
            className="editInputField"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
        </DetailBox>
        <DetailBox>
          <CategoryBox>🗻content: </CategoryBox>
          <input
            className="editInputField"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
        </DetailBox>
        <DetailBox>
          <CategoryBox>🌟state: </CategoryBox>
          <ContentBox>{todo.checked ? "완료" : "미완료"}</ContentBox>
        </DetailBox>
        <DetailBox>
          <CategoryBox>📆start: </CategoryBox>
          <ContentBox>{new Date(todo.createdAt).toLocaleString("ko-KR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}</ContentBox>
        </DetailBox>
        <div className="modalActions">
          <button onClick={handleSave}>수정</button>
          <button onClick={handleDelete}>삭제</button>
          <button onClick={closeModal}>닫기</button>
        </div>
      </div>
    </div>
  );
}

export default TodoDetailModal;
