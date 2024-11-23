import { useState, useCallback } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { debounce } from "lodash";
import { deleteTodoItem, getTodoList, patchTodo, postTodo } from "../apis/todo";
import { queryClient } from "../main";

export function useTodo() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");

  const debouncedSetSearch = useCallback(
    debounce((value) => {
      setSearch(value);
    }, 300),
    []
  );

  const { data: todos, isLoading } = useQuery({
    queryFn: () => getTodoList({ title: search }),
    queryKey: ["todos", search],
  });

  const { mutate: postTodoMutation } = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const { mutate: deleteTodoMutation } = useMutation({
    mutationFn: deleteTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const { mutate: patchTodoMutation } = useMutation({
    mutationFn: patchTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title && !content) {
      alert("할일을 입력해주세요!");
      return;
    }

    if (!title) {
      alert("할일 제목을 입력해주세요!");
      return;
    }

    if (!content) {
      alert("할일 내용을 입력해주세요!");
      return;
    }

    postTodoMutation({ title, content });
    setTitle("");
    setContent("");
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    search,
    debouncedSetSearch,
    todos,
    isLoading,
    handleSubmit,
    patchTodoMutation,
    deleteTodoMutation,
  };
}
