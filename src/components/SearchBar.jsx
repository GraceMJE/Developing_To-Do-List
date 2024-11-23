import '../App.css'

function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input className='inputField'
      type="text"
      style={{width: '660px'}}
      placeholder="🔎 Enter your todo's title 😸"
      onChange={handleChange}
    />
  );
}

export default SearchBar;
