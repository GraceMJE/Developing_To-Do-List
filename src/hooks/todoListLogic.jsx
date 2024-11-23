import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useTodoListLogic({ patchTodoMutation }) {
  const [editingId, setEditingId] = useState(null); // 현재 수정 중인 할일 ID
  const [editTitle, setEditTitle] = useState(""); // 수정할 제목
  const [editContent, setEditContent] = useState(""); // 수정할 내용
  const navigate = useNavigate();

  const handleEditClick = (todo) => {
    setEditingId(todo.id); // 수정 중인 할일 ID 설정
    setEditTitle(todo.title); // 기존 제목 설정
    setEditContent(todo.content); // 기존 내용 설정
  };

  const handleSaveClick = (id) => {
    patchTodoMutation({ id, title: editTitle, content: editContent });
    setEditingId(null); // 수정 종료
  };

  const handleContainerClick = (id) => {
    if (editingId === null) {
      // 수정 중이 아닐 때만 상세 페이지 이동
      navigate(`/todo/${id}`);
    }
  };

  return {
    editingId,
    editTitle,
    editContent,
    setEditTitle,
    setEditContent,
    handleEditClick,
    handleSaveClick,
    handleContainerClick,
  };
}
