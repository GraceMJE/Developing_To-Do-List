import { useState } from 'react';
import './App.css';
import styled from 'styled-components';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    // 새로고침 방지
    e.preventDefault();
    console.log(title, content);
  }

  return (
    <Form onSubmit={handleSubmit}>
      {/* 추적을 위해 value를 값변경을 위해 onChange를 넘겨줌 
      e.target.value를 해주면 값이 변경될때마다 value값에 반영됨*/}
      <Input 
        name='title'
        placeholder='할 일 제목이 뭐다냥 😺'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input 
        name='content'
        placeholder='할 일 내용이 뭐다냥 😸'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type='submit'>투두 생성</Button>
    </Form>
  )
}

export default App;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid purple;
    border-radius: 20px;
`;

const Button = styled.button`
    border-radius: 10px;
    border: none;
    padding: 20px;
`;