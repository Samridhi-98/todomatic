import { useState } from 'react';
import './App.css';
import TodoList from '../TodoList/TodoList';

function App() {
  const [item, setItem] = useState('');
  const [todos, setTodos] = useState([]);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const today = days[currentDate.getDay()];
  const handleChange = (e) => {
    setItem(e.target.value);
    // console.log(item);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, item]);
    e.target.reset();
  };
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <header className="app-header">
        {/* <p>
          Todomatic
        </p> */}
        <div className="app-body">
          <p className="meta">👋🏻 It's {today}</p>
          <form className="todo-form" onSubmit={handleSubmit}>
            <input className="form-input" type="text" placeholder="What's your todo?" onChange={handleChange} />
            <input className="form-button" type="submit" value="+" />
          </form>
          <TodoList item={todos} delete={handleDelete} />
        </div>
      </header>
    </div>
  );
}

export default App;
