import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoItem from '../components/TodoItem';

describe('TodoItem Component', () => {
  const mockTodo = {
    id: 1,
    text: 'Test Todo',
    completed: false
  };

  test('renders todo text and delete button', () => {
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={() => {}}
        onDelete={() => {}}
      />
    );
    
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByLabelText('Delete Test Todo')).toBeInTheDocument();
  });

  test('calls onToggle when todo text is clicked', async () => {
    const mockToggle = jest.fn();
    const user = userEvent.setup();
    
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={mockToggle}
        onDelete={() => {}}
      />
    );
    
    await user.click(screen.getByText('Test Todo'));
    
    expect(mockToggle).toHaveBeenCalledWith(1);
  });

  test('calls onDelete when delete button is clicked', async () => {
    const mockDelete = jest.fn();
    const user = userEvent.setup();
    
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={() => {}}
        onDelete={mockDelete}
      />
    );
    
    await user.click(screen.getByLabelText('Delete Test Todo'));
    
    expect(mockDelete).toHaveBeenCalledWith(1);
  });

  test('applies completed class when todo is completed', () => {
    const completedTodo = { ...mockTodo, completed: true };
    
    render(
      <TodoItem
        todo={completedTodo}
        onToggle={() => {}}
        onDelete={() => {}}
      />
    );
    
    const todoItem = screen.getByText('Test Todo').closest('li');
    expect(todoItem).toHaveClass('completed');
    expect(screen.getByText('Test Todo')).toHaveStyle('text-decoration: line-through');
  });
});