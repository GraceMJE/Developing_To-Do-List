import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useTodo } from "./hooks/useTodo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoDetailModal from "./components/TodoDetailModal";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const {
    title,
    setTitle,
    content,
    setContent,
    debouncedSetSearch,
    todos,
    isLoading,
    handleSubmit,
    patchTodoMutation,
    deleteTodoMutation,
  } = useTodo();

  return (
    <Router>
      <div className="appContainer">
        <p className="titleToDo">❇️ June's todo List ❇️</p>
        <div className="inputContainer">
          <SearchBar onSearch={debouncedSetSearch} />
        </div>
        <TodoForm
          title={title}
          content={content}
          setTitle={setTitle}
          setContent={setContent}
          handleSubmit={handleSubmit}
        />
        {isLoading ? (
          <div className="messageContainer">
            <div className="spinner"></div>
            <p>잠시만 기다려 주세요...</p>
          </div>
        ) : (
          <>
            <TodoList
              todos={todos?.[0] || []}
              patchTodoMutation={patchTodoMutation}
              deleteTodoMutation={deleteTodoMutation}
            />
            <Routes>
              <Route
                path="/todo/:id"
                element={
                  <TodoDetailModal
                    todos={todos?.[0] || []}
                    patchTodoMutation={patchTodoMutation}
                    deleteTodoMutation={deleteTodoMutation}
                  />
                }
              />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
