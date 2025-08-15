import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddTodoForm from '../components/AddTodoForm';

describe('AddTodoForm Component', () => {
  test('calls onAddTodo with input value when form is submitted', async () => {
    const mockAddTodo = jest.fn();
    const user = userEvent.setup();
    
    render(<AddTodoForm onAddTodo={mockAddTodo} />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const button = screen.getByText('Add Todo');
    
    await user.type(input, 'Test Todo');
    await user.click(button);
    
    expect(mockAddTodo).toHaveBeenCalledWith('Test Todo');
    expect(input).toHaveValue('');
  });

  test('does not call onAddTodo when input is empty', async () => {
    const mockAddTodo = jest.fn();
    const user = userEvent.setup();
    
    render(<AddTodoForm onAddTodo={mockAddTodo} />);
    
    const button = screen.getByText('Add Todo');
    
    await user.click(button);
    
    expect(mockAddTodo).not.toHaveBeenCalled();
  });
});