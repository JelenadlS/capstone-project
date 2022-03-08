import { render, screen } from '@testing-library/react';
import Form from './Form.js';

describe('Form', () => {
  it('renders a form with two input fields and a button', () => {
    render(<Form />);

    const nameOfActivity = screen.getByRole('textbox', {
      name: /name of activity/,
    });
    const nameOfFriend = screen.getByRole('textbox', {
      name: /who should join you?/,
    });
    const submitButton = screen.getByRole('button');

    expect(nameOfActivity).toBeInTheDocument();
    expect(nameOfFriend).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
