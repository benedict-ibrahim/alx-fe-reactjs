import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos correctly', () => {
    render(<TodoList />);
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    
    // Check if completed todo is marked as completed
    expect(screen.getByText('Build a Todo App')).toHaveStyle('text-decoration: line-through');
    
    // Check stats
    expect(screen.getByText('Total: 3')).toBeInTheDocument();
    expect(screen.getByText('Active: 2')).toBeInTheDocument();
    expect(screen.getByText('Completed: 1')).toBeInTheDocument();
  });

  test('adds a new todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    // Add a new todo
    await user.type(input, 'New Test Todo');
    await user.click(addButton);
    
    // Check if new todo is added
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    expect(screen.getByText('Total: 4')).toBeInTheDocument();
    expect(screen.getByText('Active: 3')).toBeInTheDocument();
  });

  test('does not add empty todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const initialTodoCount = screen.getAllByRole('listitem').length;
    const addButton = screen.getByText('Add Todo');
    
    // Try to add empty todo
    await user.click(addButton);
    
    // Check that no new todo was added
    expect(screen.getAllByRole('listitem')).toHaveLength(initialTodoCount);
  });

  test('toggles todo completion', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    
    // Toggle todo completion
    await user.click(todoText);
    
    // Check if todo is now completed
    expect(todoText).toHaveStyle('text-decoration: line-through');
    expect(screen.getByText('Completed: 2')).toBeInTheDocument();
    expect(screen.getByText('Active: 1')).toBeInTheDocument();
  });

  test('deletes a todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const initialTodoCount = screen.getAllByRole('listitem').length;
    const deleteButtons = screen.getAllByLabelText(/Delete/);
    
    // Delete the first todo
    await user.click(deleteButtons[0]);
    
    // Check if todo was deleted
    expect(screen.getAllByRole('listitem')).toHaveLength(initialTodoCount - 1);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getByText('Total: 2')).toBeInTheDocument();
  });

  test('shows empty messages when appropriate', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Delete all todos
    const deleteButtons = screen.getAllByLabelText(/Delete/);
    for (const button of deleteButtons) {
      await user.click(button);
    }
    
    // Check empty messages
    expect(screen.getByText('No active todos! 🎉')).toBeInTheDocument();
    expect(screen.getByText('No completed todos yet.')).toBeInTheDocument();
    expect(screen.getByText('Total: 0')).toBeInTheDocument();
  });
});