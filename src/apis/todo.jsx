import axiosInstance from "./axiosInstance";

// 1. TODO: POST 요청(todo 생성)
const postTodo = async ({ title, content, checked = false }) => {
  const { data } = await axiosInstance.post("/todo", {
    title,
    content,
    checked,
  });

  return data;
};

// 2. TODO: todo list 가져오기(title)
const getTodoList = async ({ title }) => {
  let url = "/todo";

  if (title) {
    url += `?title=${title}`; // 백틱으로 템플릿 리터럴 수정
  }

  const { data } = await axiosInstance.get(url);
  return data;
};

// 3. TODO: todo 단건 가져오기
const getTodoItem = async ({ id }) => {
  const { data } = await axiosInstance.get(`/todo/${id}`); // 백틱으로 템플릿 리터럴 수정
  return data;
};

// 4. TODO: todo 수정하기
const patchTodo = async ({ id, title, content, checked }) => {
  const { data } = await axiosInstance.patch(`/todo/${id}`, {
    title,
    content,
    checked,
  });

  return data;
};

// 5. TODO: todo 삭제하기
const deleteTodoItem = async ({ id }) => {
  const { data } = await axiosInstance.delete(`/todo/${id}`); // 백틱으로 템플릿 리터럴 수정
  return data;
};

export { postTodo, getTodoList, getTodoItem, patchTodo, deleteTodoItem };
