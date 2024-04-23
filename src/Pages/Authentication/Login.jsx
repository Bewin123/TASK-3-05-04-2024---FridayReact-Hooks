import React, { useState } from 'react';
import './style.css'; // Import your colorful CSS file

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const addTodo = () => {
    if (taskName.trim() !== '') {
      const newTodo = { id: Date.now(), name: taskName, description, completed: false };
      setTodos([...todos, newTodo]);
      setTaskName('');
      setDescription('');
    }
  };

  const filterTodos = () => {
    switch (statusFilter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'not_completed':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  };

  const toggleTodo = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = filterTodos();

  return (
    <div className="container">
      <h1 className="header">
        MY TODO
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not_completed">Not Completed</option>
        </select>
        ▾
      </h1>

      <div className="add-todo">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="input-field"
        />
        <button onClick={addTodo} className="add-button">
          Add Todo
        </button>
      </div>

      <h1 className="section-title">MY TODOS</h1>

      <div className="todos">
        {filteredTodos.map(todo => (
          <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <h3>{todo.name}</h3>
            <p>{todo.description}</p>
            <button onClick={() => toggleTodo(todo.id)} className="toggle-button">
              {todo.completed ? 'Mark as Not Completed' : 'Mark as Completed'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;


















