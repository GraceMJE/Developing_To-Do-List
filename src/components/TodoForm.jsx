import '../App.css'

function TodoForm({ title, content, setTitle, setContent, handleSubmit }) {
  return (
    <form className='inputContainer' onSubmit={handleSubmit}>
      <input 
        className='inputField'
        name="title"
        placeholder="할 일 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input className='inputField'
        name="content"
        placeholder="할 일 내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className='inputButton' type="submit">Enter!</button>
    </form>
  );
}

export default TodoForm;
