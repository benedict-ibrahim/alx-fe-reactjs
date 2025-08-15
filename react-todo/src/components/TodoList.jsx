import { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: true },
    { id: 3, text: 'Write Tests', completed: false }
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedTodos = todos.filter(todo => todo.completed);
  const activeTodos = todos.filter(todo => !todo.completed);

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      
      <AddTodoForm onAddTodo={addTodo} />
      
      <div className="todo-stats">
        <span>Total: {todos.length}</span>
        <span>Active: {activeTodos.length}</span>
        <span>Completed: {completedTodos.length}</span>
      </div>

      <div className="todos-section">
        <h2>Active Todos ({activeTodos.length})</h2>
        {activeTodos.length > 0 ? (
          <ul className="todo-list">
            {activeTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        ) : (
          <p className="empty-message">No active todos! 🎉</p>
        )}
      </div>

      <div className="todos-section">
        <h2>Completed Todos ({completedTodos.length})</h2>
        {completedTodos.length > 0 ? (
          <ul className="todo-list">
            {completedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        ) : (
          <p className="empty-message">No completed todos yet.</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;