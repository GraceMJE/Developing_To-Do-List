import { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getTodoList } from "./apis/todo"; // 실제 파일 경로를 확인하세요.

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");

  // React Query로 todo 리스트를 가져옵니다.
  const { data: todos, isLoading } = useQuery({
    queryFn: () => getTodoList({ title: search }),
    queryKey: ["todos", search],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Content:", content);
  };

  return (
    <>
      <h1> Todo 검색 </h1>
      <Input 
        style={{marginBottom: '10px'}} 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />
      <Form onSubmit={handleSubmit}>
        <Input
          name="title"
          placeholder="할 일 제목이 뭐다냥 😺"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          name="content"
          placeholder="할 일 내용이 뭐다냥 😸"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit">투두 생성</Button>
      </Form>
      {isLoading ? (
        <div>로딩 중입니다...</div>
      ) : (
        <Container>
          {todos?.[0]?.map((todo) => (
            <TodoContainer key={todo.id}>
              <input type='checkbox' checked={todo.checked} />
              <div>
                <p>{todo.title}</p>
                <p>{todo.content}</p>
              </div>
            </TodoContainer>
          ))}
        </Container>
      )}
    </>
  );
}

export default App;

// Styled Components
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
