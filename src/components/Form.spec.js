import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form.js';

describe('Form', () => {
  it('renders a form with two input fields and a button', () => {
    render(<Form />);

    const nameOfActivity = screen.getByLabelText('name of activity:');
    const nameOfFriend = screen.getByLabelText('who should join you?');
    const submitButton = screen.getByRole('button');

    expect(nameOfActivity).toBeInTheDocument();
    expect(nameOfFriend).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('activity input is required', () => {
    render(<Form />);

    const nameOfActivity = screen.getByLabelText('name of activity:');

    expect(nameOfActivity).toBeRequired();
  });

  it('button submits, when all fields are filled out', () => {
    const addActivityCallback = jest.fn();
    render(<Form onAddActivity={addActivityCallback} />);

    const nameOfActivity = screen.getByLabelText('name of activity:');
    const nameOfFriend = screen.getByLabelText('who should join you?');
    const submitButton = screen.getByRole('button');

    userEvent.type(nameOfActivity, 'Stadtpark');
    userEvent.type(nameOfFriend, 'Jana');
    userEvent.click(submitButton);

    expect(addActivityCallback).toHaveBeenCalledWith({
      activity: 'Stadtpark',
      friend: 'Jana',
    });
  });

  it('button does not submit when activity is empty', () => {
    const addActivityCallback = jest.fn();
    render(<Form onAddActivity={addActivityCallback} />);

    const nameOfActivity = screen.getByLabelText('name of activity:');
    const submitButton = screen.getByRole('button');

    userEvent.type(nameOfActivity, 'Stadtpark');
    userEvent.click(submitButton);

    expect(addActivityCallback).not.toHaveBeenCalledWith();
  });
});
