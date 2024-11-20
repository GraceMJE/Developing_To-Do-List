import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTodo } from '../context/TodoContext';
import styled from 'styled-components';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodoExplain = styled.p`
  font-family: monospace;
  margin-bottom: 3px;
  font-size: 16px;
  font-align: left;
`;

function ToDoDetail() {
  const { id } = useParams(); // URL에서 id를 가져옴 (string 형태)
  const navigate = useNavigate();
  const { toDoList } = useTodo();

  // 문자열 id를 숫자로 변환하여 비교
  const todo = toDoList.find((item) => item.id === Number(id));

  if (!todo) {
    return (
      <div className="appContainer">
        <h1 className="titleToDo">할 일을 찾을 수 없습니다</h1>
        <button className="inputButton" onClick={() => navigate('/')}>
          돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="appContainer">
      <h1 className="titleToDo" style={{ backgroundColor: 'lightblue' }}>
        📋 Description of Todo 💖
      </h1>
      <DetailContainer>
        <div style={{width: '400px',
          border: 'dotted 2px gray',
          borderRadius: '6px',
          padding: '5px 15px 5px 15px',
        }}>
          <TodoExplain>
            <strong>📍 my Todo: </strong> {todo.text}
          </TodoExplain>
          <TodoExplain>
            <strong>⭐ 미션상태: </strong> {todo.completed ? '완료' : '미완료'}
          </TodoExplain>
          <TodoExplain>
            <strong>📅 등록 날짜: </strong> {todo.date}
          </TodoExplain>
          <TodoExplain>
            <strong>🆔 ID: </strong> {todo.id}
          </TodoExplain>
          <button
            className="inputButton"
            onClick={() => navigate('/')}
            style={{ margin: '35px 0 10px 0', float: 'right' }}
          >
            ⬅️
          </button>
        </div>
      </DetailContainer>
    </div>
  );
}

export default ToDoDetail;
